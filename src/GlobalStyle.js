import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

body{
  
    color: ${(p) => p.theme.colors.text};
    font-family: Raleway, sans-serif;
    font-weight: 400;
    

    a{
    text-decoration: none;
    }
    ul{
        list-style: none;

    }
    h1,h2,h3,h4,h5,h6,p,ul,li{
        margin: 0;padding: 0;
    }
 img{
    display: block;
    object-fit: contain;
 }
 button{
    cursor: pointer;
 }
 .container{
    padding:0 100px;
    
 }
}`;
