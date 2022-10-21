import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpgG8W6ao4hUauXRgbS_i0J-fActyd0sk",
  authDomain: "netflix-clone-7a9a6.firebaseapp.com",
  projectId: "netflix-clone-7a9a6",
  storageBucket: "netflix-clone-7a9a6.appspot.com",
  messagingSenderId: "210528818721",
  appId: "1:210528818721:web:1ecfc9f78f7d9aeb8f7560",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
