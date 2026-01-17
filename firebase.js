 import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHOvI5NSlMfG-A9TsRonoSaDRRtXoldmE",
  authDomain: "student-app-3a559.firebaseapp.com",
  projectId: "student-app-3a559",
  storageBucket: "student-app-3a559.appspot.com",
  messagingSenderId: "218818568508",
  appId: "1:218818568508:web:25c9048d6ca3ac4769be39",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
