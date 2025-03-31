import { Component, React } from 'react';
import Menu from "./components/Menu";
import TabelaLivros from "./components/TabelaLivros";
import NotFound from "./components/NotFound";
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import CadastrarLivros from './components/CadastrarLivro';
import EditarLivroWrapper from './components/EditarLivroWrapper';

class App extends Component {
  state = {
    livros: [
      {
        id: 1,
        isbn: "978-85-7522-403-8",
        titulo: "HTML5 - 2ª Edição",
        autor: "Maurício Samy Silva",
      },
      {
        id: 2,
        isbn: "978-85-7522-807-4",
        titulo: "Introdução ao Pentest",
        autor: "Daniel Moreno",
      },
      {
        id: 3,
        isbn: "978-85-7522-780-8",
        titulo: "Internet das Coisas para Desenvolvedores",
        autor: "Ricardo da Silva Ogliari",
      },
    ],
  }

  inserirLivro = livro => {
    livro.id = this.state.livros.length + 1;
    this.setState({
      livros: [ ...this.state.livros, livro ]
    })
  };

  editarLivro = livro => {
    const indice = this.state.livros.findIndex(l => l.id === livro.id)
    const livros = this.state.livros
      .slice(0, indice) //remove do array o livro a ser editado
      .concat(this.state.livros.slice(indice + 1)); //pega todos os elementos após o índice do livro removido e concatena com o array sem o livro (feito no slice)

    const newLivros = [...livros, livro].sort((a, b) => a.id - b.id); //coloca no array livro editado e faz a ordenação

    this.setState({
      livros: newLivros
    })
  };

  removerLivro = livro => {
    if(window.confirm("Remover esse livro?")) {
      const livros = this.state.livros.filter(p => p.isbn !== livro.isbn);
      this.setState({ livros });
    }
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Menu />
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
