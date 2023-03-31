import React from "react";
import styled from "styled-components";
import { device } from "../../styles/global";

/**
 * Component for the devs to introduce themselves
 * @returns A speech bubble for every dev about their coding journey
 */

const AboutTeam: React.FC = () => {
  return (
    <Wrapper>
      <LogoImage src="logo.png" />
      <PageTitle>Memory Makers</PageTitle>
      <DevsWrapper>
        <DevWrapper>
          <ProfileImageMobile src="alicia.png" />
          <ProfileImageTablet src="alicia.png" />
          <DevContent>
            <DevHeader>
              <a href="https://www.linkedin.com/in/alicia-hetrick/">
                <a href="https://www.linkedin.com/in/alicia-hetrick-659179ba/">
                  <LinkedInSVG
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
              learning and technical problem solving. When I'm not coding, you can find me on various hiking trails around Virginia with my adorable toy Australian Shepherd or covered in sawdust working on renovating.
            </DevBlurb>
          </DevContent>
        </DevWrapper>
        <DevWrapper>
          <ProfileImageTablet src="erica.png" />
          <DevContent>
            <DevHeader>
              <a href="https://www.linkedin.com/in/youngerica/">
                <a href="https://www.linkedin.com/in/youngerica/">
                  <LinkedInSVG
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
              Hello, Erica here! Software engineer by day and real estate agent by weekend. Easily excited over math problems and similar to code, there are many ways to approach a problem
              but there will always be a right and wrong answer. Avid problem solver and memory maker. 
            </DevBlurb>
          </DevContent>
          <ProfileImageMobile src="erica.png" />
        </DevWrapper>
        <DevWrapper>
          <ProfileImageMobile src="jessie.png" />
          <ProfileImageTablet src="jessie.png" />
          <DevContent>
            <DevHeader>
              <a href="https://www.linkedin.com/in/jessiechiu12/">
                <a href="https://www.linkedin.com/in/jessiechiu12/">
                  <LinkedInSVG
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
          <ProfileImageTablet src="mandy.png" />
          <DevContent>
            <DevHeader>
              <a href="https://www.linkedin.com/in/mandy-chin/">
                <a href="https://www.linkedin.com/in/mandy-chin/">
                  <LinkedInSVG
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
        <GithubRepoSVG
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </GithubRepoSVG>
      </a>
    </Wrapper>
  );
};

export default AboutTeam;

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
    height: 100vh;
  }
  @media ${device.tablet} {
    height: 100vh;
  }
  @media ${device.laptop} {
    height: 100vh;
  }
  @media (min-width:1500px) {
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
    font-size: 2.5rem
  }
  @media ${device.laptop} {
    font-size: 3.5rem
  }
  @media ${device.desktop} {
    font-size: 4.5rem
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
  padding-top: .5em;

  @media ${device.tablet} {
    padding-top: 1em;
    font-size: 15px;
  }
  @media ${device.laptop} {
    padding-top: 1em;
    font-size: 20px;
  }
  @media (min-width: 1500px) {
    font-size: 30px;
    padding-top: 1em;
  }
`;

const LinkedInSVG = styled.svg`
  display: none;
  fill: #0e76a8;

  @media ${device.tablet} {
    display: block;
  }
`;

const GithubSVG = styled.svg`
  display: none;
  fill: black;

  @media ${device.tablet} {
    display: block;
  }
`;

const GithubRepoSVG = styled.svg`
  fill: black;
  margin-bottom: 20px;
`;
