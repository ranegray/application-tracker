import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGINC_Po96y4RvTnQb27bVLo2INDsz5Hs",
  authDomain: "application-tracker-1f6a3.firebaseapp.com",
  projectId: "application-tracker-1f6a3",
  storageBucket: "application-tracker-1f6a3.appspot.com",
  messagingSenderId: "268576443131",
  appId: "1:268576443131:web:d3bacba112dcf4e0a5fe5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;