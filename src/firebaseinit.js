// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJtJOi64vPy6AoezxSffv2Gyu7lg3thQk",
  authDomain: "photo-album-39e5c.firebaseapp.com",
  projectId: "photo-album-39e5c",
  storageBucket: "photo-album-39e5c.appspot.com",
  messagingSenderId: "1060860089710",
  appId: "1:1060860089710:web:7644fea840c203ecff1d7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
