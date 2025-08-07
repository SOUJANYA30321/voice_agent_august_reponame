'use server';

import { db } from '@/firebase/admin'; // or wherever your admin firestore instance is

export const finalizeInterview = async (interviewId: string) => {
    try {
        await db.collection('interviews').doc(interviewId).update({
            finalized: true,
            updatedAt: new Date().toISOString(),
        });

        return { success: true };
    } catch (error) {
        console.error('Error finalizing interview:', error);
        return { success: false };
    }
};
