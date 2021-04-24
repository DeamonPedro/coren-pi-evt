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

export const searchUserByCPF = (CPF) => {
  return new Promise((resolve, reject) => {
    usersCollection
      .where("CPF", "==", CPF)
      .get()
      .then((docList) => {
        if (docList.docs.length) {
          const userData = docList.docs[0];
          resolve({
            id: userData.id,
            ...userData.data(),
          });
        } else {
          reject("not exist");
        }
      })
      .catch((err) => reject(err));
  });
};

export const getAnalytics = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const nurse = (await usersCollection.where("nurse", "==", "nurse").get())
        .docs.length;
      const nursingTec = (
        await usersCollection.where("nurse", "==", "nursingTec").get()
      ).docs.length;
      const nursingAssist = (
        await usersCollection.where("nurse", "==", "nursingAssist").get()
      ).docs.length;
      const student = (
        await usersCollection.where("nurse", "==", "student").get()
      ).docs.length;

      const certified = (
        await usersCollection
          .where("completed", "array-contains", "O1m22MV0hy09LOW2vXC1")
          .get()
      ).docs.length;
      resolve({
        nurse,
        nursingTec,
        nursingAssist,
        student,
        certified,
        total: nurse + nursingTec + nursingAssist + student,
      });
    } catch (error) {
      reject(error);
    }
  });
};
