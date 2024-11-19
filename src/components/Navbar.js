import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #2e073f;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #ECB61E;
  }

  .nav-links {
    display: flex;
    gap: 20px;
  }

  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;
  }

  .nav-links a:hover {
    color: #ECB61E;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .nav-links {
      gap: 10px;
    }
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <div className="logo">Xabila.io</div>
    <div className="nav-links">
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#features">Features</a>
      <a href="#stats">Stats</a>
      <a href="#revenue">Revenue</a>
    </div>
  </NavbarContainer>
);

export default Navbar;
