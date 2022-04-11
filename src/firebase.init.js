// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7zEkuBbE59i60OotYj4drbwscACV1wTU",
  authDomain: "my-genius-car-services-4256c.firebaseapp.com",
  projectId: "my-genius-car-services-4256c",
  storageBucket: "my-genius-car-services-4256c.appspot.com",
  messagingSenderId: "607748751470",
  appId: "1:607748751470:web:03265a95ecd6396e75267f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app);
export default auth;