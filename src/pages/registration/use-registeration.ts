import { DataManager } from "../../data";
import { ERRORS, isErrorOfType } from "../../data/errors";
import { UIReporter } from "../../utils/ui-reporter";

export const useRegistration = () => {
  const submitHandler = async (username: string, fullname: string) => {
    if (!username || !fullname) {
      UIReporter.reportError({
        message: "please fill required input fields",
      });
      return;
    }

    try {
      await DataManager.createUser({ username, fullname });
      UIReporter.reportSuccess({
        message: "Registration completed",
      });
    } catch (error) {
      console.log("🚀 ~ useRegistration submitHandler ~ error:", error);
      if (isErrorOfType({ error, errorType: ERRORS.USERNAME_EXISTS })) {
        UIReporter.reportError({
          message:
            "Failed to register. Username exists, please pick another username",
        });
      } else {
        UIReporter.reportError({
          message: "Failed to register. Unexpected error",
        });
      }
    }
  };
  return { submitHandler };
};
