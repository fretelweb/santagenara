import React from 'react';

import { Item } from './Item';

export const ItemsList = ({ items }) => {
  const lista = items.map((prod, idx) => (
    <Item key={prod.id} item={prod} />
  ));

  return (
    <div className="grid grid-cols-2 md:grid-cols-3  gap-4">{lista}</div>
  );
};

ItemsList.propType = {};
