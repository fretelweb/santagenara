import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import Buscador from './components/Buscador';
import ItemList from './components/ItemList';
import Navegador from './components/Navegador';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navegador />
    <div class="grid grid-cols-2"></div>
    <div className="container mx-auto p-4 block">
      <h2 className="page-title">Catalogo de Productos</h2>
      <Buscador />
      <ItemList />
    </div>
    <div className="bg-gray-300 p-40"></div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
