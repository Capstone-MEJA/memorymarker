import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { device } from "../../styles/global";

const About: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <AboutWrapper>
      <LogoImageWrapper src="logo.png" />
      <Title>Hey, {auth._id ? auth.username : "friend"} </Title>
      <DevsWrapper>
        <DevWrapper>
          <ImageWrapper src="alicia.png" />
          <DevsText>
            Welcome to the world's most popular social media platform. Our
            mission is to help you tell your story. Get ready to make your mark!
          </DevsText>
        </DevWrapper>
        <DevWrapper>
          <DevsText>
            We all have memories we don't want to forget. Whether it be where
            you had your first kiss or where you had your latest meal, mark it
            on the map!
          </DevsText>
          <ImageWrapper src="erica.png" />
        </DevWrapper>
        <DevWrapper>
          <ImageWrapper src="jessie.png" />
          <DevsText>
            Start documenting your journey by creating your account! Have a
            night you don't want to forget? Mark it on the map! Create a post
            and journal your thoughts. Where was it? Who were you with? How did
            you feel?
          </DevsText>
        </DevWrapper>
        <DevWrapper>
          <DevsText>
            Founded in 2023 by a team of makers, thinkers and explorers. We
            wanted a place for people to gather, share their journeys and see
            other people's journeys all over the map. We're committed to helping
            you tell your story.
          </DevsText>
          <ImageWrapper src="mandy.png" />
        </DevWrapper>
      </DevsWrapper>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.div`
  background-color: #ceebec;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 1em;
  padding-right: 1em;
  gap: 1em;

  @media ${device.mobileM} {
    height: 120vh;
    justify-content: center;
  }
`;

const LogoImageWrapper = styled.img`
  width: 10rem;
  margin-bottom: -1rem;
  margin-top: 0.75rem;

  @media ${device.tablet} {
    width: 15rem;
  }
`;

const Title = styled.h1`
  color: #486572;
  margin: 1rem;
  font-family: "Playfair Display", serif;

  @media ${device.tablet} {
    font-size: 2.5rem;
  }
`;

const DevsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DevWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

const DevsText = styled.div`
  font-size: 1rem;
  background-color: white;
  border-radius: 1rem;
  text-align: left;
  padding: 0.5rem;
  font-family: "Cormorant Garamond", serif;
  width: 80%;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

const ImageWrapper = styled.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin: 0.5rem;

  @media ${device.tablet} {
    width: 125px;
    height: 125px;
  }
`;
