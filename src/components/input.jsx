import { styled } from "styled-components"

export default function Input({type, placeholder, name, label}){
  return(
    <>
      <Label htmlFor={name}>{label}
        <Inputs type={type} placeholder={placeholder} name={name}/>
      </Label>
    </>
  )
}

const Inputs = styled.input`
  height: 30px;
  width: 250px;
  margin: 0 0 20px 0;

  border: 2px solid #888;
  border-radius: 6px ;
  font-size: 14px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
`;

