import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlV69NZ6eg50OUki0z8YnJ_9H7sPDx97I",
  authDomain: "chatgpt-clone-2766d.firebaseapp.com",
  projectId: "chatgpt-clone-2766d",
  storageBucket: "chatgpt-clone-2766d.appspot.com",
  messagingSenderId: "310844994685",
  appId: "1:310844994685:web:9ada6e35461a8f6c0c6d14",
  measurementId: "G-5VJC9W42Y0",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
