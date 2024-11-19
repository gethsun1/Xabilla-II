import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const AboutContainer = styled.div`
  padding: 50px 20px;
  background-color: #3f1049;
  color: white;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #ECB61E;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin: 0 auto;
    max-width: 800px;
  }
`;

const About = () => (
  <Fade bottom>
    <AboutContainer>
      <h2>About Xabila.io</h2>
      <p>
        In the heart of Africa's digital revolution, Xabila.io bridges Web 3.0 brands with top African creators.
        With our decentralized platform, we're shaping the future of blockchain innovation by connecting communities and empowering creators.
      </p>
    </AboutContainer>
  </Fade>
);

export default About;
