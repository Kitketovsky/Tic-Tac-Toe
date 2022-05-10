import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-family: Outfit, sans-serif;
    font-size: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  button {
    background: transparent;
    border: none;
    font: inherit;
  }
  
  svg {
    display: block;
  }
`;
