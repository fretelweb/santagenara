import React from 'react';
import { useParams } from 'react-router-dom';

export const ProductoScreen = () => {
  const { id } = useParams();

  return (
    <div>
      <img
        src="//via.placeholder.com/1024x400"
        className="img-fluid"
        width="100%"
        alt=""
      />

      <div className="container">
        <div className="row">
          <div className="col-3">Galeria {id}</div>
          <div className="col-9">
            <h3>Aqui se lista el producto</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
