import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


main {
    display: block;
}

body {
    font-size: 17px;
    line-height: 1.47059;
    font-weight: 400;
    letter-spacing: -.022em;
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    color: #1d1d1f;
    font-style: normal;
    background-color: #282828;
}
:root {
    --tile-bg: #f9f9f9;
}

html {
    font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
    font-size: 106.25%;
    quotes: "“" "”";
}


`;

export default GlobalStyle;
