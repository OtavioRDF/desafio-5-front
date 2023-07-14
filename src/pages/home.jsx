import Inputs from "../components/input";
import Table from "../components/table";
import Button from "../components/button";
import { useState } from "react";
import axios from "axios";

import {StyledNoContent} from "../styles/styledNoContent";
import {InputsDiv} from "../styles/inputsDiv";
import {StyledSection} from "../styles/styledSection";

export default function Home(){
  const [data, setData] = useState();
  const baseURL = "http://localhost:8080/api/v1/transferencias";
  
  const [formValues, setFormValues] = useState({
    idConta: "",
    dataInicio: "",
    dataFinal: "",
    nomeOperadorTransacionado: "",
  });

  function handleChange(e){
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues)
  }

  async function handleFormSubmit(e){
    e.preventDefault();
    let url = `${baseURL}/${formValues.idConta}`;
    
    if (formValues.nomeOperadorTransacionado) 
      url += `?nomeOperadorTransacao=${formValues.nomeOperadorTransacionado}`

    if (formValues.dataInicio && formValues.dataFinal) {
      const paramSeparator = formValues.nomeOperadorTransacionado ? "&" : "?";
      url += `${paramSeparator}dataInicio=${formValues.dataInicio}&dataFinal=${formValues.dataFinal}`
    }
   
    try{
      console.log(url);
      const response = await axios.get(url)
      setData(response.data);
      console.log(response.data);
    } catch (err){
      console.log(err);
    }
  }
  return(
    <main>
      <StyledSection>
        <form onSubmit={handleFormSubmit}>
          <InputsDiv>
              <Inputs 
                type="date" 
                placeholder="14/02/2019" 
                name="dataInicio" 
                label="Data de início" 
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
          <Button text="Pesquisar"/>
        </form>
        {data 
          ? <Table data={data}/> 
          : <StyledNoContent>Não há dados para serem exibidos</StyledNoContent>
        }
      </StyledSection>
    </main>
  )
}