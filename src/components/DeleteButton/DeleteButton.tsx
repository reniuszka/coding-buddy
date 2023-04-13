import React from "react";
import { FaTimes } from "react-icons/fa";
import { ButtonStyled } from "./DeleteButton.styles";

type PropTypes = {
  onClick: (name: any) => void;
};
const Button = ({ onClick }: PropTypes) => {
  return (
    <ButtonStyled onClick={onClick}>
      <FaTimes />
    </ButtonStyled>
  );
};

export default Button;
