/** A böngészőoldali Firebase-belépés egyetlen példánya. */
import { getApps, initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFaJ8tV0bC4yfff6pTj09M1Oc17S9KuPc",
  // A saját domain, nem a firebaseapp.com: az átirányításos belépés csak
  // akkor ér vissza mobilon (Safari, appon belüli böngésző), ha a Google
  // belépéskezelője ugyanerről az origin-ről jön. A Firebase Hosting ezt a
  // /__/auth/* útvonalon kiszolgálja; a Google OAuth-kliens engedélyezett
  // átirányítási URI-jai közt szerepelnie kell: https://uzenofuzet.hu/__/auth/handler
  authDomain: "uzenofuzet.hu",
  projectId: "uzenofuzet",
  messagingSenderId: "652545082668",
  appId: "1:652545082668:web:2ae336556523a75af4d889",
};

export const auth = getAuth(getApps()[0] ?? initializeApp(firebaseConfig));

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
