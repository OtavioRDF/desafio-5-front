import { StyledNav } from "../styles/styledNav";

export default function Pagination({dataPerPage, totalData, paginate}){
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalData/dataPerPage); i++){
    pageNumbers.push(i);
  }

  return(
    <StyledNav>
      <ul>
        {pageNumbers.map((number) => 
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#">{number}</a>
          </li>
        )}
      </ul>
    </StyledNav>
  )
}