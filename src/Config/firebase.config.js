// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKmkpcKHt9ZIlgteXWbKU_zO9A6gcvnr8",
  authDomain: "b12-a9-firesheild-abapurbo.firebaseapp.com",
  projectId: "b12-a9-firesheild-abapurbo",
  storageBucket: "b12-a9-firesheild-abapurbo.firebasestorage.app",
  messagingSenderId: "11139341639",
  appId: "1:11139341639:web:734b0b970021eb7bd40062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
