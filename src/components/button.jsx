import { styled } from "styled-components";

export default function Button({text}){
  return(
    <StyledButton type="submit">
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  border: 2px solid #888;
  border-radius: 5px;
  background-color: #d4d4d4;
  padding: 15px;
  font-weight: 600;
`;