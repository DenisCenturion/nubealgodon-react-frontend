import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAzF9tH9yoscX5K4woKR6weoBTFqdW05_Q",
  authDomain: "ecommerce-coderhouse-react-db.firebaseapp.com",
  projectId: "ecommerce-coderhouse-react-db",
  storageBucket: "ecommerce-coderhouse-react-db.firebasestorage.app",
  messagingSenderId: "1092959065390",
  appId: "1:1092959065390:web:cffca74ee33a502407d6bf",
  measurementId: "G-58PLHV86VL"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);