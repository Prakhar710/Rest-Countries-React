import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.body};
    transition: all 0.50s linear;
  }

  .links{
    color: ${({ theme }) => theme.body};
    transition: all 0.50s linear;
  }

  input,select{
    color:${({ theme }) => theme.input};
    background: ${({ theme }) => theme.background};
    transition: all 0.50s linear;
  }

  .country-container{
    background: ${({ theme }) => theme.elements};
    transition: all 0.50s linear;
  }

  .back-btn,.border-buttons-btn{
    color:${({ theme }) => theme.body};
    background: ${({ theme }) => theme.elements};
    transition: all 0.50s linear;
  }

  `;

// font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
// .search-wrapper,.search-bar,.filter-wrapper{
//   color: ${({ theme }) => theme.text};
//   background: ${({ theme }) => theme.body};
// }
