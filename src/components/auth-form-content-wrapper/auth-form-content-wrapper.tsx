import React, { PropsWithChildren } from "react";

export const AuthFormContentWrapper = (props: PropsWithChildren) => {
  const renderForm = () => {
    return (
      <div className="flex flex-1 flex-col justify-center items-center h-full bg-white">
        <div className="flex flex-col w-2/3 h-1/2 justify-end space-y-4">
          {props.children}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full md:flex-row">
      <div className="hidden md:flex flex-col flex-1 justify-center items-center bg-blue-300">
        <img src="/assets/img/logo.png" className="w-1/2" />
        <h1 className="text-4xl font-bold">Welcome to Chat Capacitor</h1>
      </div>
      {renderForm()}
    </div>
  );
};
