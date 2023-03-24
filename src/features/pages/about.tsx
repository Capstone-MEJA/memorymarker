import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const About: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <AboutWrapper>
      <ImageWrapper src="logo.png"></ImageWrapper>
      <h1>Hey, {auth._id ? auth.username : "friend"} </h1>
      <DevsWrapper>
        <DevWrapper>
          <ImageWrapper src="alicia.png"></ImageWrapper>
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
          <ImageWrapper src="erica.png"></ImageWrapper>
        </DevWrapper>
        <DevWrapper>
          <ImageWrapper src="jessie.png"></ImageWrapper>
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
            wanted a place for people to gather, share their journies and see
            other people's journies all over the map. We're committed to helping
            you tell your story.
          </DevsText>
          <ImageWrapper src="mandy.png"></ImageWrapper>
        </DevWrapper>
      </DevsWrapper>
    </AboutWrapper>
    // <AboutSection>
    //     <AboutTitle>
    //     About
    //     </AboutTitle>
    //     <AboutText>
    //         Welcome to the world's most popular social media platform. Our mission is to help you tell your story.
    //     </AboutText>
    //     <Paragraph>
    //         Mark the Memories you Make
    //     </Paragraph>
    //     <Paragraph>
    //         We are a story-driven platform.  We all have memories we don't want to forget. Our page is a place where people and experiences come together.  Whether it be where you had your first kiss or where you had your latest meal, mark it on the map! This is a site that fits you and your journey on this earth along with all 7.5+ billion of us.
    //     </Paragraph>
    //     <Paragraph>
    //         Get Started: Marking your Memories or Make your Mark?
    //     </Paragraph>
    //     <Paragraph>
    //         Start documenting your journey by creating your account! Have a night you don't want to forget? Mark it on the map! Create a post and journal your thoughts.  It could be as long as you want or as short.  Where was it? Who were you with? How did you feel? Share your voice, express yourself.
    //     </Paragraph>
    //     <Paragraph>
    //         About: The Memory Makers
    //     </Paragraph>
    //     <Paragraph>
    //         Founded in 2023 by a team of makers, thinkers, explorers.  We wanted a place for people to gather, share their journies and see other people's journies all over the map.  Making this big world feel a little smaller.  Everyone has memories and they grow as we all grow together. We're committed to helping you tell your story.
    //     </Paragraph>
    // </AboutSection>
  );
};

export default About;

const AboutWrapper = styled.div`
  height: 100%;
  background-color: #f2cbac;
`;

const DevsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const DevWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

const DevsText = styled.div``;

const ImageWrapper = styled.img`
  width: 20%;
  height: 20%;
  border-radius: 50%;
`;

// const AboutTitle = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 50px;
//     height: 50vh;
// `
// const AboutSection = styled.div``
// const Paragraph = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 30px;
//     height: 50vh;
// `
