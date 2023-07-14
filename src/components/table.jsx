import { styled } from "styled-components";
import { StyledTd } from "../styles/styledTd";
import { StyledTh } from "../styles/styledTh";
import { StyledTable } from "../styles/styledTable";

export default function Table({data}){
  return(
    <StyledTable>
        <thead>
          <tr>
            <StyledTh>Data</StyledTh>
            <StyledTh>Valentia</StyledTh>
            <StyledTh>Tipo</StyledTh>
            <StyledTh>Nome do operador transacionado</StyledTh>
          </tr>
        </thead>

        <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                    <StyledTd>{item.dataTransferencia}</StyledTd>
                    <StyledTd>R${item.valor}</StyledTd>
                    <StyledTd>{item.tipo}</StyledTd>
                    <StyledTd>{item.nomeOperadorTransacao}</StyledTd>  
                </tr>
              )
            )
            }
        </tbody>
        <tfoot>
        </tfoot>
    </StyledTable>
  );
}