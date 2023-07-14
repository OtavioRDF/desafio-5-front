import styled  from "styled-components";
import Inputs from "../components/input";
import Table from "../components/table";
import Button from "../components/button";
import { useState } from "react";

export default function Home(){
  const [formValues, setFormValues] = useState({
    idConta: "",
    dataInicio: "",
    dataFinal: "",
    nomeOperadorTransacionado: "",
  });

  function handleChange(e){
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  function handleFormSubmit(e, formValues){
    e.preventDefault()
  }
  const obj= [
    {
      data: "20/04/2000",
      valentia: "500.00",
      tipo: "depósito",
      nomeOperador: "Fulano"
    },
    {
      data: "21/04/2000",
      valentia: "900.00",
      tipo: "depósito",
      nomeOperador: "Fulano"
    },
    {
      data: "22/04/2000",
      valentia: "700.00",
      tipo: "depósito",
      nomeOperador: "Dulano"
    },
    {
      data: "23/04/2000",
      valentia: "600.00",
      tipo: "depósito",
      nomeOperador: "Sicrano"
    }
  ]
  return(
    <main>
      <StyledSection>
        <form onSubmit={handleFormSubmit}>
          <InputsDiv>
              <Inputs 
                type="date" 
                placeholder="14/02/2019" 
                name="dataInicio" label="Data de início" 
                onChange={handleChange}
                value={formValues.dataInicio} 
              />
              <Inputs 
                type="date" 
                placeholder="15/02/2019" 
                name="dataFinal" 
                label="Data de Fim" 
                onChange={handleChange}
                value={formValues.dataFinal} 
                />
              <Inputs 
                type="text" 
                placeholder="Sicrano" 
                name="nomeOperadorTransacionado" 
                label="Nome operador transacionado" 
                onChange={handleChange}
                value={formValues.nomeOperadorTransacionado} 
              />
              <Inputs type="text" 
                placeholder="1" 
                name="idConta" 
                label="Número da conta" 
                onChange={handleChange}
                required={true}
                value={formValues.idConta} 
              />
          </InputsDiv>
          <Button text="Buscar"/>
        </form>
        <Table data={obj}/>
      </StyledSection>
    </main>
  )
}

const InputsDiv = styled.div`
  width: 620px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;
`;