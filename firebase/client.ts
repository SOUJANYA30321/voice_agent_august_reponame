import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCKu_7QO7v_iCh-TJIXrCRQC50juO_km7U",
    authDomain: "voice-agent-august-firebase.firebaseapp.com",
    projectId: "voice-agent-august-firebase",
    storageBucket: "voice-agent-august-firebase.firebasestorage.app",
    messagingSenderId: "695876270886",
    appId: "1:695876270886:web:d3d45e741389e43f3e5fe7",
    measurementId: "G-SWCZ0R6WXZ"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);