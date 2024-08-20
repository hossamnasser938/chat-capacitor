import { ref, get, set } from "firebase/database";
import { database } from "./initialize";
import { FirebaseDBNodes } from "./nodes";
import { IUser } from "../../models";

export class FirebaseDB {
  static async getUser({ username }: { username: string }): Promise<IUser> {
    const userRef = ref(database, FirebaseDBNodes.user(username));
    const snapshot = await get(userRef);
    return snapshot.val();
  }

  static async doesUserExist({
    username,
  }: {
    username: string;
  }): Promise<boolean> {
    const user = await this.getUser({ username });
    return !!user;
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
