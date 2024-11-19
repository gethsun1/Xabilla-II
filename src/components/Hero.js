import React from 'react';
import styled from 'styled-components';
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
    <h1>Welcome to <span className="highlight">Xabila.io</span></h1>
    <p>Connecting Web 3.0 brands with Africa’s top creators.</p>
    <button className="cta">Join the Movement</button>
  </HeroContainer>
);

export default Hero;
