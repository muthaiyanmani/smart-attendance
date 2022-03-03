import React from "react";

type Props = {
  label: string;
  isRequired?: boolean;
  type?: "text" | "number" | "email" | "password" | "date";
  name: string;
  isDisabled?: boolean;
};

const Input = ({
  label,
  type = "text",
  name,
  isDisabled = false,
  isRequired = false,
}: Props) => {
  return (
    <>
      <div className="sm:col-span-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {isRequired && <span className="text-red-600 mx-1">*</span>}
        </label>
        <div className="mt-1">
          <input
            id={name}
            name={name}
            type={type}
            disabled={isDisabled}
            className="block w-full py-3 px-2 border-2 shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default Input;
