import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHao4CS_iFaazauW2JNx7K8BDH2sPRMiI",
  authDomain: "trainer-app-cbc90.firebaseapp.com",
  projectId: "trainer-app-cbc90",
  storageBucket: "trainer-app-cbc90.firebasestorage.app",
  messagingSenderId: "486420830489",
  appId: "1:486420830489:web:5f089110663dbceb258d88",
  measurementId: "G-NRRM1BBV3P"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };