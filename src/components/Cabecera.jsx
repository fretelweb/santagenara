import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.png';

function Cabecera() {
  const estilo = {
    height: 120,
  };

  return (
    <header className="container py-2 mx-auto">
      <div className="p-4 text-center">
        <img src={logo} alt="" style={estilo} className="inline" />
      </div>
      <div className="grid grid-cols-3 gap-2 p-4 text-sg-blue">
        <div>
          <i className="fa fa-phone"></i> +51 (54) 222222
        </div>
        <nav className="space-x-4 text-center uppercase">
          <Link to="/"> Inicio </Link>
          <Link to="/catalogo"> Catálogo </Link>
        </nav>
        <nav className="text-right space-x-4">
          <Link to="/cart">
            <i className="fa fa-shopping-basket"></i>
          </Link>
          <Link to="/login">
            <i className="fa fa-sign-in"></i> Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Cabecera;
