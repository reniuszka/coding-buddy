import React from "react";
import { ButtonStyled } from "./Button.styles";

type PropTypes = {
  children: React.ReactNode;
};
const Button = ({ children }: PropTypes) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

export default Button;
