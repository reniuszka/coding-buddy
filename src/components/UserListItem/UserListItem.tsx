import React from "react";
import { Wrapper, Score, StyledInfo } from "./UsersListItem.styles";
import Button from "../Button/Button";

type UsersType = {
  name: string;
  average: string;
  attendance?: string | undefined;
};

const printMyName = (name: string) => {
  console.log(`my name is ${name}`);
};

const UserListItem = ({ name, average, attendance = "0%" }: UsersType) => {
  return (
    <Wrapper>
      <Score value={average}>{average}</Score>
      <StyledInfo>
        <p>
          {name}

          <Button onClick={() => printMyName(name)} />
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
