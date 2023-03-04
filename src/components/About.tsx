import React from "react";
import styled, { keyframes } from "styled-components";
import me from "../assets/img/me.png";
import { Hobbies } from "./Hobbies";

export const About = () => {
  return (
    <Wrapper>
      <Me src={me} alt="SN" height="195px" width="195px" />
      <Greeting>
        <Wave>👋</Wave> Nice to meet you, I'm Simi
      </Greeting>
      <Body>
        I love using my technical skills to solve complex problems and create innovative solutions that improve user experiences. Looking for a dynamic and innovative team that values collaboration and innovation to leverage my skills and drive the success of the organization.
        <br />
        <br />
        I bring experience as a Technical Support Engineer on the Tech Ops team at <Link href="https://extra.app/" bgColour="#cae8dd">Extra Card</Link> where I honed my technical and problem-solving skills in a fast-paced environment. Prior to that, I served as an Information Technology Technician on the Support team at <Link href="https://www.aicure.com/" bgColour="#cae8dd">AiCure</Link>. 
        I'm currently seeking new opportunities to apply my expertise and passion for technology to drive success for a dynamic team.
        <br />
        <br />
        For a more detailed look at my experience and qualifications, please refer to my{" "}
        <Link href="https://www.dropbox.com/s/g55i9l29a8zd4ul/Resume.pdf?dl=0https://docs.google.com/document/d/1QVQ4G0-sS4zg6MwczQsNDKArAYDwH4Vu/edit?usp=sharing&ouid=106646816568438649150&rtpof=true&sd=true">Resume.</Link>
        <br />
        <br />
        <Hobbies />
        Got an opportunity or want to learn more about me?{" "}
        <Link href="https://www.linkedin.com/in/simi-neves">Let's chat.</Link>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Me = styled.img`
  border-radius: 50%;
`;

const Greeting = styled.h1`
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 30px;
    margin-bottom: 0;
  }
`;

const waveAnimation = keyframes`
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) } 
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) } 
  100% { transform: rotate( 0.0deg) }
`;

const Wave = styled.span`
  animation: ${waveAnimation} 2.5s;
  animation-iteration-count: 3;
  transform-origin: 70% 70%;
  display: inline-block;
`;

export const Link = styled.a<{bgColour?: string}>`
  font-weight: bold;
  text-decoration: none;
  color: black;
  :hover {
    color: #3aa17b;
  };
`;

const Body = styled.p`
  font-size: 20px;
  max-width: 1100px;
`;
