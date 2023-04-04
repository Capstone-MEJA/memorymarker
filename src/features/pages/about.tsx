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
  gap-bottom: 1em;
  padding-left: 1em;
  padding-right: 1em;

  @media ${device.mobileM} {
    justify-content: center;
    width: 100%;
  }
  @media ${device.mobileL} {
    height: 100vh;
  }
`;

const LogoImage = styled.img`
  width: 10rem;
  padding-top: 10px;
  margin-top: -1rem;

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
  margin-top: -2rem;
  margin-bottom: 1rem;
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
    flex-direction: column;
    width: 80%;
  }

  @media ${device.laptop} {
    width: 60%;
  }

  @media ${device.desktop} {
    width: 40%;
  }
`;

const DevWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  margin-bottom: 1em;
`;

const ProfileImageTablet = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 1em;
  display: none;
`;

const ProfileImageMobile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const DevContent = styled.div`
  padding: 1em;
  border-radius: 1em;
  background-color: white;
`;

const DevBlurb = styled.div`
  border-radius: 1em;
  font-size: 15px;
  text-align: center;
  color: #486572;
  font-family: "Cormorant Garamond", serif;
  padding-top: 0.5em;

  @media ${device.tablet} {
    font-size: 20px;
  }
`;
