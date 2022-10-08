import * as firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAdPt6_LJ-DwMavHt3ufc_x-VlreekeYvk",
  // AIzaSyAdPt6_LJ-DwMavHt3ufc_x-VlreekeYvk
  authDomain: "pyflask-7b72d.firebaseapp.com",
  projectId: "pyflask-7b72d",
  storageBucket: "pyflask-7b72d.appspot.com",
  messagingSenderId: "501952046302",
  appId: "1:501952046302:web:9614cffeed80f062e6ce4f",
  measurementId: "G-3LP2HV9X0F",
};

firebase.initializeApp(config);

export default firebase.firestore();
