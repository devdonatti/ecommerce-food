// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJm3rx1HlUfSfp8XS2XhsfKDcXeEmOLjQ",
  authDomain: "burger-shop-e8c82.firebaseapp.com",
  projectId: "burger-shop-e8c82",
  storageBucket: "burger-shop-e8c82.appspot.com",
  messagingSenderId: "763874836614",
  appId: "1:763874836614:web:4c059d89b918380951d107"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);