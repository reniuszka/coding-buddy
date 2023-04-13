import React from "react";
import { LabelStyles } from "./Label.styles";

type PropTypes = {
  htmlFor: string;
  label?: string;
  children?: React.ReactNode;
};
const Label = ({ htmlFor, label, children }: PropTypes) => {
  return <LabelStyles htmlFor={htmlFor}>{children}</LabelStyles>;
};

export default Label;
