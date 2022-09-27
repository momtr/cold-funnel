// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7agYchYIAzlwSc1jxpcJ8goyghUjU5j0",
  authDomain: "oneup-web-f563c.firebaseapp.com",
  databaseURL: "https://oneup-web-f563c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "oneup-web-f563c",
  storageBucket: "oneup-web-f563c.appspot.com",
  messagingSenderId: "614160060872",
  appId: "1:614160060872:web:cf4aba59ac7f199240f0fd",
  measurementId: "G-8QHYZV4674"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;