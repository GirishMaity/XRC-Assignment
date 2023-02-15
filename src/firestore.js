import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: config.env.FIRESTORE_API_KEY,
  authDomain: "xrc-assignment-67124.firebaseapp.com",
  projectId: "xrc-assignment-67124",
  storageBucket: "xrc-assignment-67124.appspot.com",
  messagingSenderId: "136460969161",
  appId: "1:136460969161:web:339a192b77f89906795918",
  measurementId: "G-ECHTYXFFKC",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
