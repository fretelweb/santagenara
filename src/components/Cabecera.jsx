import React, { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';
import logo from '../logo.png';
import { Navegador } from './Navegador';

export const Cabecera = () => {
  const estilo = {
    height: 120,
  };

  const { cart } = useContext(CartContext);

  return (
    <>
      <header className="container py-2 mx-auto">
        <div className="p-4 text-center">
          <img src={logo} alt="" style={estilo} className="inline" />
        </div>
      </header>
      <Navegador cartCount={cart.length} />
    </>
  );
};
