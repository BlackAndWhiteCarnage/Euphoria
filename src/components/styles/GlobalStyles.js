import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html{
        font-size: 62.5%;
    }
    *,*::before,*::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #2d2d2d;
        font-family: 'Playfair Display', serif;
    }
`;
