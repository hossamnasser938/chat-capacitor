import React, { useState } from "react";
import { AuthFormContentWrapper, Button, Input } from "../../components";
import { useLogin } from "./use-login";
import { IonItem, IonLabel, IonRouterLink } from "@ionic/react";
import { NAVIGATION_ROUTES } from "../../navigation";

export const LoginPage = () => {
  const { submitHandler } = useLogin();

  const [username, setUsername] = useState("");

  const _submitHandler = () => {
    submitHandler(username);
  };

  return (
    <AuthFormContentWrapper>
      <h1 className="text-3xl mb-8 text-black">Login</h1>
      <Input
        placeholder="username"
        value={username}
        onChange={(even) => setUsername(even.target.value)}
      />
      <Button onClick={_submitHandler}>Submit</Button>
      <IonRouterLink routerLink={NAVIGATION_ROUTES.Register}>
        <p className="inline text-lg text-black">
          Do not have account? <p className="inline text-blue-500">register</p>
        </p>
      </IonRouterLink>
    </AuthFormContentWrapper>
  );
};
