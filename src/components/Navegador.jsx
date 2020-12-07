import { Component } from 'react';

class Navegador extends Component {
  state = {};
  titulo = 'Santa Genara';
  render() {
    return (
      <div className="bg-green-500 p-3 mb-3 shadow">
        <h1 className="text-lg text-white">{this.titulo}</h1>
      </div>
    );
  }
}

export default Navegador;
