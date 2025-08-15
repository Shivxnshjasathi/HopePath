import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  "projectId": "pathfinder-recovery-g4u3q",
  "appId": "1:361455222649:web:a3dbfdca208c7c45da39a8",
  "storageBucket": "pathfinder-recovery-g4u3q.firebasestorage.app",
  "apiKey": "AIzaSyDYvXUr80AlQ6C94dNcFO5GvM_2SPoCX38",
  "authDomain": "pathfinder-recovery-g4u3q.firebaseapp.com",
  "measurementId": "",
  "messagingSenderId": "361455222649"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
