import { Component, React } from 'react';
import Header from "./components/Header";
import TabelaLivros from "./components/TabelaLivros";
import NotFound from "./components/NotFound";
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import CadastrarLivros from './components/CadastrarLivro';
import EditarLivroWrapper from './components/EditarLivroWrapper';

class App extends Component {
  state = {
    livros: JSON.parse(localStorage.getItem("livros")) || [],
  }

  inserirLivro = livro => {
    if(this.state.livros.length !== 0) {
      let ultimoId = 0;
      ultimoId = this.state.livros.at(-1).id;
      livro.id = ultimoId + 1;
    } 

    const livrosAtualizados = [ ...this.state.livros, livro ];

    localStorage.setItem("livros", JSON.stringify(livrosAtualizados));

    this.setState({
      livros: livrosAtualizados
    })
  };

  editarLivro = livro => {
    const indice = this.state.livros.findIndex(l => l.id === livro.id)
    const livros = this.state.livros
      .slice(0, indice) //remove do array o livro a ser editado
      .concat(this.state.livros.slice(indice + 1)); //pega todos os elementos após o índice do livro removido e concatena com o array sem o livro (feito no slice)

    const newLivros = [...livros, livro].sort((a, b) => a.id - b.id); //coloca no array livro editado e faz a ordenação

    localStorage.setItem("livros", JSON.stringify(newLivros));

    this.setState({
      livros: newLivros
    })
  };

  removerLivro = livro => {
    if(window.confirm("Remover esse livro?")) {
      const livros = this.state.livros.filter(p => p.isbn !== livro.isbn);

      localStorage.setItem("livros", JSON.stringify(livros));
      
      this.setState({ livros });
    }
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <Routes>
            <Route index element={<TabelaLivros livros={this.state.livros} removerLivro={this.removerLivro}/>} />
            <Route path="*" element={<NotFound />} />
            <Route
              path='/cadastrar'
              element={
                <CadastrarLivros
                  inserirLivro={this.inserirLivro}
                  livro={{ id: 0, isbn: "", titulo: "", autor: "" }}
                />
            }
            />
            <Route
              path='/editar/:isbn'
              element={
                <EditarLivroWrapper editarLivro={this.editarLivro} livros={this.state.livros}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;
