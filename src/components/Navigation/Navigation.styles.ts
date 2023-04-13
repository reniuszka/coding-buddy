import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border-right: red; */
  justify-content: flex-start;
  padding: 30px 0;
`;
/* border-right: 1px solid ${({ theme }) => theme.colors.darkPurple}; */

export const Logo = styled.div`
  background-color: #2f4455;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 1.5rem;
    color: #fff;
    text-align: right;
    margin-right: 20px;
  }
`;
/* color: ${({ theme }) => theme.colors.white}; */
/* background-color: ${({ theme }) => theme.colors.darkGrey}; */

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: #2f4455;
  text-align: right;
  margin: 15px 20px 15px auto;
  font-size: 1.25rem;
  transition: all 0.3s;
  &:hover {
    color: pink;
    text-decoration: underline;
    text-underline-offset: under;
  }
  &.active {
    color: #844f5b;
    text-decoration: underline;
    text-underline-offset: under;
    position: relative;
    transition: all 0.3s;
    &::after {
      position: absolute;
      content: "";
      height: 5px;
      width: 1.5rem;
      top: 0.75rem;
      right: -2.75rem;
      background-color: #fff;
    }
  }
`;
/* color: ${({ theme }) => theme.colors.darkGrey}; */
