// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {browserLocalPersistence, getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection} from "firebase/firestore";
import { Platform } from "react-native";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd6w84IoMmCeAZRAaQCC-WJ44uttu8GlY",
  authDomain: "langouts-54a2b.firebaseapp.com",
  projectId: "langouts-54a2b",
  storageBucket: "langouts-54a2b.appspot.com",
  messagingSenderId: "51919990427",
  appId: "1:51919990427:web:0e8b07089e3f4bf767603e",
  measurementId: "G-84QR919GFQ"
};

let persistence;

if (Platform.OS === 'web') {
persistence = browserLocalPersistence;
} else {
persistence = getReactNativePersistence(AsyncStorage);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, { persistence});
export const db = getFirestore(app);
export const userRef = collection(db, 'users');
export const groupRef = collection(db, 'groups');
export const roomsRef = collection(db, 'roomms');
