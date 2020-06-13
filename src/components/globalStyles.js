import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }

  .links{
    color: ${({ theme }) => theme.text};
  }

  .search-wrapper,.search-bar,.filter-wrapper{
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
  }
  `
