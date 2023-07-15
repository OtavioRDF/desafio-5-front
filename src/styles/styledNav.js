import { styled } from "styled-components";

export const StyledNav = styled.nav`
  ul{
    display: flex;
    align-self: center;
    justify-content: center;

    li{
      font-weight: 600;
      margin: 0 20px 0 20px;
      
      a { 
        color: black;
        text-decoration: none;
      }
    }
  }
`;