import React, { useState, useEffect, ReactElement } from "react";
import styled from "styled-components";

export const Wrapper = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-top: pink;
  justify-content: flex-start;
  padding: 3rem 0;
  background-color: #2f4455;
  color: #fff;
  p {
    padding: 0 3rem;
    font-size: 1rem;
    font-weight: 500;
  }
`;

const Footer = (): ReactElement => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <Wrapper>
      <p>
        Time: <span>{date.toLocaleTimeString()}</span>
      </p>
      <p>Build by Renata Diurczak</p>
    </Wrapper>
  );
};

export default Footer;
