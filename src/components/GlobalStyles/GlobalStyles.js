import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
*:focus-visible{
    ${(props) => {
      if (props.darkMode) {
        return '-webkit-box-shadow: 0px 0px 20px 5px rgba(0,0,0,1); box-shadow: 0px 0px 20px 5px rgba(0,0,0,1);';
      } else {
        return '-webkit-box-shadow: 0px 0px 20px 5px rgba(255,255,255,1); box-shadow: 0px 0px 20px 5px rgba(255,255,255,1);';
      }
    }}
    outline: none;
}
*:focus{
  outline: none;
}
html{
    font-size: 62.5%;
}
body{
    background: #202020;
}
`;
