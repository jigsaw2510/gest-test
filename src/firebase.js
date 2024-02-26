// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZr1NUxm-ei8y3ao_2mMYCviLLhgZzmGs",
  authDomain: "gest-33df1.firebaseapp.com",
  projectId: "gest-33df1",
  storageBucket: "gest-33df1.appspot.com",
  messagingSenderId: "997823842198",
  appId: "1:997823842198:web:95265723a4027ee4c17fb7",
  measurementId: "G-2SQ4941T9Q",
  databaseURL: 'https://gest-33df1-default-rtdb.europe-west1.firebasedatabase.app',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };  // Exporting the database object