import { Component } from 'react';

class Navegador extends Component {
  state = {};
  titulo = 'Santa Genara';
  render() {
    return (
      <div className="relative bg-green-700 mb-3 shadow-lg text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            <div className="flex">
              <a href="#" className="text-3xl">
                {this.titulo}
              </a>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="#">
                <span className="pl-3 py-2 bg-green-900 hover:bg-yellow-700 rounded-full">
                  Carrito
                  <span className="px-3 py-2 ml-1 rounded-full bg-green-600 hover:bg-yellow-500">
                    1 <i className="fa fa-shopping-basket"></i>
                  </span>
                </span>
              </a>
              <div>
                <i className="fa fa-sign-in"></i> Login
              </div>
              <div>
                <i className="fa fa-pencil"></i> Registrate
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Navegador;
