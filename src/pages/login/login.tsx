import React, { useState } from "react";
import { Button, Input } from "../../components";
import { useLogin } from "./use-login";
import { IonItem, IonLabel } from "@ionic/react";
import { NAVIGATION_ROUTES } from "../../navigation";

export const LoginPage = () => {
  const { submitHandler } = useLogin();

  const [username, setUsername] = useState("");

  const _submitHandler = () => {
    submitHandler(username);
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="m-2">
        <Input
          className="border"
          placeholder="username"
          value={username}
          onChange={(even) => setUsername(even.target.value)}
        />
      </div>
      <div className="m-2">
        <Button onClick={_submitHandler}>Submit</Button>
      </div>
      <IonItem routerLink={NAVIGATION_ROUTES.Register}>
        <IonLabel>Do not have account? register</IonLabel>
      </IonItem>
    </div>
  );
};
