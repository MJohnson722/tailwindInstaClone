// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi0Hvus3ZKGy76eycu1kvKpMG9ITw-cv8",
  authDomain: "instagram-clone-f7bd7.firebaseapp.com",
  projectId: "instagram-clone-f7bd7",
  storageBucket: "instagram-clone-f7bd7.appspot.com",
  messagingSenderId: "424425918608",
  appId: "1:424425918608:web:ccf79cdac3def21d9b8815",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
