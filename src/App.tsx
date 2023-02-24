import React from "react";
import styled from "styled-components";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
/*import { Projects } from "./components/Projects";
*/
import "./fonts/fonts.css";

export const App = () => {
  return (
    <Container>
      <Header />
      <About />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 48px 16px;
  font-family: "Mada", sans-serif;

  @media only screen and (max-width: 600px) {
    padding: 32px 32px 8px;
  }
`;
