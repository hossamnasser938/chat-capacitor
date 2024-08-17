import { ERRORS } from "./errors";
import { FirebaseDB } from "./firebase";

export class DataManager {
  static async login({ username }: { username: string }) {
    const userExists = await FirebaseDB.doesUserExist({ username });
    if (!userExists) {
      throw new Error(ERRORS.USER_NOT_FOUND);
    }
  }

  static async createUser({
    username,
    fullname,
  }: {
    username: string;
    fullname: string;
  }) {
    const userExists = await FirebaseDB.doesUserExist({ username });
    if (userExists) {
      throw new Error(ERRORS.USERNAME_EXISTS);
    }

    return FirebaseDB.createUser({ username, fullname });
  }
}
