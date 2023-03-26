import React from "react";
import styled from "styled-components";
import { device } from "../../styles/global";

const AboutTeam: React.FC = () => {
  return (
    <Wrapper>
      <TeamWrapper>
        <LogoImageWrapper src="logo.png" />
        <Title>Memory Makers</Title>
        <DevsWrapper>
          <DevWrapper>
            <ImageWrapperMobile src="alicia.png" />
            <ImageWrapperLaptop src="alicia.png" />
            <DevsText>
              <MobileWrapper>
                <LinkedInMobile href="https://www.linkedin.com/in/alicia-hetrick/">
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
                </LinkedInMobile>
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
              </MobileWrapper>
              <div>
                <LinkedInLaptop href="https://www.linkedin.com/in/alicia-hetrick/">
                  LinkedIn
                </LinkedInLaptop>
              </div>
              <DevBlurb>
                Hi! 👋 I'm Alicia, a former laboratory scientist who has turned
                her love of analytical investigation into a passion for
                life-long learning and technical problem solving.
              </DevBlurb>
            </DevsText>
          </DevWrapper>
          <DevWrapper>
            <ImageWrapperMobile src="erica.png" />
            <ImageWrapperLaptop src="erica.png" />
            <DevsText>
              <MobileWrapper>
                <LinkedInMobile href="https://www.linkedin.com/in/youngerica/">
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
                </LinkedInMobile>
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
              </MobileWrapper>
              <div>
                <LinkedInLaptop href="https://www.linkedin.com/in/youngerica/">
                  LinkedIn
                </LinkedInLaptop>
              </div>
              <DevBlurb>
                Hello, my name is Erica Young! I'm easily excited over math
                problems in the sense that there can only be a right and wrong
                answer. Similar to code, there are many ways to approach a
                problem but there will always be a correct answer.
              </DevBlurb>
            </DevsText>
          </DevWrapper>
          <DevWrapper>
            <ImageWrapperMobile src="jessie.png" />
            <ImageWrapperLaptop src="jessie.png" />
            <DevsText>
              <MobileWrapper>
                <LinkedInMobile href="https://www.linkedin.com/in/jessiechiu12/">
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
                </LinkedInMobile>
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
              </MobileWrapper>
              <div>
                <LinkedInLaptop href="https://www.linkedin.com/in/jessiechiu12/">
                  LinkedIn
                </LinkedInLaptop>
              </div>
              <DevBlurb>
                Full Stack software engineer with prior experience in finance.
                Enjoy learning new things and solving interesting problems.
                Currently listening to Myth and Legend Podcast, and following
                financial and economical news.
              </DevBlurb>
            </DevsText>
          </DevWrapper>
          <DevWrapper>
            <ImageWrapperMobile src="mandy.png" />
            <ImageWrapperLaptop src="mandy.png" />
            <DevsText>
              <MobileWrapper>
                <LinkedInMobile href="https://www.linkedin.com/in/mandy-chin/">
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
                </LinkedInMobile>
                <Name>Mandy Chin</Name>
                <a href="https://github.com/mandy-chin">
                  <GithubSVG
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </GithubSVG>
                </a>
              </MobileWrapper>
              <div>
                <LinkedInLaptop href="https://www.linkedin.com/in/mandy-chin/">
                  LinkedIn
                </LinkedInLaptop>
              </div>
              <DevBlurb>
                Hi, I'm Mandy! I am a software engineer with experience in
                full-stack web development and a background in education. When
                I’m not coding, you can find me reading, cooking, snapping
                pictures, and strolling through Central Park.
              </DevBlurb>
            </DevsText>
          </DevWrapper>
        </DevsWrapper>
        <a href="https://github.com/Capstone-MEJA/memorymarker">
          <GithubSVG xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </GithubSVG>
        </a>
      </TeamWrapper>
    </Wrapper>
  );
};

export default AboutTeam;

const TeamWrapper = styled.div`
  max-width: 1024px;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #ceebec;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
  gap: 1em;

  //   // when it's big, it will be black
  //   @media ${device.mobileL} {
  //     background-color: black;
  //   }

  //   @media ${device.tablet} {
  //     background-color: green;
  //   }

  // @media ${device.laptop} {
  //   gap: 1em;
  // }
`;

const LogoImageWrapper = styled.img`
  width: 100px;
  height: 100px;
`;

const Title = styled.h1`
  padding-bottom: 1em;
  //   color: #739cf0;
  color: #486572;
`;

const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DevsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media ${device.mobileL} {
    // max-width: 425px;
    // padding: 0.5em;
  }

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    // background-color: white;
    border-radius: 1em;
  }
`;

const DevWrapper = styled.div`
  display: flex;
  gap: 1em;
  max-width: 600px;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    max-width: 300px;
  }
`;

const DevsText = styled.div`
  border-radius: 1em;
  text-align: left;
  padding: 1em;
  background-color: white;

  @media ${device.laptop} {
    text-align: center;
    height: 200px;
    display: flex;
    flex-direction column;
  }
`;

const DevBlurb = styled.div`
  @media ${device.laptop} {
    text-align: center;
    color: #486572;
    padding-top: 1em;
    font: Cormorant Garamond;
  }
`;

const Name = styled.p`
  font-size: 16px;
  font-weight: 800;

  @media ${device.laptop} {
    text-align: center;
    color: #486572;
    font-size: 1.5em;
  }
`;

const LinkedInLaptop = styled.a`
  text-decoration: none;
  color: #739cf0;
  border: 2px solid pink;

  @media ${device.laptop} {
    display: none;
    flex-direction: row;
  }
`;

const LinkedInMobile = styled.a`
  text-decoration: none;
  color: #739cf0;
`;

const ImageWrapperLaptop = styled.img`
  //   width: 20%;
  //   height: 20%;
  //   border-radius: 50%;

  @media ${device.mobileS} {
    // display: none;
    // max-width: 80%;
    width: 300px;
    height: 300px;
    // // align-items: center;
    // display: flex;
    // justify-content: center;
    // // height: 20%;
    // border: 1px solid green;
    border-radius: 1em;
  }

  @media ${device.tabletMax} {
    display: none;
  }
`;

const ImageWrapperMobile = styled.img`
  width: 20%;
  height: 20%;
  border-radius: 50%;
  border: 1px solid red;

  //   @media ${device.mobileLMax} {
  //     display: none;
  //   }

  @media ${device.laptop} {
    display: none;
  }
`;

const LinkedInSVG = styled.svg`
  fill: #0e76a8;
`;

const GithubSVG = styled.svg`
  fill: black;
`;
