import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { DarkModeToggle } from "./components/DarkModeToggle";
import Theme from "./components/Theme";
import "./fonts/fonts.css";

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const isDarkModeEnabled = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(isDarkModeEnabled);
  }, []);
  const theme = isDarkMode ? Theme.dark : Theme.light;
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <About />
        <Projects />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
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
