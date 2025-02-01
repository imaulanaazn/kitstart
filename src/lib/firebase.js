// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1ibH8IFAOOHR3kcbMPd54whFsCeWO9ng",
  authDomain: "kitstart-80fc0.firebaseapp.com",
  projectId: "kitstart-80fc0",
  storageBucket: "kitstart-80fc0.firebasestorage.app",
  messagingSenderId: "801209507822",
  appId: "1:801209507822:web:a692021d14a5226a9138ff",
  measurementId: "G-H57D6PGKNF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
