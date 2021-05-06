import firebase from "./firebase";

export const auth = firebase.auth();

auth.languageCode = "pt";

export const GoogleLogin = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return Redirect(provider);
};

const Redirect = async (provider) => {
  return auth.signInWithRedirect(provider);
};

export const Logout = async () => {
  await auth.signOut();
};
