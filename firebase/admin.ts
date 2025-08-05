// firebase/admin.ts

import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Fix for private key: sometimes the value is undefined or improperly escaped
const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
let privateKey = process.env.FIREBASE_PRIVATE_KEY;

if (!projectId || !clientEmail || !privateKey) {
    throw new Error("Missing Firebase Admin environment variables");
}

// Convert escaped newlines to actual newlines
privateKey = privateKey.replace(/\\n/g, "\n");

const initFirebaseAdmin = () => {
    if (!getApps().length) {
        initializeApp({
            credential: cert({
                projectId,
                clientEmail,
                privateKey,
            }),
        });
    }

    return {
        auth: getAuth(),
        db: getFirestore(),
    };
};

// Export initialized services
export const { auth, db } = initFirebaseAdmin();
