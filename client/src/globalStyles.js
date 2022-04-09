import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }
    body {
        font-family: 'Ubuntu Mono', monospace;
        font-size: large;
        box-sizing: border-box;
    }
    table {
        text-align: center;
        margin-top: 1em;
        border-collapse: collapse;
    }
    td, th {
        display: table-cell;
        vertical-align: inherit;
        padding: 1rem;
        border-top: 1px solid black;
    }
    h1 {
        text-align: center;
        margin: 0.5em;
    }

    button {
        border: 0;
        border-radius: 0.25rem;
        background: orange;
        color: white;
        font-family: -system-ui, sans-serif;
        font-size: 1rem;
        line-height: 1.2;
        white-space: nowrap;
        text-decoration: none;
        padding: 0.25rem 0.5rem;
        margin: 0.25rem;
        cursor: pointer;
    }

    button:active {
        transform: translateY(2px);
    }

    a:link {
        text-decoration: none;
    }

    a:visited {
        text-decoration: none;
    }

    input {
        display: flex;
        flex-direction: column;
        padding: 0.5em;
        border-radius: 5px;
        margin: auto;
        align-items: center;
        margin-top: 0.5rem;
        width: auto;
    }
`;

export default GlobalStyle;
