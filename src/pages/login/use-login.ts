import { useHistory } from "react-router";
import { DataManager } from "../../data";
import { ERRORS, isErrorOfType } from "../../data/errors";
import { UIReporter } from "../../utils/ui-reporter";
import { NAVIGATION_ROUTES } from "../../navigation";

export const useLogin = () => {
  const history = useHistory();

  const navigateToHome = () => {
    history.push(NAVIGATION_ROUTES.Home);
  };

  const submitHandler = async (username: string) => {
    try {
      await DataManager.login({ username });
      UIReporter.reportSuccess({ message: "Login completed" });
      navigateToHome();
    } catch (error) {
      console.log("🚀 ~ useLogin submitHandler ~ error:", error);
      if (isErrorOfType({ error, errorType: ERRORS.USER_NOT_FOUND })) {
        UIReporter.reportError({ message: "Failed to login. User not found" });
      } else {
        UIReporter.reportError({
          message: "Failed to login. Unexpected error",
        });
      }
    }
  };

  return { submitHandler };
};
