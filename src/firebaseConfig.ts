// src/firebaseConfig.ts

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMJJWfqpWgN8Dbe535_etOWDB0Of5NhJM",
  authDomain: "agroforte-mp.firebaseapp.com",
  projectId: "agroforte-mp",
  storageBucket: "agroforte-mp.firebasestorage.app",
  messagingSenderId: "981698080928",
  appId: "1:981698080928:web:9f095713742711f14619c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
