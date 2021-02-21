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
*::-moz-selection{
  ${(props) => {
    if (props.darkMode) {
      return 'background: rgba(0, 0, 0, 1); color: #E7E7E7';
    } else {
      return 'background: rgba(255, 255, 255, 1); color: #2D2D2D';
    }
  }}
}
*::selection{
  ${(props) => {
    if (props.darkMode) {
      return 'background: rgba(0, 0, 0, 1); color: #E7E7E7';
    } else {
      return 'background: rgba(255, 255, 255, 1); color: #2D2D2D';
    }
  }}
}
html{
    font-size: 62.5%;
    ${
      navigator.userAgent.toLowerCase().indexOf('firefox') > -1 &&
      'overflow-x: hidden'
    }
}
body{
    background: #202020;}
`;
