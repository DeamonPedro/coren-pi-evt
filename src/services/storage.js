import firebase from "./firebase";

export const storage = firebase.storage();

const layouts = storage.ref("layouts");

export const getLayoutsByCampaignData = async (campaignData) => {
  return new Promise(() => {});
};

export const deleteLayoutByURL = (imageURL) => {
  return new Promise((resolve, reject) => {
    storage
      .refFromURL(imageURL)
      .delete()
      .then(() => resolve(true))
      .catch((err) => {
        console.log(err);
        reject(new Error(err.message));
      });
  });
};

export const uploadLayout = (userID, image, imgName) => {
  const name = imgName || Math.random().toString(36).substring(2);
  const task = layouts.child(userID + "/" + name).putString(image, "data_url");
  task.catch((err) => {
    console.log(err);
    new Error(err.message);
  });
  return task;
};
