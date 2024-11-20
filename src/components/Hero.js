import React from 'react';
import styled from 'styled-components';
import Typewriter from 'react-typewriter-effect';
import logo from '../assets/xabilalogo1.png';
import bgImage from '../assets/xabillabg.jpg';

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  text-align: center;
  padding: 20px;

  .logo {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 80px;
    cursor: pointer;
  }

  .highlight {
    color: #ECB61E; /* Yellow color for "Xabila.io" */
    font-size: 3rem; /* Bigger size */
    font-weight: bold; /* Bold font */
  }

  .typewriter-container {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.5;
  }

  .cta {
    background-color: #ECB61E;
    color: #2e073f;
    padding: 15px 30px;
    margin-top: 20px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .cta:hover {
    background-color: #ad49e1;
  }

  @media (max-width: 768px) {
    .cta {
      padding: 10px 20px;
    }

    .logo {
      width: 60px;
    }
  }
`;

const Hero = () => (
  <HeroContainer>
    <img src={logo} alt="Xabila Logo" className="logo" />
    <div className="typewriter-container">
      <Typewriter
        textStyle={{
          fontFamily: 'DM Sans, sans-serif',
          color: 'white',
          fontWeight: 600,
          fontSize: '2.5rem',
        }}
        startDelay={200}
        cursorColor="#ECB61E"
        multiText={[
          "Welcome to ",
          "XaBIla",
        ]}
        multiTextDelay={800}
        typeSpeed={100}
        nextTextDelay={500}
        hideCursorAfterText
      />
      <span className="highlight">Xabila.io</span>
    </div>
    <p>Connecting Web 3.0 brands with Africa’s top creators.</p>
    <button className="cta">Join the Movement</button>
  </HeroContainer>
);

export default Hero;
