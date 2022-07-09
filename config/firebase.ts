// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbh0B_3Poo5a7YdOb7leER4hznFCM3F-4",
  authDomain: "checketch-8a4bf.firebaseapp.com",
  projectId: "checketch-8a4bf",
  storageBucket: "checketch-8a4bf.appspot.com",
  messagingSenderId: "38412614844",
  appId: "1:38412614844:web:e260ec7ca900e075f7a4b9",
  measurementId: "G-M8EMYLCRQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);