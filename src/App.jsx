import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Cabecera } from './components/Cabecera';
import { CartContext } from './contexts/CartContext';
import { ProductsContext } from './contexts/ProductsContext';
import { items } from './data/productos';
import { AppRouter } from './routers/AppRouter';

export const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('Cargando data');
    setProducts([...items]);
    // fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
    //   .then((data) => data.json())
    //   .then((data) => data.meals)
    //   .then((data) => setProducts([...data]));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      <CartContext.Provider value={{ cart, setCart }}>
        <Router basename="/santagenara">
          <Cabecera />
          <div className="container mx-auto">
            <AppRouter />
          </div>
        </Router>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
};
