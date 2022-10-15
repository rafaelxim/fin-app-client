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
    }
    body {
      background-color: ${theme.colors.primary800};
    }
  `}
`;

export default GlobalStyles;
