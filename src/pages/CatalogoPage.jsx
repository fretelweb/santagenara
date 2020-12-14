import { Component, Fragment } from 'react';
import React from 'react';

import Buscador from '../components/Buscador';
import ItemsList from '../components/ItemsList';

function CatalogoPage(props) {
  return (
    <Fragment>
      <div className="grid grid-cols-2"></div>
      <div className="container mx-auto p-4 block">
        <div className="flex justify-between pb-10">
          <h2 className="page-title">Catálogo de Productor</h2>
          <Buscador />
        </div>
        <ItemsList />
      </div>
      <div className="bg-gray-300 p-40"></div>
      <a href="/" className="whatsapp">
        <i className="fa fa-whatsapp"></i>
      </a>
    </Fragment>
  );
}
export default CatalogoPage;
