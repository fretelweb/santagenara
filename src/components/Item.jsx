import React, { useContext } from 'react';

import { CartContext } from '../contexts/CartContext';

export const Item = ({ item }) => {
  const { setCart } = useContext(CartContext);

  const handleAdd = () => {
    setCart((cart) => [...cart, item]);
  };

  return (
    <div className="grid md:grid-cols-2 gap-2  overflow-hidden shadow-inner">
      <div className="text-center">
        <img
          src={`images/${item.image}`}
          alt=""
          className="object-cover h-60 mx-auto"
        />
      </div>

      <div className="p-2">
        <h3 className="text-green-800">
          <strong>{item.producto}</strong>
        </h3>
        <p className="text-gray-600 text-sm py-2">{item.uso}</p>

        <button
          type="button"
          className="bg-sg-blue border w-full text-white rounded mt-2 py-1 hover:bg-blue-600"
          onClick={handleAdd}
        >
          Agregar
        </button>
        <button type="button" className="w-full p-3 mt-2 border-gray-200">
          Información
        </button>
      </div>
    </div>
  );
};
