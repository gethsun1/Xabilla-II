// pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Revenue from '../components/Revenue';

const Home = () => (
  <>
    <Hero />
    <About />
    <Features />
    <Stats />
    <Revenue />
    {/* Add more sections like Future Vision or Team here */}
  </>
);

export default Home;
