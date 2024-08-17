import React, { useState } from "react";
import "./registration.css";
import { Button, Input } from "../../components";
import { useRegistration } from "./use-registeration";

export const RegistrationPage = () => {
  const { submitHandler } = useRegistration();

  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");

  const _submitHandler = () => {
    submitHandler(username, fullname);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <Input
          placeholder="username"
          value={username}
          onChange={(even) => setUsername(even.target.value)}
        />
      </div>
      <div className="wrapper">
        <Input
          placeholder="full name"
          value={fullname}
          onChange={(even) => setFullname(even.target.value)}
        />
      </div>
      <div className="wrapper">
        <Button onClick={_submitHandler}>Submit</Button>
      </div>
    </div>
  );
};
