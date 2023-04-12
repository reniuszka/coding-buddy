import React from "react";
import UsersList from "../components/UsersList/UsersList";
import { Wrapper } from "./List.styles";

type Props = {};

const List = (props: Props) => {
  return (
    <Wrapper>
      <UsersList />
    </Wrapper>
  );
};

export default List;
