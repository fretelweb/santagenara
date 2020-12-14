import React, { useState } from 'react';

import imagen from '../images/algarrobina.png';

function Item({ item, onAgregar }) {
  const [cantidad, setCantidad] = useState(1);

  const handleAdd = () => {
    setCantidad(cantidad + 1);
  };

  const handleRest = () => {
    setCantidad(cantidad - 1);
  };

  return (
    <div className="grid md:grid-cols-2 gap-2 border-2 border-green-900 rounded-lg overflow-hidden shadow-inner">
      <div className="text-center">
        <img src={imagen} alt="" className="object-cover h-60 mx-auto" />
      </div>
      <div className="p-2">
        <h3 className="text-green-800">{item.strMeal}</h3>
        <p className="text-gray-600 text-sm py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          illum ipsam optio aspernatur ratione.
        </p>
        <div className="flex flex-auto border border-gray-400 rounded-l rounded-r">
          <button
            className="bg-gray-400 px-3 text-white"
            onClick={handleRest}
          >
            -
          </button>
          <input
            type="number"
            className="w-full border text-center px-2 py-1"
            value={cantidad}
          />
          <button
            className="bg-gray-400 px-3 text-white"
            onClick={handleAdd}
          >
            +
          </button>
        </div>
        <button
          type="button"
          className="bg-sg-blue border w-full text-white rounded mt-2 py-1 hover:bg-blue-600"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

export default Item;
