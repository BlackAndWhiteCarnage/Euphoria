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
        return '-webkit-box-shadow: 0px 0px 20px 5px rgba(0,0,0,.5); box-shadow: 0px 0px 20px 5px rgba(0,0,0,.5);';
      } else {
        return '-webkit-box-shadow: 0px 0px 20px 5px rgba(255,255,255,.5); box-shadow: 0px 0px 20px 5px rgba(255,255,255,.5);';
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
}
body{
    ${(props) => {
      if (props.darkMode) {
        return 'background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(232,232,232,1) 49%, rgba(208,208,208,1) 98%);';
      } else {
        return 'background: linear-gradient(#1d1d1d, #000000, #505050);';
      }
    }};
    background-repeat: no-repeat;
    background-attachment: fixed;
    h1{
      line-height: normal;
    }
    line-height: 2.2rem;
    @media screen and (max-width: 680px){
      line-height: 1.5rem;
    }
}
    @media screen and (min-width: 680px){
    ::-webkit-scrollbar {
    width: .5rem;
    background: none;
    }
    ::-webkit-scrollbar-track {
    width: .5rem;
    }
    ::-webkit-scrollbar-thumb {
    ${(props) => {
      if (props.darkMode) {
        return 'background: #2D2D2D;';
      } else {
        return 'background: #E7E7E7;';
      }
    }}
    }
    ::-webkit-scrollbar-thumb:hover {
    background: #B80202;
    }
    }
    @media screen and (max-width: 680px){
      ::-webkit-scrollbar{
        display: none;
      }
    }
`;
