// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "bingo-38c6a.firebaseapp.com",
  projectId: "bingo-38c6a",
  storageBucket: "bingo-38c6a.firebasestorage.app",
  messagingSenderId: "809482551066",
  appId: "1:809482551066:web:fa95512ac3c20b2d3bb6a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export {app,auth}





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
//   authDomain: "bingo-38c6a.firebaseapp.com",
//   projectId: "bingo-38c6a",
//   storageBucket: "bingo-38c6a.firebasestorage.app",
//   messagingSenderId: "809482551066",
//   appId: "1:809482551066:web:fa95512ac3c20b2d3bb6a3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);