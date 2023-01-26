import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

      @media only screen and (min-width: 1100px) {
        font-size: 45%;
      }

      @media only screen and (min-width: 1400px) {
        font-size: 50%;
      }

      @media only screen and (min-width: 1600px) {
        font-size: 55%;
      }
    }
    body {
      background-color: ${theme.colors.primary800};
    }
  `}
`;

export default GlobalStyles;
