require('dotenv').config();
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "creattek-services.firebaseapp.com",
  databaseURL: "https://creattek-services-default-rtdb.firebaseio.com",
  projectId: "creattek-services",
  storageBucket: "creattek-services.appspot.com",
  messagingSenderId: "10606137426",
  appId: "1:10606137426:web:17eb7e3ebe72c2fbbacf8b",
  measurementId: "G-K9QRM2XED5"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);