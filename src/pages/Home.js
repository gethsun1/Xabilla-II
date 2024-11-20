import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Revenue from '../components/Revenue';
import Team from '../components/Team';

const Home = () => (
  <>
    <Navbar />
    <Hero id="hero" />
    <About id="about" />
    <Features id="features" />
    <Stats id="stats" />
    <Revenue id="revenue" />
    <Team id="team" />
  </>
);

export default Home;
