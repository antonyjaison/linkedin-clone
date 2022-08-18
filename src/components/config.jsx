import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyB9NEv3fFtRjXQAtIFf4Y0445pEn_SIPM8",
  authDomain: "linkedin-clone-e7dc8.firebaseapp.com",
  projectId: "linkedin-clone-e7dc8",
  storageBucket: "linkedin-clone-e7dc8.appspot.com",
  messagingSenderId: "780186249755",
  appId: "1:780186249755:web:b079a3f21659c43f9d26be",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
