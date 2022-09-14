import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APIKEY,
  authDomain: process.env.REACT_AUTHDOMAIN,
  projectId: process.env.REACT_projectId,
  storageBucket: process.env.REACT_storageBucket,
  messagingSenderId: process.env.REACT_messagingSenderId,
  appId: process.env.REACT_appId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
