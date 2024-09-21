import React from "react";
import { IButtonProps } from "./button.types";
import { mergeClassNames } from "../../utils/helper-functions";

export const Button = (props: IButtonProps) => {
  const { className, children, loading, disabled, ...restProps } = props;
  const _className = mergeClassNames(
    "w-full p-2 bg-black text-white rounded-lg font-bold text-md",
    className || ""
  );

  return (
    <button
      className={_className}
      disabled={disabled || loading}
      {...restProps}
    >
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-6 h-6 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-blue-500"></div>
        </div>
      ) : (
        children
      )}
    </button>
  );
};
