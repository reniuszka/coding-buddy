import React, { useState, useContext } from "react";
import UserListItem from "../UserListItem/UserListItem";
import { users as usersData } from "../../data/users";
import { StyledList, Wrapper } from "./UsersList.styles";

import { UsersContext } from "../../context/UsersContext";
// type UserTypes = {
//   name: string;
//   attendance?: string | undefined;
//   average: string;
// };

const UsersList = () => {
  // const [users, setUsers] = useState<UserTypes[]>(usersData);
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const { users } = useContext(UsersContext);

  // const deleteUser = (name: string) => {
  //   const filteredUsers = users.filter((user) => user.name !== name);
  //   setUsers(filteredUsers);
  // };
  return (
    <Wrapper>
      <h2>Students List:</h2>
      <StyledList>
        {(!users || users.length === 0) && <h2>Sorry, no users to show</h2>}
        {users.map((user) => {
          return <UserListItem key={user.name} {...user} />;
        })}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
