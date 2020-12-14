import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Banner from './components/Banner';
import Cabecera from './components/Cabecera';
import Navegador from './components/Navegador';
import CartPage from './pages/CartPage';
import CatalogoPage from './pages/CatalogoPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

class App extends Component {
  render() {
    return (
      <Router basename="/santagenara">
        <Cabecera />
        <Navegador />
        {/* <Banner /> */}
        <div className="container mx-auto">
          <Switch>
            <Route path="/" component={CatalogoPage} exact />
            <Route path="/register" component={RegisterPage} />
            <Route path="/catalogo" component={CatalogoPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/inicio" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
