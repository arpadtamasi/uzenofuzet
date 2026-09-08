/** Google-belépés úgy, hogy a Claude felől érkező szülő is be tudjon lépni.
 *
 *  A Claude a kapcsolódást a telefon böngészőjében — gyakran az appon belüli
 *  böngészőben — nyitja meg, ahol a felugró ablak meg sem nyílik: ott
 *  átirányítással lépünk be, és a visszatérő lapon fejezzük be a belépést.
 *  A felugró ablakot csak asztali böngészőben kérjük, mert ott a szülő nem
 *  veszíti el az oldalt, ahol éppen jár. */
import {
  getRedirectResult,
  reauthenticateWithPopup,
  reauthenticateWithRedirect,
  signInWithPopup,
  signInWithRedirect,
  type User,
} from "firebase/auth";
import { auth, provider } from "./firebase";

/** A "redirecting" azt jelenti: a lap elnavigál, a hívó ne írjon ki semmit. */
export type SignInOutcome = "signed-in" | "redirecting";

/** Mobilon és appba ágyazott böngészőben a felugró ablakot vagy letiltják,
 *  vagy a szülő nem találja meg — ezekben eleve átirányítunk. */
export function popupWouldOpen(): boolean {
  if (/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)) return false;
  // Beágyazott lapnak nincs saját ablaka, ahova a Google-belépés kinyílhatna.
  return window.top === window.self;
}

/** Nem a szülő szakította meg: ezeknél a böngésző korlátja miatt megyünk tovább. */
const REDIRECT_INSTEAD = new Set([
  "auth/popup-blocked",
  "auth/operation-not-supported-in-this-environment",
  "auth/web-storage-unsupported",
  "auth/internal-error",
]);

function browserRefusedThePopup(error: unknown): boolean {
  const code = (error as { code?: unknown } | null)?.code;
  return typeof code === "string" && REDIRECT_INSTEAD.has(code);
}

/** Belépés. Hívd a kattintásból közvetlenül: await előtte megöli a felugró ablakot. */
export async function signInWithGoogle(): Promise<SignInOutcome> {
  if (popupWouldOpen()) {
    try {
      await signInWithPopup(auth, provider);
      return "signed-in";
    } catch (error) {
      if (!browserRefusedThePopup(error)) throw error;
    }
  }
  await signInWithRedirect(auth, provider);
  return "redirecting";
}

/** A friss belépés igazolása: a munkamenetsüti csak percekkel ezelőtti belépésre jár. */
export async function reauthenticateWithGoogle(user: User): Promise<SignInOutcome> {
  if (popupWouldOpen()) {
    try {
      await reauthenticateWithPopup(user, provider);
      return "signed-in";
    } catch (error) {
      if (!browserRefusedThePopup(error)) throw error;
    }
  }
  await reauthenticateWithRedirect(user, provider);
  return "redirecting";
}

/** Az átirányításból visszatérő lap itt zárja le a belépést; hiba csak itt derül ki. */
export async function finishRedirectSignIn(): Promise<boolean> {
  return Boolean(await getRedirectResult(auth));
}
