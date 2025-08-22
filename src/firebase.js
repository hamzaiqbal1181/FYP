// Firebase configuration and initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpe01BOct9knQmibT-ODzicXbGzghC--c",
  authDomain: "travelore-c7e33.firebaseapp.com",
  projectId: "travelore-c7e33",
  storageBucket: "travelore-c7e33.appspot.com",
  messagingSenderId: "757000293824",
  appId: "1:757000293824:web:f6b6d9df5d42c4982a4c25",
  measurementId: "G-FFMMH5HXQZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
