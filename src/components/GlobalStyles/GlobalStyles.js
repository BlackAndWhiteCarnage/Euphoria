import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
*:focus{
    outline: 3px solid #B80202;
}
html{
    font-size: 62.5%;
}
body{
    background: #202020;
}
`;
