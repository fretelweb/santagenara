import React from 'react';
import { useSelector } from 'react-redux';

import logo from '../../logo.png';
import { Navegador } from './Navegador';

export const Cabecera = () => {
  // const { length } = useSelector((state) => state.cart.length);
  const estilo = {
    height: 120,
  };

  return (
    <>
      <header className="container">
        <div className="text-center p-4">
          <img src={logo} alt="" style={estilo} className="inline" />
        </div>
        <div className="py-2">
          <Navegador cartCount={0} />
        </div>
      </header>
    </>
  );
};
