import { initializeApp, FirebaseOptions } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyAbcQh26cnhGrqDNhauto_fM4cuxFjtXw0",
  authDomain: "chat-capacitor.firebaseapp.com",
  projectId: "chat-capacitor",
  storageBucket: "chat-capacitor.appspot.com",
  messagingSenderId: "309776191628",
  appId: "1:309776191628:web:a777252984d10b57f0eba9",
  measurementId: "G-E0FLC6L1B7",
  databaseURL:
    "https://chat-capacitor-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
