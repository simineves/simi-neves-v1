import React from "react";
import styled from "styled-components";

type DarkModeToggleProps = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export const DarkModeToggle = ({ isDarkMode, toggleDarkMode }: DarkModeToggleProps) => {
  return (
    <Toggle onClick={toggleDarkMode}>
      {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
    </Toggle>
  );
};

const Toggle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 8px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.toggleColor};
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`;
