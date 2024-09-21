import { useHistory } from "react-router";
import { DataManager } from "../../data";
import { ERRORS, isErrorOfType } from "../../data/errors";
import { UIReporter } from "../../utils/ui-reporter";
import { NAVIGATION_ROUTES } from "../../navigation";
import { useState } from "react";

export const useRegistration = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const navigateToHome = () => {
    history.push(NAVIGATION_ROUTES.Home);
  };

  const submitHandler = async (username: string, fullname: string) => {
    if (!username || !fullname) {
      UIReporter.reportError({
        message: "please fill required input fields",
      });
      return;
    }

    try {
      setLoading(true);
      await DataManager.createUser({ username, fullname });
      UIReporter.reportSuccess({
        message: "Registration completed",
      });
      navigateToHome();
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
    } finally {
      setLoading(false);
    }
  };

  return { submitHandler, loading };
};
