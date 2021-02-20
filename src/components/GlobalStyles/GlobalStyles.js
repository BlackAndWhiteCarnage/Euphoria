import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
*:focus{
    -webkit-box-shadow: 0px 0px 20px 5px rgba(227,227,227,0.65);
    box-shadow: 0px 0px 20px 5px rgba(227,227,227,0.65);
    transition: .5s ease;
    outline: none;
}
html{
    font-size: 62.5%;
}
body{
    background: #202020;
}
`;
