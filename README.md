# Üzenőfüzet

Az Üzenőfüzet csak olvasható KRÉTA-integráció Claude-hoz. Két formában létezik,
közös maggal — a különbség az, hol futnak a dolgok és ki kezeli az adatot:

| | [Hosztolt szolgáltatás](server/) | [Asztali bővítmény](desktop/) |
| --- | --- | --- |
| Hol fut | Cloud Run + Firestore | a szülő gépén |
| Claude | web, mobil, asztali (Custom Connector) | Claude asztali alkalmazás |
| Adatforrás | KRÉTA + Google Classroom | KRÉTA |
| Adatkezelő | a szolgáltatás üzemeltetője | a szülő maga |
| Beállítás | webes kapcsolati pult, max. 3 gyerek | helyi beállító oldal, tetszőleges számú gyerek |

A **hosztolt** vonal: Firebase Hosting (landing, tájékoztatók, szülői
dashboard), Cloud Run (belépés, OAuth, MCP, KRÉTA- és Classroom-kapcsolatok),
Firestore (privát gyerekprofilok, időkorlátos titkosított kapcsolatok).

Az **asztali** vonal egyetlen `.mcpb` fájl: nincs mögötte szerver, fiók vagy
kiadott token, és a KRÉTA-jelszó nem hagyja el a gépet. Részletek a
[`desktop/README.md`](desktop/README.md)-ben.

## Adatkezelési alapelvek

Mindkét vonalra igaz:

- Kizárólag rögzített olvasási műveletek; nincs írás, törlés, sem tetszőleges
  KRÉTA-útvonalat lekérő tool.

A hosztolt szolgáltatásra:

- A KRÉTA-jelszó csak a belépés idejére kerül a Cloud Run folyamat memóriájába,
  majd azonnal eldobásra kerül.
- A lejáró KRÉTA-tokenek és Classroom refresh tokenek AES-256-GCM-mel lezárva
  kerülnek a privát Firestore-profilba.
- A szülő Google-belépése és a gyerekek Classroom-fiókjai külön
  Google-munkamenetek.
- A kapcsolat bármikor kikapcsolható és törölhető a dashboardon.

Az asztali bővítményre:

- A KRÉTA-jelszó a szülő gépén marad, AES-256-GCM-mel titkosítva; a kulcs a
  rendszer kulcstárolójában.
- A hozzáférési token csak a folyamat memóriájában él, a Claude bezárásáig.
- Nincs köztes szerver és nincs visszavonandó token: a törlés a gépen egy
  fájl törlése.

Az Üzenőfüzet független projekt, nem áll kapcsolatban az eKRÉTA Zrt.-vel, és
nem hivatalos KRÉTA-termék. A részletes adatkezelési tájékoztató és
felhasználási feltételek a publikus weboldalon érhetők el.

## Fejlesztés

A repó egy npm workspace három csomaggal:

- [`core/`](core/) — KRÉTA-kliens, iskolakereső és a csak olvasható MCP
  tool-tábla; mindkét vonal ezt használja;
- [`server/`](server/) — a hosztolt szolgáltatás (backend + web);
- [`desktop/`](desktop/) — az asztali bővítmény és a `.mcpb` csomagolás.

Helyi belépési adatok a [`secrets/`](secrets/) mappában; a Git egyedül az ottani
README-t követi.

```bash
npm install
npm test
npm run typecheck
npm run build
npm run pack:desktop   # dist/uzenofuzet-<verzió>.mcpb
```

A backend helyi indítása:

```bash
cd server
TOKEN_SEALING_KEY="$(npm run --silent keygen)" \
OAUTH_ALLOWED_REDIRECT_URIS="http://localhost:6274/oauth/callback" \
npm run dev
```

A szükséges környezeti változókat és az infrastruktúra részleteit a
[`server/README.md`](server/README.md) dokumentálja.

## Deploy

Firebase Hosting és Firestore-szabályok:

```bash
npm run build:web -w uzenofuzet-server
cd server && firebase deploy --project uzenofuzet --only firestore:rules,hosting
```

A backend Cloud Runra kerül, a **repó gyökeréből** — a build kontextusnak
tartalmaznia kell a `core/` csomagot is:

```bash
gcloud run deploy uzenofuzet --source . --region europe-west1 --project uzenofuzet
``` A production parancsot, a Secret Manager
hivatkozásokat, a Classroom OAuth-beállításokat és a scheduler konfigurációját
lásd a [`server/README.md`](server/README.md) Deploy szakaszában.

## Licenc

[Apache License 2.0](LICENSE). A szoftver „AS IS” állapotban használható; a
KRÉTA rendszeréhez, nevéhez és védjegyéhez nem biztosít jogot.
