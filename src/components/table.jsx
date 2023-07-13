import { styled } from "styled-components";

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
                  <StyledTd>{item.data}</StyledTd>
                  <StyledTd>R${item.valentia}</StyledTd>
                  <StyledTd>{item.tipo}</StyledTd>
                  <StyledTd>{item.nomeOperador}</StyledTd>  
              </tr>
            )
          )
          }
      </tbody>
    </StyledTable>
  );
}

const StyledTable = styled.table`
  width: 900px;
  border-collapse: collapse;
  font-size: 16px;
`;

const StyledTh = styled.th`
  font-weight: 600;
  background-color: #d4d4d4;
  padding: 20px;
  border-bottom: solid 2px #8f8f8f;
`;

const StyledTd = styled.td`
  text-align: center;
  padding: 15px;
  border: 1px solid #8f8f8f;
`;
