import styled from "styled-components";
export const ButtonStyled = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  /* padding: 1rem; */
  background-color: #376f70;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  cursor: pointer;

  &:hover {
    background-color: #2f4454;
  }

  svg {
    /* width: 100%;
    height: 100%; */
    /* padding: 1rem; */
    color: pink;
  }
`;
