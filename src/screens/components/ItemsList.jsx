import React from 'react';

import { Item } from './Item';

export const ItemsList = ({ items }) => {
  const lista = items.map((prod, idx) => (
    <Item key={prod.id} item={prod} />
  ));

  return <div className="row">{lista}</div>;
};

ItemsList.propType = {};
