import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased !important;
    transition: background-color 200ms, border-color 200ms, color 200ms ease;
  }

  *:focus {
    outline: 0;
  }

  body, input, button {
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 21px;
  }

  h1, h2, h3, h4, h5 {
    line-height: 2rem;
  }

  #root {
    min-height: 100vh;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: 0;
    transition: all 200ms;
  }

  .w-100 {
    width: 100%;
  }
`;
