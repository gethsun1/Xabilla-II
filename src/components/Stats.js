// components/Stats.js
import React from 'react';
import styled from 'styled-components';

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 50px 20px;
  background-color: #3f1049;
  color: white;

  .stat {
    text-align: center;
  }

  .value {
    font-size: 2.5rem;
    font-weight: bold;
    color: #ECB61E;
  }
`;

const Stats = () => (
  <StatsContainer>
    <div className="stat">
      <div className="value">28.5%</div>
      <p>Annual creator economy growth</p>
    </div>
    <div className="stat">
      <div className="value">40.12%</div>
      <p>Web 3.0 market CAGR</p>
    </div>
    <div className="stat">
      <div className="value">678M</div>
      <p>Mobile users by 2025</p>
    </div>
  </StatsContainer>
);

export default Stats;
