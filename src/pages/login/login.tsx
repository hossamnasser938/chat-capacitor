import React, { useState } from "react";
import "./login.css";
import { Button, Input } from "../../components";
import { useLogin } from "./use-login";

export const LoginPage = () => {
  const { submitHandler } = useLogin();

  const [username, setUsername] = useState("");

  const _submitHandler = () => {
    submitHandler(username);
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
        <Button onClick={_submitHandler}>Submit</Button>
      </div>
    </div>
  );
};
