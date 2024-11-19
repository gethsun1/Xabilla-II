// components/Revenue.js
import React from 'react';
import styled from 'styled-components';

const RevenueContainer = styled.div`
  padding: 50px 20px;
  background-color: #3f1049;
  color: white;

  h2 {
    font-size: 2.5rem;
    color: #ECB61E;
    margin-bottom: 30px;
    text-align: center;
  }

  .model {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0;
  }

  .card {
    flex: 0 1 45%;
    background-color: #2e073f;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    color: white;
  }

  .card h3 {
    margin-bottom: 10px;
  }
`;

const Revenue = () => (
  <RevenueContainer>
    <h2>Revenue Model</h2>
    <div className="model">
      <div className="card">
        <h3>Brand Subscriptions</h3>
        <p>Paid plans for brands to access our Web 3.0 influencer database.</p>
      </div>
      <div className="card">
        <h3>Crypto Payments</h3>
        <p>Seamless transactions in digital currencies.</p>
      </div>
      <div className="card">
        <h3>Premium Listings</h3>
        <p>Enhanced visibility for creators via premium profiles.</p>
      </div>
      <div className="card">
        <h3>Commission Earnings</h3>
        <p>Earning commissions for successful collaborations.</p>
      </div>
    </div>
  </RevenueContainer>
);

export default Revenue;
