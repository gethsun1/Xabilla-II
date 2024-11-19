// styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'DM Sans', sans-serif;
    background-color: #2e073f;
    color: white;
  }

  h1, h2, h3 {
    font-family: 'Oxygen', sans-serif;
  }

  a {
    text-decoration: none;
    color: #ECB61E;
  }

  .highlight {
    color: #ad49e1;
  }
`;

export default GlobalStyles;
