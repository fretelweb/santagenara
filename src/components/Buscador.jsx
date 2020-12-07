import { Component, Fragment } from 'react';

class Buscador extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <div className="relative m-2">
          <input
            type="search"
            className="border rounded-l py-1 px-2"
            defaultValue=""
            placeholder="Ingrese su busqueda"
          />
          <button className="rounded-r bg-gray-100 border border-l-0 px-2 py-1 ring-0">
            Buscar
          </button>
        </div>
      </Fragment>
    );
  }
}

export default Buscador;
