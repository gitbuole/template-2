import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPId5VGGnUjNOBBoLw3zYoJmhSgisiZGU",
  authDomain: "email-generator-5c768.firebaseapp.com",
  projectId: "email-generator-5c768",
  storageBucket: "email-generator-5c768.firebasestorage.app",
  messagingSenderId: "226833217026",
  appId: "1:226833217026:web:68a766ee03fbcb8f0c591b",
  measurementId: "G-4ZXH8R7WMG"
};


// Initialize Firebase only if it hasn't been initialized already
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
