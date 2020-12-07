import { Component } from 'react';

import Item from './Item';

class ItemList extends Component {
  state = {};

  render() {
    const lista = [];
    for (let index = 0; index < 8; index++) {
      console.log(`Creando${index}`);
      lista.push(<Item key={index} index={index} />);
    }

    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {lista}
      </div>
    );
  }
}

export default ItemList;
