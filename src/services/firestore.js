import firebase from "./firebase";

const firestore = firebase.firestore();

const campaigns = firestore.collection("campaigns");
const usersCollection = firestore.collection("users");

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

export const getCampaignByName = async (campaignName) => {
  return new Promise((resolve, reject) => {
    campaigns
      .doc(campaignName)
      .get()
      .then((res) => {
        if (res.exists) {
          resolve(res.data());
        } else {
          reject(new Error("not found"));
        }
      })
      .catch((err) => {
        reject(new Error(err.message));
      });
  });
};

export const createCampaign = async (campaignName, plan, authorID) => {
  return new Promise((resolve, reject) => {
    const basicData = {
      author: authorID,
      published: plan === "free" ? true : false,
      palette: ["#178FD6", "#034488", "#F2CB05"],
      plan,
      landscapeLayouts: [],
      portraitLayouts: [],
      squareLayouts: [],
    };
    campaigns
      .doc(campaignName)
      .get()
      .then((res) => {
        if (res.exists) {
          reject(new Error("already exists"));
        } else {
          campaigns
            .doc(campaignName)
            .set(basicData)
            .then(() => {
              resolve(basicData);
            })
            .catch((err) => {
              reject(new Error(err.message));
            });
        }
      })
      .catch((err) => {
        reject(new Error(err.message));
      });
  });
};

export const editCampaignLogo = async (campaignName, newLogoURL) => {
  return new Promise((resolve, reject) => {
    campaigns
      .doc(campaignName)
      .set({ logo: newLogoURL }, { merge: true })
      .then(() => {
        resolve(true);
      })
      .catch((err) => {
        reject(new Error(err));
      });
  });
};

export const removeLayoutFromCampaign = async (
  campaignName,
  layoutType,
  layoutURL
) => {
  return new Promise((resolve, reject) => {
    campaigns
      .doc(campaignName)
      .update({
        [layoutType]: firebase.firestore.FieldValue.arrayRemove(layoutURL),
      })
      .then((res) => {
        console.log(res);
        resolve(true);
      })
      .catch((err) => {
        reject(new Error(err.message));
      });
  });
};

export const getCampaignsByAuthor = async (authorID) => {
  return new Promise((resolve, reject) => {
    campaigns
      .where("author", "==", authorID)
      .get()
      .then((res) => {
        console.log(res.docs);
        resolve(
          res.docs.map((doc) => {
            return { name: doc.id, ...doc.data() };
          })
        );
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const addLayoutToCampaign = async (
  campaignName,
  layoutType,
  layoutURL
) => {
  return new Promise((resolve, reject) => {
    campaigns
      .doc(campaignName)
      .update({
        [layoutType]: firebase.firestore.FieldValue.arrayUnion(layoutURL),
      })
      .then(() => resolve())
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const editCampaignPalette = async (campaignName, newPalette) => {
  return new Promise((resolve, reject) => {
    campaigns
      .doc(campaignName)
      .update({
        palette: newPalette,
      })
      .then(() => resolve())
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const deleteCampaignData = async (campaignName) => {
  return new Promise((resolve, reject) => {
    campaigns
      .doc(campaignName)
      .delete()
      .then(() => {
        resolve(true);
      })
      .catch((err) => {
        reject(new Error(err));
      });
  });
};

export const registerDownload = async (campaignName, layoutType) => {
  return new Promise((resolve, reject) => {
    campaigns
      .doc(campaignName)
      .update({
        [layoutType + "Count"]: firebase.firestore.FieldValue.increment(1),
      })
      .then(() => resolve())
      .catch((err) => {
        reject(err);
      });
  });
};
