import { ref, get, set } from "firebase/database";
import { database } from "./initialize";
import { FirebaseDBNodes } from "./nodes";

export class FirebaseDB {
  static async doesUserExist({
    username,
  }: {
    username: string;
  }): Promise<boolean> {
    const userRef = ref(database, FirebaseDBNodes.user(username));
    const snapshot = await get(userRef);
    return snapshot.exists();
  }

  static async createUser({
    username,
    fullname,
  }: {
    username: string;
    fullname: string;
  }) {
    const user = {
      username,
      fullname,
    };
    const userRef = ref(database, FirebaseDBNodes.user(username));
    await set(userRef, user);
  }
}
