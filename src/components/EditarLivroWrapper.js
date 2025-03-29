
import { useParams, Navigate } from 'react-router-dom';
import CadastrarLivros from './CadastrarLivro';

const EditarLivroWrapper = props => {
    const {isbn} = useParams();  // Obtém o ISBN da URL
    
    const livro = props.livros.find(
      livro => livro.isbn === isbn
    )

    return livro ? <CadastrarLivros editarLivro={props.editarLivro} livro={livro} /> : <Navigate to="/" />;
  }

  export default EditarLivroWrapper;