import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { device } from "../../styles/global";

const AboutTeam: React.FC = () => {
  //   const auth = useSelector((state: RootState) => state.auth);
  return (
    <TeamWrapper>
      <LogoImageWrapper src="logo.png" />
      <Title>Memory Makers</Title>
      <DevsWrapper>
        <DevWrapper>
          <ImageWrapper src="alicia.png" />
          <DevsText>
            <Bold>Alicia Hetrick</Bold>
            <div>
              <a href="https://www.linkedin.com/in/alicia-hetrick/">LinkedIn</a>
            </div>
            <div>Hi! 👋 I'm Alicia.</div>
          </DevsText>
        </DevWrapper>
        <DevWrapper>
          <DevsText>
            <Bold>Erica Young</Bold>
            <div>
              <a href="https://www.linkedin.com/in/youngerica/">LinkedIn</a>
            </div>
            <div>Hello, my name is Erica Young!</div>
          </DevsText>
          <ImageWrapper src="erica.png" />
        </DevWrapper>
        <DevWrapper>
          <ImageWrapper src="jessie.png" />
          <DevsText>
            <Bold>Jessie Chiu</Bold>
            <div>
              <a href="https://www.linkedin.com/in/jessiechiu12/">LinkedIn</a>
            </div>
            <div>
              Full Stack software engineer with prior experience in finance.
              Enjoy learning new things and solving interesting problems.
              Currently listening to Myth and Legend Podcast, and following
              financial and economical news.
            </div>
          </DevsText>
        </DevWrapper>
        <DevWrapper>
          <DevsText>
            <Bold>Mandy Chin</Bold>
            <div>
              <a href="https://www.linkedin.com/in/mandy-chin/">LinkedIn</a>
            </div>
            <div>
              Hi, I'm Mandy! I am a software engineer with experience in
              full-stack web development and a background in education. When I’m
              not coding, you can find me reading, cooking, snapping pictures,
              and strolling through Central Park.
            </div>
          </DevsText>
          <ImageWrapper src="mandy.png" />
        </DevWrapper>
      </DevsWrapper>
      <a href="https://github.com/Capstone-MEJA/memorymarker">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
    </TeamWrapper>
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

export default AboutTeam;

const TeamWrapper = styled.div`
  min-height: 100vh;
  background-color: #ceece8;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

const LogoImageWrapper = styled.img`
  width: 100px;
  height: 100px;
`;

const Title = styled.h1`
  padding-bottom: 1em;
`;

const DevsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media ${device.mobileL} {
    max-width: 425px;
    padding: 0.5em;
`;

const DevWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

const DevsText = styled.div`
  border-radius: 1em;
  text-align: left;
  padding: 1em;
  background-color: white;
`;

const Bold = styled.p`
  font-size: 16px;
  font-weight: 800;
`;

const ImageWrapper = styled.img`
  width: 20%;
  height: 20%;
  border-radius: 50%;
`;
