import firebase from "./firebase";

const firestore = firebase.firestore();

const usersCollection = firestore.collection("users");
const livesCollection = firestore.collection("lives");

export const getUserData = async (userID) => {
  return new Promise((resolve, reject) => {
    usersCollection
      .doc(userID)
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

export const registerUserData = async (userID, userData) => {
  return new Promise(async (resolve, reject) => {
    usersCollection
      .doc(userID)
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
          id: live.id,
          ...live.data(),
        }));
        resolve(liveList);
      })
      .catch((err) => reject(err));
  });
};

export const registerPresence = (userID, liveID) => {
  return new Promise((resolve, reject) => {
    usersCollection
      .doc(userID)
      .update({
        completed: firebase.firestore.FieldValue.arrayUnion(liveID),
      })
      .then(() => resolve())
      .catch((err) => {
        reject(err);
      });
  });
};
