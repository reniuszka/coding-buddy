import React from "react";
import { FaTimes } from "react-icons/fa";
import { ButtonStyled } from "./Button.styles";

type PropTypes = {
  onClick: () => void;
};
const Button = ({ onClick }: PropTypes) => {
  return (
    <ButtonStyled onClick={onClick}>
      <FaTimes />
    </ButtonStyled>
  );
};

export default Button;
