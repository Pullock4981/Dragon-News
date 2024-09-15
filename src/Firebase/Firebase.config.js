// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD85E1CDtfxshx47hgTno5YZN89-2O08k4",
  authDomain: "dragon-news-with-reactjs.firebaseapp.com",
  projectId: "dragon-news-with-reactjs",
  storageBucket: "dragon-news-with-reactjs.appspot.com",
  messagingSenderId: "1055148733859",
  appId: "1:1055148733859:web:4baf059bc4e164269f9616"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);