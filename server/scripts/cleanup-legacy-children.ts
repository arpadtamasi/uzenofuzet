/**
 * Egyszeri takarítás: a mezőtitkosítás (18aa12e, 09-05) előtti gyerek-
 * dokumentumok eltávolítása.
 *
 * Nem nyers Firestore-törlés: a szerver saját store-ját használja, így a
 * connectionRefreshQueue bejegyzés is elmegy, és a KRÉTA refresh-token
 * visszavonását is megpróbálja. A törlendő dokumentumokat azonosító alapján
 * kell megadni — a szkript magától semmit nem töröl.
 *
 * Futtatás a server/ könyvtárból:
 *   TOKEN_SEALING_KEY="$(gcloud secrets versions access latest \
 *       --secret=uzenofuzet-sealing-key-eu --project uzenofuzet)" \
 *   GOOGLE_CLOUD_PROJECT=uzenofuzet \
 *   npx tsx scripts/cleanup-legacy-children.ts <uid> <dokumentum-id> [id…]
 *
 * Szárazon (nem töröl, csak kiírja, mit tenne): tedd elé a DRY_RUN=1-et.
 */
import { Firestore } from "@google-cloud/firestore";
import { Sealer } from "../src/seal.js";
import { FirestoreChildProfileStore } from "../src/profiles/store.js";
import { openConnectionCredential } from "../src/profiles/connection.js";
import { revokeRefreshToken } from "@uzenofuzet/core/kreta";
import { installKretaRelayFromEnv } from "../src/kreta/relay.js";

const [uid, ...ids] = process.argv.slice(2);
if (!uid || (uid !== "--list" && ids.length === 0)) {
  console.error(
    "Használat:\n" +
      "  npx tsx scripts/cleanup-legacy-children.ts --list                   (mit találunk)\n" +
      "  npx tsx scripts/cleanup-legacy-children.ts <uid> <doc-id> [doc-id…] (törlés)",
  );
  process.exit(2);
}

const dryRun = process.env.DRY_RUN === "1";
const key = process.env.TOKEN_SEALING_KEY?.trim();
if (!key) {
  console.error("TOKEN_SEALING_KEY kell (uzenofuzet-sealing-key-eu).");
  process.exit(2);
}

// A visszavonás is KRÉTA-hívás: ha van relay, azon menjen.
installKretaRelayFromEnv();

const sealer = Sealer.fromBase64(key);
const firestore = new Firestore({ projectId: process.env.GOOGLE_CLOUD_PROJECT ?? "uzenofuzet" });
const store = new FirestoreChildProfileStore(firestore, sealer);

if (uid === "--list") {
  for (const parent of await firestore.collection("users").listDocuments()) {
    const children = await parent.collection("children").get();
    console.log(`szülő ${parent.id}  (${children.size} dokumentum)`);
    for (const doc of children.docs) {
      const data = doc.data() as { nameFingerprint?: unknown; createdAt?: { toDate?: () => Date } };
      const legacy = typeof data.nameFingerprint !== "string" || !data.nameFingerprint;
      console.log(
        `  ${doc.id}  ${legacy ? "ÖRÖKÖLT (nincs ujjlenyomat)" : "rendben"}` +
          `  létrehozva ${data.createdAt?.toDate?.()?.toISOString() ?? "?"}`,
      );
    }
  }
  process.exit(0);
}

for (const id of ids) {
  const profile = await store.get(uid, id);
  if (!profile) {
    console.log(`${id}: nincs ilyen dokumentum, kihagyva`);
    continue;
  }
  console.log(
    `${id}: név "${profile.childName || "(nem olvasható — örökölt, titkosítatlan rekord)"}"` +
      ` | ujjlenyomat: ${profile.nameFingerprint || "nincs"}` +
      ` | kapcsolat: ${profile.connection ? "van" : "nincs"}` +
      ` | létrehozva ${profile.createdAt}`,
  );

  if (dryRun) {
    console.log(`   DRY_RUN — nem törlöm`);
    continue;
  }

  if (profile.connection) {
    try {
      const credential = openConnectionCredential(sealer, profile.connection);
      const revoked = await revokeRefreshToken(credential.refreshToken);
      console.log(`   KRÉTA refresh-token visszavonás: ${revoked ? "megtörtént" : "nem sikerült"}`);
    } catch {
      // Régebbi kulccsal pecsételt kapcsolat: a tokenhez nem férünk hozzá.
      console.log(`   KRÉTA refresh-token: nem nyitható (más kulcs), visszavonás kihagyva`);
    }
  }

  console.log(`   törlés: ${(await store.delete(uid, id)) ? "kész" : "nem található"}`);
}

console.log("\nA maradék profilok:");
for (const profile of await store.list(uid)) {
  console.log(`  - ${profile.id} | ${profile.childName} | kapcsolat: ${profile.connection ? "van" : "nincs"}`);
}
