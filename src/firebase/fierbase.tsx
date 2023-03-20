
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { IfireConfig } from "../types/types";

const firebaseConfig: IfireConfig = {
  apiKey: "AIzaSyD1O3GxFmj1NwXeLzjvp9lqvDw-XQ-BP_c",
  authDomain: "fire-shop-6c6b7.firebaseapp.com",
  projectId: "fire-shop-6c6b7",
  storageBucket: "fire-shop-6c6b7.appspot.com",
  messagingSenderId: "641352612979",
  appId: "1:641352612979:web:07b09e5e0980666bf4be06",
  measurementId: "G-DYN95Z42SE"
};



const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const joinWithGoogle = new GoogleAuthProvider();

export{
  auth,
  joinWithGoogle
}