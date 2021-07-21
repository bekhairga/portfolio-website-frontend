import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.2rem;
  }
  body{
    background: #333;
  }
`;

export default GlobalStyled;
