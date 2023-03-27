import React from "react";
import styled from "styled-components";
import { device } from "../../styles/global";

const AboutTeam: React.FC = () => {
  return (
    <Wrapper>
      <LogoImage src="logo.png" />
      <PageTitle>Memory Makers</PageTitle>
      <DevsWrapper>
        <DevWrapper>
          <ProfileImageMobile src="alicia.png" />
          <ProfileImageLaptop src="alicia.png" />
          <DevContent>
            <DevHeader>
              <a href="https://www.linkedin.com/in/alicia-hetrick/">
                <a href="https://www.linkedin.com/in/alicia-hetrick-659179ba/">
                  <LinkedInSVG
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    // viewbox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </LinkedInSVG>
                </a>
              </a>
              <Name>Alicia Hetrick</Name>
              <a href="https://github.com/aliciahetrick">
                <GithubSVG
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </GithubSVG>
              </a>
            </DevHeader>

            <DevBlurb>
              Hi! 👋 I'm Alicia, a former laboratory scientist who has turned
              her love of analytical investigation into a passion for life-long
              learning and technical problem solving.
            </DevBlurb>
          </DevContent>
        </DevWrapper>
        <DevWrapper>
          <ProfileImageLaptop src="erica.png" />
          <DevContent>
            <DevHeader>
              <a href="https://www.linkedin.com/in/youngerica/">
                <a href="https://www.linkedin.com/in/youngerica/">
                  <LinkedInSVG
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    // viewbox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </LinkedInSVG>
                </a>
              </a>
              <Name>Erica Young</Name>
              <a href="https://github.com/eyounginnn">
                <GithubSVG
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </GithubSVG>
              </a>
            </DevHeader>

            <DevBlurb>
              Hello, my name is Erica Young! I'm easily excited over math
              problems in the sense that there can only be a right and wrong
              answer. Similar to code, there are many ways to approach a problem
              but there will always be a correct answer.
            </DevBlurb>
          </DevContent>
          <ProfileImageMobile src="erica.png" />
        </DevWrapper>
        <DevWrapper>
          <ProfileImageMobile src="jessie.png" />
          <ProfileImageLaptop src="jessie.png" />
          <DevContent>
            <DevHeader>
              <a href="https://www.linkedin.com/in/jessiechiu12/">
                <a href="https://www.linkedin.com/in/jessiechiu12/">
                  <LinkedInSVG
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    // viewbox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </LinkedInSVG>
                </a>
              </a>
              <Name>Jessie Chiu</Name>
              <a href="https://github.com/JessieChiu1">
                <GithubSVG
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </GithubSVG>
              </a>
            </DevHeader>

            <DevBlurb>
              Full Stack software engineer with prior experience in finance.
              Enjoy learning new things and solving interesting problems.
              Currently listening to Myth and Legend Podcast, and following
              financial and economical news.
            </DevBlurb>
          </DevContent>
        </DevWrapper>
        <DevWrapper>
          <ProfileImageLaptop src="mandy.png" />
          <DevContent>
            <DevHeader>
              <a href="https://www.linkedin.com/in/mandy-chin/">
                <a href="https://www.linkedin.com/in/mandy-chin/">
                  <LinkedInSVG
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    // viewbox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </LinkedInSVG>
                </a>
              </a>
              <Name>Mandy Chin</Name>
              <a href="https://github.com/aliciahetrick">
                <GithubSVG
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </GithubSVG>
              </a>
            </DevHeader>

            <DevBlurb>
              Hi, I'm Mandy! I am a software engineer with experience in
              full-stack web development and a background in education. When I’m
              not coding, you can find me reading, cooking, snapping pictures,
              and strolling through Central Park.
            </DevBlurb>
          </DevContent>
          <ProfileImageMobile src="mandy.png" />
        </DevWrapper>
      </DevsWrapper>
      <a href="https://github.com/Capstone-MEJA/memorymarker">
        <GithubSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </GithubSVG>
      </a>
    </Wrapper>
  );
};

export default AboutTeam;

const Wrapper = styled.div`
  background-color: #white;
  background-color: #ceebec;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;

  @media ${device.laptopL} {
    background-color: #ceebec;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }
`;

const LogoImage = styled.img`
  margin-top: -5em;
  width: 150px;
`;

const PageTitle = styled.h1`
  color: #486572;
`;

const DevsWrapper = styled.div`
  display: flex;
  border: 10px solid black;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;

  @media (min-width: 850px) {
    flex-direction: row;
    gap: 1em;
    max-width: 850px;
    border: 10px solid red;
  }

  @media (min-width: 1100px) {
    flex-direction: row;
    gap: 1em;
    max-width: 1100px;
    border: 10px solid red;
  }
`;

const DevWrapper = styled.div`
  //   border: 1px solid red;
  width: 75%;
  // max-width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
  border: 10px solid pink;

  @media (min-width: 425px) {
    border: 10px solid green;
    height: 100%;
    // min-height: 600px;
    max-height: 600px;
  }

  @media (min-width: 850px) {
    flex-direction: column;
    border: 10px solid blue;
    // height: 100%;
    // min-height: 600px;
    max-height: 600px;
    // overflow: auto;
  }

  @media (min-width: 1100px) {
    // flex-direction: column;
    border: 10px solid orange;
    // height: 100%;
    // max-height: 600px;
    // // overflow: auto;
  }
`;

const ProfileImageLaptop = styled.img`
  width: 30%;
  height: 30%;
  border-radius: 1em;
  border: 1px solid green;
  display: none;
  @media (min-width: 850px) {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const ProfileImageMobile = styled.img`
  //   visibility: visible;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  @media (min-width: 850px) {
    visibility: hidden;
    display: none;
  }
`;

const DevContent = styled.div`
  // background-color: white;
  padding: 1em;
  border-radius: 1em;
  background-color: white;
  min-width: 300px;

  // @media (min-width: 425px) {
  //   min-width: auto;
  //   min-height: 250px;
  //   max-height: 400px;
  // }

  @media (min-width: 850px) {
    min-width: auto;
    min-height: 350px;
    max-height: 400px;

    overflow: auto;
  }

  @media (min-width: 1100px) {
    min-width: auto;
    min-height: 250px;
    max-height: 400px;

    // overflow: auto;
  }
`;

const DevHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.p`
  font-weight: 800;
  text-align: center;
  color: #486572;
  font-size: 0.9em;
`;

const DevBlurb = styled.div`
  border-radius: 1em;
  text-align: center;
  color: #486572;
  padding-top: 1em;
`;

const LinkedInSVG = styled.svg`
  fill: #0e76a8;
`;

const GithubSVG = styled.svg`
  fill: black;
`;
