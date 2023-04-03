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
    <Wrapper>
      <LogoImage src="logo.png" />
      <PageTitle>Hey, {auth._id ? auth.username : "friend"} </PageTitle>
      <DevsWrapper>
        <DevWrapper>
          <ProfileImageMobile src="alicia.png" />
          <ProfileImageTablet src="alicia.png" />
          <DevContent>
            <DevBlurb>
              Welcome to Memory Marker, a twist on the average social media
              platform! Our mission is to help you tell your story.
            </DevBlurb>
          </DevContent>
        </DevWrapper>
        <DevWrapper>
          <ProfileImageTablet src="erica.png" />
          <DevContent>
            <DevBlurb>
              We all have memories we don't want to forget, whether it be where
              you had your first kiss or where you had your latest meal. Start
              documenting your journey by creating an account!
            </DevBlurb>
          </DevContent>
          <ProfileImageMobile src="erica.png" />
        </DevWrapper>
        <DevWrapper>
          <ProfileImageMobile src="jessie.png" />
          <ProfileImageTablet src="jessie.png" />
          <DevContent>
            <DevBlurb>
              Have a adventure you don't want to forget? Where was it? Who were
              you with? How did you feel? Create a post and write down your
              thoughts. Are you ready to make your mark?
            </DevBlurb>
          </DevContent>
        </DevWrapper>
        <DevWrapper>
          <ProfileImageTablet src="mandy.png" />
          <DevContent>
            <DevBlurb>
              Founded in 2023 by a team of makers, thinkers and explorers. We
              wanted a place for people to gather, share their journeys and see
              other people's journeys all over the map. We're committed to
              helping you tell your story :)
            </DevBlurb>
          </DevContent>
          <ProfileImageMobile src="mandy.png" />
        </DevWrapper>
      </DevsWrapper>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  background-color: #ceebec;
  height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding-left: 1em;
  padding-right: 1em;

  @media ${device.mobileM} {
    justify-content: center;
    width: 100%;
  }
  @media ${device.tablet} {
    height: fit-content;
  }
  @media ${device.laptop} {
    height: fit-content;
  }
  @media (min-width: 1500px) {
    height: fit-content;
  }
`;

const LogoImage = styled.img`
  width: 10rem;
  padding-top: 10px;
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

const PageTitle = styled.h1`
  color: #486572;
  margin-top: 0px;
  margin-bottom: 0px;
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
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.5em;
    align-items: start;
  }

  @media ${device.laptop} {
    gap: 1.5em;
  }
`;

const DevWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  margin-bottom: 1em;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    gap: 0.5em;
  }

  @media ${device.laptop} {
    gap: 1.5em;
  }
`;

const ProfileImageTablet = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 1em;
  display: none;

  @media ${device.tablet} {
    display: block;
    width: 170px;
    height: auto;
  }
  @media ${device.laptop} {
    display: block;
    width: 210px;
    height: auto;
  }
  @media (min-width: 1500px) {
    display: block: 
    width: 300px;
    height: auto;
  }
`;

const ProfileImageMobile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media ${device.tablet} {
    visibility: hidden;
    display: none;
  }
`;

const DevContent = styled.div`
  padding: 1em;
  border-radius: 1em;
  background-color: white;

  @media ${device.tablet} {
    width: 175px;
    height: 370px;
  }
  @media ${device.laptop} {
    width: 210px;
    height: 525px;
  }
  @media (min-width: 1500px) {
    width: 300px;
    height: 735px;
  }
`;

const DevHeader = styled.div`
  display: none;

  @media ${device.tablet} {
    display: inline-block;
    display: flex;
    justify-content: space-between;
  }
`;

const Name = styled.p`
  font-weight: 800;
  color: #486572;
  font-size: 20px;
  font-family: "Playfair Display", serif;

  @media ${device.tablet} {
    font-size: 15px;
    padding-top: 0.5em;
  }
  @media ${device.laptop} {
    font-size: 20px;
    padding-top: 0.23em;
  }
  @media (min-width: 1500px) {
    font-size: 30px;
    padding-top: 0.3em;
  }
`;

const DevBlurb = styled.div`
  border-radius: 1em;
  font-size: 15px;
  text-align: center;
  color: #486572;
  font-family: "Cormorant Garamond", serif;
  padding-top: 0.5em;

  @media ${device.tablet} {
    padding-top: 1em;
    font-size: 15px;
  }
  @media ${device.laptop} {
    padding-top: 1em;
    font-size: 20px;
  }
  @media (min-width: 1500px) {
    font-size: 25px;
    padding-top: 1em;
  }
`;
