import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        
        box-sizing: border-box;
        user-select: none;
    }
    
    body, html {
        height: 100%;
    }
    
    body, input, textarea, select, button {
        font-size: 1vmax;
        font-weight: 400;
        font-family: "Montserrat", sans-serif;
    }

    button {
        border: none;
        background: none;
    }
`