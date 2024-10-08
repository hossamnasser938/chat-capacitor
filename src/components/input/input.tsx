import React from "react";
import { IInputProps } from "./input.types";
import { mergeClassNames } from "../../utils/helper-functions";

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  function Input(props: IInputProps, ref) {
    const { className, ...restProps } = props;
    const _className = mergeClassNames(
      "p-2 w-full border rounded-lg bg-white text-black",
      className || ""
    );

    return <input className={_className} {...restProps} ref={ref} />;
  }
);
