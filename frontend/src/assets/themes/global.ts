import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: PT Mono, sans-serif;
    user-select: none;
  }

  a {
    text-decoration: none;
  }

  p {
    font-family: PT Mono, sans-serif;
  }

`