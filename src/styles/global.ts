import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 62.5%
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font: 500 18px/1.5 "Poppins", sans-serif;
    color: ${(props) => props.theme.colors.neutral.veryDarkViolet};
    -webkit-font-smoothing: antialiased;
  }

  input, button, textarea, select {
    font: inherit;
  }

  button {
    border: none;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
`;
