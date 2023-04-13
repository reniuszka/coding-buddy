import React from "react";
import Form from "../components/Form/Form";
import styled from "styled-components";
import { Wrapper } from "./List.styles";

// import { UsersContext } from "../context/UsersContext";
export const ViewWrapper = styled.div`
  margin: 25px;
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  padding: 4rem;
  border-radius: 25px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  border: 1px solid #376f70;

  h2 {
    color: #2e151b;
    text-align: center;
  }
`;
const AddUser = () => {
  // const { users, setUsers } = useContext(UsersContext);
  // const data = useContext(UsersContext);
  // console.log("data", data);
  return (
    <Wrapper>
      <ViewWrapper>
        <h2>Add new student</h2>
        <Form />
      </ViewWrapper>
    </Wrapper>
  );
};

export default AddUser;
