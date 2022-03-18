import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  ::selection {
    background: ${(props) => props.theme.colors.yellow}90;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    //background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.text1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.yellow};
    width: fit-content;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;