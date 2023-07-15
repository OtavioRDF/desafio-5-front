import { styled } from "styled-components";

export const StyledNav = styled.nav`
  ul{
    display: flex;
    align-self: center;
    justify-content: space-evenly;

    li{
      font-weight: 600;

      a { 
        color: black;
        text-decoration: none;
      }
    }
  }
`;