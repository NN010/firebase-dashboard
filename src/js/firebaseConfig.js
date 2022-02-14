// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA21vZqrsPvFQjXrt_2LVMOZO6Ix2zN08o",
  authDomain: "storefront-a83ac.firebaseapp.com",
  databaseURL: "https://storefront-a83ac-default-rtdb.firebaseio.com",
  projectId: "storefront-a83ac",
  storageBucket: "storefront-a83ac.appspot.com",
  messagingSenderId: "654741098991",
  appId: "1:654741098991:web:4c32c8f448b406eff6e61a",
  measurementId: "G-W3DMHKHS4K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);