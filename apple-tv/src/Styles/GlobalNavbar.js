import styled from "styled-components";

const GlobalNavbar = styled.nav`
  background: rgba(0, 0, 0, 0.92);
  background-color: rgba(0, 0, 0, 0.92);

  body {
    font-weight: normal;
    min-width: 320px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9999;
    display: inline-block;
    margin: 0;
    width: 100%;
    min-width: 1024px;
    height: 25px;
    max-height: 25px;
    font-size: 14px;
    font-family: Helvetica;
    text-decoration: none;
  }
  * {
    font-family: Helvetica;
    padding-left: 2rem;
    border: none;
    color: white;
    outline-offset: -7px;
    font-size: 9px;
    line-height: 3.14286;
    font-weight: 400;
    letter-spacing: -0.01em;
    position: relative;
    z-index: 1;
    justify-content: center;
    display: inline-block;
    padding: 5 10px;
    height: 44px;
  }
  html {
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
    font-size: 106.25%;
    quotes: "“" "”";
  }
`;

export default GlobalNavbar;
