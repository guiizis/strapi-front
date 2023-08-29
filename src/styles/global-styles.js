import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: 'border-box'
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 2.4rem;
    font-family: 'Open Sans', sans-serif;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
  }
`;
