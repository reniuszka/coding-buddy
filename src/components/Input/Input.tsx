import React from "react";
import { InputStyles } from "./Input.styles";

export type PropTypes = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  id: string;
  type?: string;
};
const Input = ({ onChange, value, name, id, type }: PropTypes) => {
  return (
    <InputStyles
      name={name}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
