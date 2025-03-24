import { Component, React } from 'react';
import Menu from "./components/Menu";
import TabelaLivros from "./components/TabelaLivros";
import NotFound from "./components/NotFound";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

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
  render() {
    return (
      <Router>
        <div className='App'>
          <Menu />
          <Routes>
            <Route index element={<TabelaLivros livros={this.state.livros} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App;
