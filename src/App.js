import { Component } from 'react';
import Menu from "./components/Menu";
import TabelaLivros from "./components/TabelaLivros";

class App extends Component {
  state = {
    livros: [
      
    ]
  }
  render() {
    return (
      <div className='App'>
        <Menu />
        <TabelaLivros />
      </div>
    )
  }
}

export default App;
