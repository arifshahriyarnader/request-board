// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCBEI6XCbFOgoNzd_rUdbyFG81ouCrSgU",
  authDomain: "request-board-2c26d.firebaseapp.com",
  projectId: "request-board-2c26d",
  storageBucket: "request-board-2c26d.appspot.com",
  messagingSenderId: "203172114007",
  appId: "1:203172114007:web:8fa09a8eec54825bedbd12"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;