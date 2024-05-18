
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAslkzjcP9Ycm-8SNLUQOONvJnROgSy8f8",
  authDomain: "solosphear.firebaseapp.com",
  projectId: "solosphear",
  storageBucket: "solosphear.appspot.com",
  messagingSenderId: "1075680050636",
  appId: "1:1075680050636:web:b1b21d1b8531e599403169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth