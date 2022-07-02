import { createGlobalStyle } from "styled-components";


const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  :root {
     --background-color: #2B2B2B;
     --shadow: rgb(68,68,68, 0.7);
     --primary: #ED2324;
     --text-primary: #FFFFFF;
     --text-secondary: #B0B0B0;
  }

  body {
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    background-color: var(--background-color);
  };

`;

export default GlobalStyled;