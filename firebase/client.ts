
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYPiZ39HBdgv_aWnP1rz8QbGF78fznNng",
  authDomain: "prepwise1-71a1e.firebaseapp.com",
  projectId: "prepwise1-71a1e",
  storageBucket: "prepwise1-71a1e.firebasestorage.app",
  messagingSenderId: "546308611262",
  appId: "1:546308611262:web:7f2820a3b75c2e41bf92ef",
  measurementId: "G-1XJKPVR0CV"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);