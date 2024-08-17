import { ref, get } from "firebase/database";
import { database } from "./initialize";
import { FirebaseDBNodes } from "./nodes";

export class FirebaseDB {
  static async doesUserExist(username: string): Promise<boolean> {
    const userRef = ref(database, FirebaseDBNodes.user(username));
    const snapshot = await get(userRef);
    return snapshot.exists();
  }
}
