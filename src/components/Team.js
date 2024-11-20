import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import team1 from '../assets/team1.png';
import team2 from '../assets/team2.png';

const TeamContainer = styled.div`
  padding: 80px 20px;
  background-color: #3f1049;
  color: white;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    color: #ECB61E;
  }

  .team-members {
    display: flex;
    justify-content: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .member {
    background-color: #2e073f;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    width: 300px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }

    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .info {
      padding: 20px;

      h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: #ECB61E;
      }

      p {
        font-size: 1rem;
        margin-bottom: 10px;
        color: #ddd;
      }

      a {
        color: #ECB61E;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.3s ease;

        &:hover {
          color: white;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .team-members {
      flex-direction: column;
      align-items: center;
    }

    .member {
      width: 90%;
    }
  }
`;

const Team = () => {
  return (
    <TeamContainer id="team">
      <Fade bottom>
        <h2>The Team Behind the Vision</h2>
        <div className="team-members">
          <div className="member">
            <img src={team1} alt="Chebet Kipngor" />
            <div className="info">
              <h3>Chebet Kipngor</h3>
              <p>Co-Founder</p>
              <a href="https://twitter.com/chebetkipngor" target="_blank" rel="noopener noreferrer">
                @chebetkipngor
              </a>
            </div>
          </div>
          <div className="member">
            <img src={team2} alt="Mohammed Aziz" />
            <div className="info">
              <h3>Mohammed Aziz</h3>
              <p>Co-Founder</p>
              <a href="https://twitter.com/aziz" target="_blank" rel="noopener noreferrer">
                @aziz
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </TeamContainer>
  );
};

export default Team;
