import React from "react";
import { IButtonProps } from "./button.types";
import { mergeClassNames } from "../../utils/helper-functions";
import "./button.css";

export const Button = (props: IButtonProps) => {
  const { className, ...restProps } = props;
  const _className = mergeClassNames("button", className || "");

  return <button className={_className} {...props} />;
};
