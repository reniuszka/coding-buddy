import React from "react";
import { Logo, StyledLink, Wrapper } from "./Navigation.styles";

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Classroom
          <br />
          List
        </h1>
      </Logo>
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/">Logout</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
