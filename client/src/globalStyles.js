import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }
    body {
        font-family: 'Ubuntu Mono', monospace;
        /* font-family: Arial, Helvetica, sans-serif; */
        font-size: large;
        box-sizing: border-box;
        /* filter: blur(8px); */
        
    }
    header {
        background: whitesmoke;
        padding-top: 0.5rem;
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

    thead {
        background: whitesmoke;
        color: black
    }

    h1 {
        text-align: center;
        margin: 1rem;
    }

    h2 {
        text-align: center;
        margin: 1.5rem;
        font-weight: bold;
    }

    h4 {
        margin: 2rem;
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
        margin: 0.25rem 1rem;
        cursor: pointer;
    }

    button:active {
        transform: translateY(2px);
    }

    a:link {
        text-decoration: none;
        color: inherit;
    }

    a:visited {
        text-decoration: none;
        color: inherit;
    }

    input {
        display: flex;
        border: 1px solid darkgray;
        padding: 0.75em;
        border-radius: 5px;
        margin: auto;
        align-items: center;
        margin-top: 0.5rem;
        width: 60%;
    }
`;

export default GlobalStyle;
