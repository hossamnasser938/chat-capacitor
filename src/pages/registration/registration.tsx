import React from "react";
import "./registration.css";
import { Button, Input } from "../../components";

export const RegistrationPage = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Input placeholder="username" />
      </div>
      <div className="wrapper">
        <Input placeholder="full name" />
      </div>
      <div className="wrapper">
        <Button>Submit</Button>
      </div>
    </div>
  );
};
