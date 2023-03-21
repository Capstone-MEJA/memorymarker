import React from 'react'
import styled from 'styled-components'

const AboutText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    height: 70vh;
`
const AboutTitle = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    height: 70vh;
`
const AboutSection = styled.div``
const Paragraph = styled.div``


const About: React.FC = () => {
    return (
        <AboutSection>
            <AboutTitle>
            About Us
            </AboutTitle>

            <AboutText>
                Welcome to the world's most popular social media platform. 
            </AboutText>
            <Paragraph>
                Mark the Memories you Make
            </Paragraph>

        </AboutSection>
        
    )
}

export default About