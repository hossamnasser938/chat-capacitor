import React from "react";
import { IInputProps } from "./input.types";
import "./input.css";
import { mergeClassNames } from "../../utils/helper-functions";

export const Input = (props: IInputProps) => {
  const { className, ...restProps } = props;
  const _className = mergeClassNames("input", className || "");

  return <input className={_className} {...restProps} />;
};
