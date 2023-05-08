// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv1wOs3WMx7MMQMlDUZuLEp6LfWwgUdow",
  authDomain: "the-news-dragon-aad14.firebaseapp.com",
  projectId: "the-news-dragon-aad14",
  storageBucket: "the-news-dragon-aad14.appspot.com",
  messagingSenderId: "957908293887",
  appId: "1:957908293887:web:0a18d9c4847bfeacbdd4ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;