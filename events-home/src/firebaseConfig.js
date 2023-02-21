import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADVD0EchvXLZfiFsS5T6nOtLYTT3BJIsw",
  authDomain: "alumni-network-6b6d5.firebaseapp.com",
  projectId: "alumni-network-6b6d5",
  storageBucket: "alumni-network-6b6d5.appspot.com",
  messagingSenderId: "603176265639",
  appId: "1:603176265639:web:e10e28c4734433d1293882",
  measurementId: "G-QKZDQSXP3E",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
