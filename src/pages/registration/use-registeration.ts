import { DataManager } from "../../data";
import { Dialog } from "@capacitor/dialog";
import { ERRORS } from "../../data/errors";

export const useRegistration = () => {
  const submitHandler = async (username: string, fullname: string) => {
    if (!username || !fullname) {
      Dialog.alert({
        message: "please fill required input fields",
      });
      return;
    }

    try {
      await DataManager.createUser({ username, fullname });
      Dialog.alert({
        message: "Registration completed",
      });
    } catch (error: any) {
      console.log("🚀 ~ useRegistration submitHandler ~ error:", error);
      if (error.message.includes(ERRORS.USERNAME_EXISTS)) {
        Dialog.alert({
          message:
            "Failed to register. Username exists, please pick another username",
        });
      } else {
        Dialog.alert({
          message: "Failed to register. Unexpected error",
        });
      }
    }
  };
  return { submitHandler };
};
