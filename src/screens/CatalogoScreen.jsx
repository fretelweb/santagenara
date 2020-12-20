import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../reducers/productsActions';
import { Banner } from './components/Banner';
import { Buscador } from './components/Buscador';
import { ItemsList } from './components/ItemsList';

export const CatalogoScreen = () => {
  const { loading, products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Cargando data');
    dispatch(fetchProducts());
  }, []);

  const handlerAddItem = (item) => {};

  return (
    <>
      <div className="container">
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

        <div className="row mb-2">
          <div className="col-6">
            <h4>Presentaciones</h4>
          </div>
          <div className="col-6 text-right">
            <Buscador />
          </div>
        </div>
        <ItemsList items={products} addItem={handlerAddItem} />
        {loading && <i className="fa fa-spinner fa-2x fa-spin"></i>}
      </div>
      <div className="bg-gray-300 p-40"></div>
      <a href="/" className="whatsapp">
        <i className="fa fa-whatsapp"></i>
      </a>
    </>
  );
};
