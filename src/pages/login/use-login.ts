import { Dialog } from "@capacitor/dialog";
import { DataManager } from "../../data";
import { ERRORS, isErrorOfType } from "../../data/errors";

export const useLogin = () => {
  const submitHandler = async (username: string) => {
    try {
      await DataManager.login({ username });
      Dialog.alert({ message: "Login completed" });
    } catch (error) {
      console.log("🚀 ~ useLogin submitHandler ~ error:", error);
      if (isErrorOfType({ error, errorType: ERRORS.USER_NOT_FOUND })) {
        Dialog.alert({ message: "Failed to login. User not found" });
      } else {
        Dialog.alert({ message: "Failed to login. Unexpected error" });
      }
    }
  };

  return { submitHandler };
};
