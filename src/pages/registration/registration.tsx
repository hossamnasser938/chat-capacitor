import React, { useRef, useState } from "react";
import { AuthFormContentWrapper, Button, Input } from "../../components";
import { useRegistration } from "./use-registeration";
import { IonRouterLink } from "@ionic/react";
import { NAVIGATION_ROUTES } from "../../navigation";
import { onEnterKeyHandlerCreator } from "../../utils/helper-functions";

export const RegistrationPage = () => {
  const { submitHandler, loading } = useRegistration();

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");

  const usernameInputRef = useRef<HTMLInputElement>(null);
  const fullnameInputRef = useRef<HTMLInputElement>(null);

  const _submitHandler = () => {
    submitHandler(username, fullname);
  };

  return (
    <AuthFormContentWrapper>
      <h1 className="text-3xl mb-8 text-black">Register</h1>
      <Input
        ref={usernameInputRef}
        placeholder="username"
        value={username}
        onChange={(even) => setUsername(even.target.value)}
        onKeyDown={onEnterKeyHandlerCreator(() =>
          fullnameInputRef.current?.focus()
        )}
      />
      <Input
        ref={fullnameInputRef}
        placeholder="full name"
        value={fullname}
        onChange={(even) => setFullname(even.target.value)}
        onKeyDown={onEnterKeyHandlerCreator(_submitHandler)}
      />
      <Button onClick={_submitHandler} loading={loading} className="my-2">
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
