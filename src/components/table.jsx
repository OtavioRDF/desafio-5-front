import { StyledTd } from "../styles/styledTd";
import { StyledTh } from "../styles/styledTh";
import { StyledTable } from "../styles/styledTable";
import Pagination from "../components/pagination";

export default function Table({data, dataPerPage, totalData, paginate}){
  let saldoPeriodo = 0;

  data.forEach(element => {
    saldoPeriodo += element.valor
    console.log(saldoPeriodo)
  });
  return(
    <StyledTable>
        <thead>
          <tr>
            <StyledTh colSpan="2">Saldo total: R$ {data[0].valorTotal.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</StyledTh>
            <StyledTh colSpan="2">Saldo no período: R$ {saldoPeriodo.toLocaleString('pt-br', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</StyledTh>
          </tr>
        </thead>

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
          <tr>
            <StyledTd colSpan="4"> <Pagination dataPerPage={dataPerPage} totalData={totalData} paginate={paginate}/> </StyledTd>
          </tr>
        </tfoot>
    </StyledTable>
  );
}