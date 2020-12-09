import { Component } from 'react';

import Item from './Item';

class ItemsList extends Component {
  constructor(props) {
    super(props);
  }

  async getMeals() {
    const meals = await fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
    )
      .then((data) => data.json())
      .then((meals) => meals.meals);
    return meals;
  }

  render() {
    const lista = this.getMeals();
    for (let index = 0; index < lista.length; index++) {
      lista.push(<Item key={index} index={index} item={lista[index]} />);
    }

    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {lista}
      </div>
    );
  }
}

export default ItemsList;
