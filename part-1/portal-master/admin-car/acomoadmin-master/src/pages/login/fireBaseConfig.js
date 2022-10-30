import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyC-SUKxipzIBNQHr2c71qjR-BwOGdCM4zY",
  authDomain: "accomodation-6b65e.firebaseapp.com",
  projectId: "accomodation-6b65e",
  storageBucket: "accomodation-6b65e.appspot.com",
  messagingSenderId: "1005998153392",
  appId: "1:1005998153392:web:24c9313f5591b22fcbe575"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth=getAuth(app)

