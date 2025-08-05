// lib/server-actions/saveFeedback.ts
'use server';

import { db } from '@/firebase/admin';

export async function saveFeedback({
                                       interviewId,
                                       userId,
                                       transcript,
                                   }: {
    interviewId: string;
    userId: string;
    transcript: { role: string; content: string }[];
}) {
    try {
        const ref = await db.collection('feedback').add({
            interviewId,
            userId,
            transcript,
            timestamp: new Date(),
        });

        return { success: true, feedbackId: ref.id };
    } catch (error) {
        console.error('Failed to save feedback:', error);
        return { success: false };
    }
}
