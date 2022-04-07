import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0px;
        padding: 0px;
        font-family: Arial, Helvetica, sans-serif;
    }

    table {
        border-top: 5px solid black;
        text-align: center;
    }

    tr {
        border: 1px solid blue;
    }
`;

export default GlobalStyle;
