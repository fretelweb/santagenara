import React from 'react';

export const CartItem = ({ item }) => {
  console.log(item);
  return (
    <div class="flex flex-auto">
      <img
        src={`images/${item.image}`}
        alt="{item.}"
        style={{ height: 150 }}
      />
      <div>
        <h4 className="mb-2 text-sg-green">{item.producto}</h4>
        <p className="mb-2">{item.uso}</p>
        <button
          type="button"
          className="border border-gray-500 px-4 py-2 bg-sg-blue text-white rounded float-right"
        >
          Quitar
        </button>
      </div>
    </div>
  );
};
