import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }
    body {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        display: flex;
        justify-content: start;
        
    }    
    
    td, th {
        display: table-cell;
        vertical-align: inherit;
        padding: 1rem;
        border-top: 1px solid whitesmoke;
        text-align: justify;
    }

    h1 {
        text-align: left;
        margin: 1rem;
    }

    h2 {
        text-align: center;
        margin: 1.5rem;
        font-weight: bold;
    }

    h4 {
        margin: 1rem 1rem 0rem 1rem;
        text-align: left;
    }

    button {
        background: #2E5077;
        color: white;
        border: none;
        font-family: Noto Sans,Arial,sans-serif;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: unset;
        line-height: 17px;
        text-transform: unset;
        min-height: 32px;
        min-width: 32px;
        padding: 4px 16px;
        align-items: center;
        border-radius: 9999px;
        box-sizing: border-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: center;
        justify-content: center;
        position: relative;
        text-align: center;
        width: auto;
        margin: 0.25rem 1rem;
        cursor: pointer;
    }

    button:active {
        transform: translateY(2px);
    }

    a:link {
        text-decoration: none;
        color: #0079d3;
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
        /* background: whitesmoke; */
    } 
`;

export default GlobalStyle;
