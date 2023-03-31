import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { device } from "../../styles/global";

/**
 * Component for explaining how to use memory marker
 * @returns A speech bubble for every dev explaining how to use the site
 */

const About: React.FC = () => {
  // setting base variables
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <AboutWrapper>
      <LogoImageWrapper src="logo.png" />
      <Title>Hey, {auth._id ? auth.username : "friend"} </Title>
      <DevsWrapper>
        <DevWrapper>
          <ImageWrapper src="alicia.png" />
          <DevsText>
            Welcome to Memory Marker, a twist on the average social media
            platform! Our mission is to help you tell your story.
          </DevsText>
        </DevWrapper>
        <DevWrapper>
          <DevsText>
            We all have memories we don't want to forget, whether it be where
            you had your first kiss or where you had your latest meal. Start
            documenting your journey by creating an account!
          </DevsText>
          <ImageWrapper src="erica.png" />
        </DevWrapper>
        <DevWrapper>
          <ImageWrapper src="jessie.png" />
          <DevsText>
            Have a adventure you don't want to forget? Where was it? Who were
            you with? How did you feel? Create a post and write down your
            thoughts. Are you ready to make your mark?
          </DevsText>
        </DevWrapper>
        <DevWrapper>
          <DevsText>
            Founded in 2023 by a team of makers, thinkers and explorers. We
            wanted a place for people to gather, share their journeys and see
            other people's journeys all over the map. We're committed to helping
            you tell your story :)
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
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 1em;
  padding-right: 1em;
  gap: 1em;

  @media ${device.mobileM} {
    justify-content: center;
  }
  @media ${device.laptop} {
    height: fit-content;
  }
`;

const LogoImageWrapper = styled.img`
  width: 10rem;
  margin-bottom: -1rem;
  margin-top: 0.75rem;

  @media ${device.tablet} {
    width: 12rem;
  }
  @media ${device.laptop} {
    width: 14rem;
  }
  @media ${device.desktop} {
    width: 16rem;
  }
`;

const Title = styled.h1`
  color: #486572;
  margin: 0.5rem;
  font-family: "Playfair Display", serif;

  @media ${device.tablet} {
    font-size: 2.5rem;
  }
  @media ${device.laptop} {
    font-size: 3.5rem;
  }
  @media ${device.desktop} {
    font-size: 4.5rem;
  }
`;

const DevsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1500px) {
    max-width: 60%;
  }
`;

const DevWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

const DevsText = styled.div`
  font-size: 15px;
  background-color: white;
  border-radius: 1rem;
  text-align: left;
  padding: 0.75rem;
  font-family: "Cormorant Garamond", serif;
  width: 80%;
  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.laptop} {
    font-size: 25px;
  }
  // @media (min-width: 1600px) {
  //   font-size: 30px;
  //   width: 70%;
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
