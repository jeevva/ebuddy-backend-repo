import { db } from "../config/firebaseConfig";
import { User } from "../entities/user";

const USERS_COLLECTION = "USERS";

export const updateUser = async (user: User): Promise<User | null> => {
  await db.collection(USERS_COLLECTION).doc(user.email).set(user);
  return user;
};

export const fetchUser = async (email: string): Promise<User | null> => {
  const doc = await db.collection(USERS_COLLECTION).doc(email).get();
  if (doc.exists) {
    return doc.data() as User;
  } else {
    const user: User = { email: email, name: "", age: 0, address: "" };
    await db.collection(USERS_COLLECTION).doc(email).set(user);
    return user;
  }
};
