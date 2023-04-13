import React, { useState, useContext } from "react";
import { FormField } from "../FormField/FormField";
import Button from "../Button/Button";
import styled from "styled-components";
import { UsersContext } from "../../context/UsersContext";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

type UserType = {
  name: "";
  attendance: "";
  average: "";
};
const Form = () => {
  const [isInputValue, setIsInputValue] = useState<UserType>({
    name: "",
    attendance: "",
    average: "",
  });
  const { users, setUsers } = useContext(UsersContext);
  // onChange={(e) => handleChange(e)} - hover over it
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    setIsInputValue((prevState) => {
      return { ...prevState, [e.target.name]: [e.target.value] };
    });
    // [e.target.name]-> attendance: [e.target.value] -> value z wpisane attendance
    //to by bylo gdyby stan by;"const [isInputValue, setIsInputValue] = useState<string>('');"
    // setIsInputValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = {
      name: isInputValue.name,
      attendance: isInputValue.attendance,
      average: isInputValue.average,
    };
    setUsers([newUser, ...users]);
    console.log("newUser added:", newUser);
    setIsInputValue({
      name: "",
      attendance: "",
      average: "",
    });
  };
  return (
    // <form onSubmit={(e)=> onSubmit(e)}>
    <FormStyled onSubmit={onSubmit}>
      <FormField
        name="name"
        id="name"
        value={isInputValue.name}
        onChange={onChange}
      >
        {/* label="name" */}
        {/* onChange={(e) => onChange(e)} */}
        Name
      </FormField>
      <FormField
        name="attendance"
        id="attendance"
        value={isInputValue.attendance}
        onChange={onChange}
      >
        Attendance
      </FormField>
      <FormField
        name="average"
        id="average"
        value={isInputValue.average}
        onChange={onChange}
      >
        Average
      </FormField>
      <Button>Add</Button>
    </FormStyled>
  );
};

export default Form;
