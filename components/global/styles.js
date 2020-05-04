import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    font-size:10px;
  }

  html, body{
    min-height: 100vh;
    padding:0;
    margin:0;
  }
`;
