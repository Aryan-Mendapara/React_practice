// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
  import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPKbuHX9aFK8bSRvGSrtrjrT0d3I-UX88",
  authDomain: "practice-a53fa.firebaseapp.com",
  projectId: "practice-a53fa",
  storageBucket: "practice-a53fa.firebasestorage.app",
  messagingSenderId: "648807048924",
  appId: "1:648807048924:web:400b13b73cb441f8783619",
  measurementId: "G-XVE3C32X30"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)

// export const db = getDatabase(app)