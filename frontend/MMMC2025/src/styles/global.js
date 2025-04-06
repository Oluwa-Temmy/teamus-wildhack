import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Jaldi", sans-serif;
  }

  :root {
    font-size: 16px;
  }

  ::-webkit-scrollbar{
    width: 7px; 
    height: 7px;
  }

  ::-webkit-scrollbar-track, ::-webkit-scrollbar-corner{
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb{
    background-color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 50px;
  }

  body {
    background: linear-gradient(
      180deg,       
      #334061 0%,
      #212A3E 33%,
      #1C2232 66%,
      #0B0E14 100%
    );
    color: ${({theme}) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-size: 16px;
    outline: none;
  }

  h1, h2, h3, h4 {
    font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .2s;
  }
  
  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;