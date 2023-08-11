// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcOpr5hNrQKkQiWs778st4hnmpxT-DtmQ",
  authDomain: "blogs-project-fdc4c.firebaseapp.com",
  projectId: "blogs-project-fdc4c",
  storageBucket: "blogs-project-fdc4c.appspot.com",
  messagingSenderId: "779428207362",
  appId: "1:779428207362:web:c1e8b75e7141349198001b",
  measurementId: "G-2CWZ4KQ8G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const googleProvider=new GoogleAuthProvider();
export const db=getFirestore(app);
// const analytics = getAnalytics(app);