import React from "react";
import { IButtonProps } from "./button.types";
import { mergeClassNames } from "../../utils/helper-functions";

export const Button = (props: IButtonProps) => {
  const { className, ...restProps } = props;
  const _className = mergeClassNames(
    "w-full p-2 bg-black text-white rounded-lg font-bold text-md",
    className || ""
  );

  return <button className={_className} {...restProps} />;
};
