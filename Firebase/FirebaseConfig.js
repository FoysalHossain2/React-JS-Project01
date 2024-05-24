import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-4kLBWXLXRZxrO-X3lutTjtELPL9BEwk",
  authDomain: "orebi-reactjs.firebaseapp.com",
  projectId: "orebi-reactjs",
  storageBucket: "orebi-reactjs.appspot.com",
  messagingSenderId: "257773313598",
  appId: "1:257773313598:web:0c1203a2ebe2f8974a7b6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;