import { KeyboardEvent } from "react";

export const mergeClassNames = (...classNames: Array<string>) => {
  return classNames.join(" ");
};

export const onEnterKeyHandlerCreator = (handler?: () => void) => {
  return (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handler && handler();
    }
  };
};
