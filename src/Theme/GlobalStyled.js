import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  html{
    font-size: 62.5%
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: "encode sans", sans-serif;
    font-size: 16px;
    font-weight: 400;

    padding: 0;
    margin: 0;
  }

  header{
    position: sticky;
    top: 0;
    z-index: 998;
  }

  a {
    text-decoration: none;
  }

  a,button,input{
    font-family: inherit;
    color: currentColor;
    cursor: pointer;
  }

  button {
    outline: none;
    border:none;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyled;
