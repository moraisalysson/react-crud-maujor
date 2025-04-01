import TableHome from '../TableHome';
import TabelaLivros from '../TabelaLivros';

const TabelaLivrosWrapper = props => {  
    return props.isAuthenticated ? 
      <TabelaLivros livros={props.livros} removerLivro={props.removerLivro} /> 
      : <TableHome livros={props.livros} />;
  }

  export default TabelaLivrosWrapper;