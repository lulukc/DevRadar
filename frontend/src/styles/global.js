import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root{
    height: 100%;
  }
  body {
    background: #e5e6f0;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font-size: 14px;
    font-family: 'roboto', sans-serif;
  }
  a{
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  button{
    cursor: pointer;
    border-style: none;
  }
`;
