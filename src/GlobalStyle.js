import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{
  
    color: ${(p) => p.theme.colors.text};
    font-family: Raleway, sans-serif;
    font-weight: 400;
    padding-left: 100px;
    padding-right: 100px;

    a{
    text-decoration: none;
    }
    ul{
        list-style: none;

    }
 
}`;
