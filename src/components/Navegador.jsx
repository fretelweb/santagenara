import React from 'react';
import { Link } from 'react-router-dom';

export const Navegador = ({ cartCount }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-2 p-4 text-sg-blue">
        <div>
          <a href="tel:+5154222222">
            <i className="fa fa-phone"></i> +51 (54) 222222
          </a>
        </div>
        <nav className="space-x-4 text-center uppercase">
          <Link to="/catalogo"> Inicio </Link>
          <Link to="/acerca"> Acerca </Link>
          <Link to="/contacto"> Contacto</Link>
          <Link to="/distribuidores"> Distribuidores</Link>

          {/* <Link to="/catalogo"> Catálogo </Link> */}
        </nav>
        <nav className="text-right space-x-4">
          <Link to="/login">
            <i className="fa fa-sign-in"></i> Login
          </Link>
          <Link
            to="/cart"
            className="bg-green-700 hover:bg-green-600 text-white p-2 rounded"
          >
            Carrito <i className="fa fa-shopping-basket"></i> {cartCount}
          </Link>
        </nav>
      </div>

      {/* <div className="relative bg-sg-green mb-3 shadow-lg text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            <div className="flex"></div>
            <nav className="hidden md:flex space-x-5">
              <Link to="/cart">
                <span className="pl-3 py-2 bg-green-900 hover:bg-yellow-700 rounded-full">
                  Carrito
                  <span className="px-3 py-2 ml-1 rounded-full bg-green-600 hover:bg-yellow-500">
                    {cartCount} <i className="fa fa-shopping-basket"></i>
                  </span>
                </span>
              </Link>
              <Link to="/catalogo">
                <i className="fa fa-list"></i> Catálogo
              </Link>
              <Link to="/login">
                <i className="fa fa-sign-in"></i> Login
              </Link>
              <Link to="/register">
                <i className="fa fa-pencil"></i> Registrate
              </Link>
            </nav>
          </div>
        </div>
      </div> */}
    </>
  );
};
