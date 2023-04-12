import React from "react";
import UserListItem from "../UserListItem/UserListItem";
import { users } from "../../data/users";
import styled from "styled-components";
import { StyledList, Wrapper } from "./UsersList.styles";
type UserTypes = {
  name: string;
  attendance?: string | undefined;
  average: string;
};

type PropTypes = {
  users: UserTypes[];
};

const UsersList = () => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((user) => {
          return <UserListItem key={user.name} {...user} />;
        })}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
