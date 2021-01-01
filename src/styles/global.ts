import { createGlobalStyle } from 'styled-components';
import imgBackground from '../assets/background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: url(${imgBackground});
    /* color: #fff; */
    -webkit-font-smoothing: antialiased;
    text-shadow: 1px 1px 0px #fff;
  }

  body, input, button {
    font: 16px 'Open Sans', Helvetica, sans-serif, arial;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
