import React, { useState, useContext, useReducer } from "react";
import { FormField } from "../FormField/FormField";
import Button from "../Button/Button";
import styled from "styled-components";
import { UsersContext } from "../../context/UsersContext";
import { error } from "console";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

type UserType = {
  name: string;
  attendance?: string;
  average: string;
  isCheckbox: boolean;
  error: string;
};

const initialState: UserType = {
  name: "",
  attendance: "",
  average: "",
  isCheckbox: false,
  error: "",
};

export type ReducerAction =
  | { type: "clear" | "consentToggle" }
  | {
      type: "field";
      fieldName: string;
      payload: string;
    }
  | {
      type: "error";
      payload: string;
    };

export const reducer = (state: UserType, action: ReducerAction) => {
  console.log("state:", state, "action:", action);
  const { type } = action;
  console.log(type, "type");
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "consentToggle": {
      return { ...state, isCheckbox: !state.isCheckbox };
    }
    case "clear": {
      return initialState;
    }
    case "error": {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};

const Form = () => {
  const [isInputValue, dispatch] = useReducer(reducer, initialState);
  const { handleAddUser } = useContext(UsersContext);

  // setIsInputValue((prevState) => {
  //   return { ...prevState, [e.target.name]: [e.target.value] };
  // });
  // [e.target.name]-> attendance: [e.target.value] -> value z wpisane attendance
  //to by bylo gdyby stan by;"const [isInputValue, setIsInputValue] = useState<string>('');"
  // setIsInputValue(e.target.value);
  // };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    dispatch({
      type: "field",
      fieldName: e.currentTarget.name,
      payload: e.currentTarget.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handleAddUser(isInputValue);
    // const newUser = {
    //   name: isInputValue.name,
    //   attendance: isInputValue.attendance,
    //   average: isInputValue.average,
    // };
    // setUsers([newUser, ...users]);
    // console.log("newUser added:", newUser);
    // setIsInputValue(initialState);
    if (isInputValue.isCheckbox) {
      handleAddUser(isInputValue);

      dispatch({
        type: "clear",
      });
    } else {
      dispatch({
        type: "error",
        payload: "Check the box to add the user",
      });
    }
  };

  const handleToggleConsent = () => {
    dispatch({ type: "consentToggle" });
  };
  return (
    // <form onSubmit={(e)=> onSubmit(e)}>
    <FormStyled onSubmit={onSubmit}>
      <FormField
        name="name"
        id="name"
        value={isInputValue.name!}
        onChange={onChange}
      >
        {/* label="name" */}
        {/* onChange={(e) => onChange(e)} */}
        Name
      </FormField>
      <FormField
        name="attendance"
        id="attendance"
        value={isInputValue.attendance!}
        onChange={onChange}
      >
        Attendance
      </FormField>
      <FormField
        name="average"
        id="average"
        value={isInputValue.average!}
        onChange={onChange}
      >
        Average
      </FormField>
      <FormField
        id="isCheckbox"
        name="isCheckbox"
        type="checkbox"
        value={isInputValue.average!}
        onChange={handleToggleConsent}
      ></FormField>
      {isInputValue.error ? <p>{isInputValue.error}</p> : null}
      <Button>Add</Button>
    </FormStyled>
  );
};

export default Form;
