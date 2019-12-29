import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');

	*{
        box-sizing: border-box;
        color: inherit;
        list-style: none;
        font-weight: normal;
        font-weight: 400;
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    body{
        background-color: #4287f5;
        color: #fff;       
        font-size: 18px;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        padding-bottom: 40px;
    }
`;
