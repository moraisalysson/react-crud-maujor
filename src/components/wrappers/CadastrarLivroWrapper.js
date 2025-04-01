import CadastrarLivros from '../CadastrarLivro';
import { Navigate } from 'react-router-dom';

const LoginWrapper = props => {
  return props.isAuthenticated ?
    <CadastrarLivros
      inserirLivro={props.inserirLivro}
      livro={{ id: 0, isbn: "", titulo: "", autor: "" }}
    />
    : <Navigate to="/" />;
}

export default LoginWrapper;