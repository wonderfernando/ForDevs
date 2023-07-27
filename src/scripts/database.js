import * as dotenv from 'dotenv';
dotenv.config()
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MENSSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEN_ID
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);