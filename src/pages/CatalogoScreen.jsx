import React, { useContext } from 'react';

import { Buscador } from '../components/Buscador';
import { ItemsList } from '../components/ItemsList';
import { ProductsContext } from '../contexts/ProductsContext';

export const CatalogoScreen = () => {
  const products = useContext(ProductsContext);
  return (
    <>
      <div className="container mx-auto p-4 block">
        <div className="mb-3">
          <h3 className="page-title"> Algarrobina</h3>

          <p>
            La algarrobina es un producto procedente de la extracción de la
            algarroba mediante proceso de hervido y concentrado por
            evaporación, de color marrón oscuro, brillante, viscoso de
            sabor dulce, contiene azucares, taninos solubles, ciclitoles.y
            aromas naturales. La algarrobina tiene propiedades
            fortificantes y vigorizantes, es altamente energético, contiene
            calcio, hierro y vitaminas del complejo B
          </p>
        </div>

        <div className="flex justify-between pb-10">
          <h2>Presentaciones</h2>
          <Buscador />
        </div>
        <ItemsList items={products} />
      </div>
      <div className="bg-gray-300 p-40"></div>
      <a href="/" className="whatsapp">
        <i className="fa fa-whatsapp"></i>
      </a>
    </>
  );
};
