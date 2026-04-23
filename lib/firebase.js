// lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASEKjaJepKs6cNRcgmAcuGzeY5xWFWhhk",
  authDomain: "editbridge-eb556.firebaseapp.com",
  projectId: "editbridge-eb556",
  storageBucket: "editbridge-eb556.firebasestorage.app",
  messagingSenderId: "69947107651",
  appId: "1:69947107651:web:1b6e26c511be9de34a67f6",
  measurementId: "G-1SSE05J2YD",
};

// Prevent multiple initializations (important in Next.js)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };