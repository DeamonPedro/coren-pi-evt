import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSZTKFrWf4CPVV3f_kE8k_o1Zhq8WbjKA",
  authDomain: "coren-pi-evt.firebaseapp.com",
  projectId: "coren-pi-evt",
  storageBucket: "coren-pi-evt.appspot.com",
  messagingSenderId: "143877974701",
  appId: "1:143877974701:web:3d47fc6319ff30f0213424",
  measurementId: "G-NWH6PMJGQ3",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
