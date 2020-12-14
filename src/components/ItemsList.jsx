import React, { useEffect, useState } from 'react';

import Item from './Item';

function ItemsList(props) {
  const {} = props;

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
      .then((data) => data.json())
      .then((meals) => setMeals(meals.meals));
  }, []);

  const lista = meals.map((meal) => <Item item={meal} />);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {lista}
    </div>
  );
}

export default ItemsList;
