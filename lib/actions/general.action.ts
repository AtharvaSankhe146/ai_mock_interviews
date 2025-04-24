import { db } from "@/firebase/admin";

// Get interviews created by a specific user
export async function getInterviewByUserId(userId: string): Promise<Interview[] | null> {
  const snapshot = await db
    .collection('interviews')
    .where('userId', '==', userId)
    .orderBy('createdAt', 'desc')
    .get();

  const interviews = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];

  return interviews;
}

// Get the latest finalized interviews NOT created by the user
export async function getLatestInterviews(params: GetLatestInterviewsParams): Promise<Interview[] | null> {
  const { userId, limit = 20 } = params;

  const snapshot = await db
    .collection('interviews')
    .where('finalized', '==', true) // finalized must be a boolean in Firestore
    .where('userId', '!=', userId)
    .orderBy('createdAt', 'desc')
    .limit(limit)
    .get();

  const interviews = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];

  return interviews;
}

// Get a single interview by its ID
export async function getInterviewById(id: string): Promise<Interview | null> {
  const snapshot = await db
    .collection('interviews')
    .doc(id)
    .get();

  if (!snapshot.exists) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as Interview;
}
