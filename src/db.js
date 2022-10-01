// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaRiXM-2whXZPVckhYrhRNniN7CmPS5CE",
  authDomain: "sushi-fresh-paris.firebaseapp.com",
  projectId: "sushi-fresh-paris",
  storageBucket: "sushi-fresh-paris.appspot.com",
  messagingSenderId: "532424278098",
  appId: "1:532424278098:web:afe45aaef115f8e9fc1f8b",
  measurementId: "G-G8CLS0NVQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db