import Label from "../Label/Label";
import Input from "../Input/Input";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem; /* align-items: flex-start; */
  label {
    margin: 0.5rem 0;
  }
`;
/* ${Label} {
    margin: 10px 0;
  } */
export type ChildrenType = {
  children: React.ReactNode;
};
export type PropTypes = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  label?: string;
  name: string;
  id: string;
  type?: string;
  children?: React.ReactNode;
};

//controlled input
export const FormField = ({
  children,
  onChange,
  value,
  label,
  name,
  id,
  type = "text",
}: PropTypes): React.ReactElement => {
  return (
    <Wrapper>
      <Label htmlFor={id} label={label}>
        {children}
      </Label>
      <Input
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};
