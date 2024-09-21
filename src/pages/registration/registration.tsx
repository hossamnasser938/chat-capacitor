import React, { useState } from "react";
import { AuthFormContentWrapper, Button, Input } from "../../components";
import { useRegistration } from "./use-registeration";
import { IonItem, IonLabel, IonRouterLink } from "@ionic/react";
import { NAVIGATION_ROUTES } from "../../navigation";

export const RegistrationPage = () => {
  const { submitHandler } = useRegistration();

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");

  const _submitHandler = () => {
    submitHandler(username, fullname);
  };

  return (
    <AuthFormContentWrapper>
      <h1 className="text-3xl mb-8 text-black">Register</h1>
      <Input
        placeholder="username"
        value={username}
        onChange={(even) => setUsername(even.target.value)}
      />
      <Input
        placeholder="full name"
        value={fullname}
        onChange={(even) => setFullname(even.target.value)}
      />
      <Button onClick={_submitHandler} className="my-2">
        Submit
      </Button>
      <IonRouterLink routerLink={NAVIGATION_ROUTES.Login}>
        <p className="inline text-lg text-black">
          Already have account? <p className="inline text-blue-500">login</p>
        </p>
      </IonRouterLink>
    </AuthFormContentWrapper>
  );
};
