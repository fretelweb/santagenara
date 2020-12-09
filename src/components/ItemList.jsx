import { Component } from 'react';

import Item from './Item';

class ItemList extends Component {
  state = { meals: [] };

  constructor(props) {
    super(props);
    this.getMeals();
  }

  getMeals() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
      .then((data) => data.json())
      .then((meals) => this.setState({ meals: meals.meals }));
  }

  render() {
    const lista = [];
    for (let index = 0; index < this.state.meals.length; index++) {
      console.log(`Creando${index}`);
      lista.push(
        <Item key={index} index={index} item={this.state.meals[index]} />
      );
    }

    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {lista}
      </div>
    );
  }
}

export default ItemList;
