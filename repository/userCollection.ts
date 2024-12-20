import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";
import { v4 as uuidv4 } from "uuid";

const USERS_COLLECTION = "USERS";

export const updateUser = async (user: User): Promise<void> => {
  await db
    .collection(USERS_COLLECTION)
    .doc(user.email)
    .set({ ...user, uuid: uuidv4() });
};

export const fetchUser = async (email: string): Promise<User | null> => {
  const doc = await db.collection(USERS_COLLECTION).doc(email).get();

  return doc.exists ? (doc.data() as User) : null;
};
