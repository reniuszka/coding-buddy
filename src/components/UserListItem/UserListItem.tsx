import React from "react";
import { Wrapper, Score, StyledInfo } from "./UsersListItem.styles";
import Button from "../DeleteButton/DeleteButton";

type UsersType = {
  name: string;
  average: string;
  attendance?: string | undefined;
  deleteUser: (name: any) => void;
};

// const printMyName = (name: string) => {
//   console.log(`my name is ${name}`);
// };

const UserListItem = ({
  name,
  average,
  attendance = "0%",
  deleteUser,
}: UsersType) => {
  return (
    <Wrapper>
      <Score value={average}>{average}</Score>
      <StyledInfo>
        <p>
          {name}

          {/* <Button onClick={() => printMyName(name)} /> */}
          <Button onClick={() => deleteUser(name)} />
        </p>
        <p>attendence: {attendance}</p>
      </StyledInfo>
      {/* {attendance ? (
        <small>attendence: {attendance}</small>
      ) : (
        <small>attendence: '0%'</small>
      )} */}
    </Wrapper>
  );
};

export default UserListItem;
