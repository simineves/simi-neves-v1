import React from "react";
import styled from "styled-components";
import { IProject } from "../data/projects";

interface IProps {
  project: IProject;
}

export const Project = (props: IProps) => {
  const { project } = props;
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none", color: "black" }}
    >
      <Wrapper>
        <Image src={project.image} />
        <About>
          <Name>{project.name}</Name>
          <Pills>
            {project.tools.map((tool, i) => {
              return <Pill key={i}>{tool}</Pill>;
            })}
          </Pills>
          <Description>{project.description}</Description>
        </About>
      </Wrapper>
    </a>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  padding: 1px;
  border: 1px solid #3b403e;
  border-radius: 3%;
  margin-top: 20px;
  transition: transform 250ms;
  :hover {
    transform: translateY(-4px);
  }
`;

const Image = styled.img`
  border-radius: 3% 0 0 3%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    border-radius: 5% 5% 0 0;
  }
  @media only screen and (min-width: 600px) {
    width: 300px;
    height: (300 / 1.8) px;
  }
  @media only screen and (min-width: 1024px) {
    width: 400px;
  }
`;

const About = styled.div`
  background-color: ${(props) => props.theme.body};
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
    width: 250px;
  }
  @media only screen and (min-width: 1024px) {
    width: 350px;
  }
  padding: 15px 15px 15px 25px;
`;

const Pill = styled.p`
  background-color: #cae8dd;
  margin: 0px 5px 0px 0px;
  padding: 1px 5px;
  border-radius: 15%;
`;

const Pills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  margin-top: 0;
`;

const Description = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 18px;
`;

const Name = styled.h2`
  color: ${(props) => props.theme.text};
  margin: 0px 0px 5px 0px;
`;
