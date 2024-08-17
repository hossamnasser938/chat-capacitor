import { DataManager } from "../../data";
import { Dialog } from "@capacitor/dialog";

export const useRegistration = () => {
  const submitHandler = async (username: string, fullname: string) => {
    if (!username || !fullname) {
      Dialog.alert({
        message: "please fill required input fields",
      });
      return;
    }

    const userExists = await DataManager.doesUserNameExist(username);

    if (userExists) {
      Dialog.alert({
        message: "user exists. pick another username",
      });
      return;
    }

    Dialog.alert({
      message: "registeration coming soon",
    });
  };
  return { submitHandler };
};
