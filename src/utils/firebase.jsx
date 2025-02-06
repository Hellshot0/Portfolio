// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNuZBTDwdYn9OEDsCW3-82d_zxJ3FScyg",
  authDomain: "my-portfolio--9354.firebaseapp.com",
  projectId: "my-portfolio--9354",
  storageBucket: "my-portfolio--9354.firebasestorage.app",
  messagingSenderId: "568023172900",
  appId: "1:568023172900:web:748e00a80a5a42771bd5b1",
  measurementId: "G-G3Y4ZJTFE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);