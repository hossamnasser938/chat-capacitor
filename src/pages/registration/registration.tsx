import React, { useState } from "react";
import { Button, Input } from "../../components";
import { useRegistration } from "./use-registeration";
import { IonItem, IonLabel } from "@ionic/react";
import { NAVIGATION_ROUTES } from "../../navigation";

export const RegistrationPage = () => {
  const { submitHandler } = useRegistration();

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");

  const _submitHandler = () => {
    submitHandler(username, fullname);
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
        <Input
          className="border"
          placeholder="full name"
          value={fullname}
          onChange={(even) => setFullname(even.target.value)}
        />
      </div>
      <div className="wrapper">
        <Button onClick={_submitHandler}>Submit</Button>
      </div>
      <IonItem routerLink={NAVIGATION_ROUTES.Login}>
        <IonLabel>Already have account? login</IonLabel>
      </IonItem>
    </div>
  );
};
