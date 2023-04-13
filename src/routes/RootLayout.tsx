import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15rem 1fr;
`;
const RootLayout = () => {
  return (
    <>
      <Wrapper>
        <Navigation />
        <Outlet />
      </Wrapper>

      <Footer />
    </>
  );
};

export default RootLayout;
