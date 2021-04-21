import firebase from "./firebase";

const firestore = firebase.firestore();

const usersCollection = firestore.collection("users");
const livesCollection = firestore.collection("lives");

export const getUserData = async (uid) => {
  return new Promise((resolve, reject) => {
    usersCollection
      .doc(uid)
      .get()
      .then((userData) => {
        if (userData.exists) {
          resolve(userData.data());
        } else {
          reject("not exist");
        }
      })
      .catch((err) => reject(err));
  });
};

export const registerUserData = async (uid, userData) => {
  return new Promise(async (resolve, reject) => {
    usersCollection
      .doc(uid)
      .set(userData)
      .then(() => {
        resolve(userData);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getAllLivesData = () => {
  return new Promise((resolve, reject) => {
    livesCollection
      .orderBy("startOn", "asc")
      .get()
      .then((docList) => {
        const liveList = docList.docs.map((live) => ({
          liveID: live.id,
          ...live.data(),
        }));
        resolve(liveList);
      })
      .catch((err) => reject(err));
  });
};
