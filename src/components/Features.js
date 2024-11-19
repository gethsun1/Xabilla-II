import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 50px 20px;
  background-color: #2e073f;
  color: white;

  .feature {
    width: 300px;
    margin: 15px;
    text-align: center;
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 10px;
    color: #ECB61E;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const Features = () => (
  <FeaturesContainer>
    <Zoom>
      <div className="feature">
        <div className="icon">🚀</div>
        <h3>Innovation</h3>
        <p>We embrace bold ideas and cutting-edge technology to shape the future of Web 3.0.</p>
      </div>
    </Zoom>
    <Zoom>
      <div className="feature">
        <div className="icon">🌍</div>
        <h3>Community</h3>
        <p>Fostering a vibrant and inclusive tribe where everyone thrives together.</p>
      </div>
    </Zoom>
    <Zoom>
      <div className="feature">
        <div className="icon">🤝</div>
        <h3>Collaboration</h3>
        <p>Building partnerships that unlock endless possibilities.</p>
      </div>
    </Zoom>
  </FeaturesContainer>
);

export default Features;
