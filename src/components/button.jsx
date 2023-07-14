import { StyledButton } from "../styles/styledButton";

export default function Button({text}){
  return(
    <StyledButton type="submit">
      {text}
    </StyledButton>
  )
}

