import styled from "styled-components";

export const InputStyles = styled.input`
  padding: 5px 8px;
  border: 1px solid #2e151b;
  /* border: 1px solid #376f70; */
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  transition: all 0.3s;
  &:focus {
    outline: none;
    border: 1px solid #376f70;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
