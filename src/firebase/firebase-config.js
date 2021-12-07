import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRqNR-YrQ3C2_YSr8oo_A2asEasp9GUnw",
  authDomain: "react-app-a3c08.firebaseapp.com",
  projectId: "react-app-a3c08",
  storageBucket: "react-app-a3c08.appspot.com",
  messagingSenderId: "846653047827",
  appId: "1:846653047827:web:343ed77194f28ea522ebe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore();
const googleAuth=new GoogleAuthProvider();
export {
    db,
    googleAuth,
}