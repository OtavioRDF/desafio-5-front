import { StyledLabel } from "../styles/styledLabel"
import { StyledInput } from "../styles/styledInput"

export default function Input({type, placeholder, name, label, required, onChange}){
  return(
    <>
      <StyledLabel htmlFor={name}>{label}
        <StyledInput type={type} placeholder={placeholder} name={name} required={required} onChange={onChange}/>
      </StyledLabel>
    </>
  )
}