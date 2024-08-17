import { FirebaseDB } from "./firebase";

export class DataManager {
  static doesUserNameExist(username: string): Promise<boolean> {
    return FirebaseDB.doesUserExist(username);
  }
}
