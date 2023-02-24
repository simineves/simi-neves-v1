import React from "react";
import styled from "styled-components";
import { Project } from "./Project";
import { projects, IProject } from "../data/projects";

export const Projects = () => {
  return (
    <Wrapper>
      <Title>Things I&apos;ve built</Title>
      {projects.map((project: IProject, i: number) => {
        return <Project project={project} key={i} />;
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.h3`
  text-align: center;
  font-family: "Mada", sans-serif;
  font-size: 32px;
  margin: 0;

  @media only screen and (max-width: 600px) {
    font-size: 28px;
  }
`;
