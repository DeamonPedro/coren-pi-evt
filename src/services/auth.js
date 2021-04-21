import firebase from "./firebase";

export const auth = firebase.auth();

auth.languageCode = "pt";

export const GooglePopupLogin = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return CreatePopup(provider);
};

const CreatePopup = async (provider) => {
  return auth.signInWithPopup(provider);
};

export const Logout = async () => {
  await auth.signOut();
};
