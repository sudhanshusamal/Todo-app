// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVRCCjYMiS6ux3XZCUVPRg8gG1rQ8b5Qo",
  authDomain: "todo-app-triluxo-48eeb.firebaseapp.com",
  projectId: "todo-app-triluxo-48eeb",
  storageBucket: "todo-app-triluxo-48eeb.appspot.com",
  messagingSenderId: "664785628445",
  appId: "1:664785628445:web:3094fea7c105f15c6485f4",
  measurementId: "G-R8DVBXTPRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }