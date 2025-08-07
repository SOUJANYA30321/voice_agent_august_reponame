'use server';

import { createFeedback } from '@/lib/actions/general.action';

export async function triggerFeedback({
                                          interviewId,
                                          userId,
                                          transcript,
                                      }: {
    interviewId: string;
    userId: string;
    transcript: { role: string; content: string }[];
}) {
    return await createFeedback({ interviewId, userId, transcript });
}
