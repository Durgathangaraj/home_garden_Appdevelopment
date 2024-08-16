// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDPC8s9A9cLskmmLYJQD53kWoNGkMdMRJ8",
    authDomain: "home-garden-1d240.firebaseapp.com",
    projectId: "home-garden-1d240",
    storageBucket: "home-garden-1d240.appspot.com",
    messagingSenderId: "388447126859",
    appId: "1:388447126859:web:a2f6b6ced7f91caf2014ce",
    measurementId: "G-MFRBTYLYVZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db};
