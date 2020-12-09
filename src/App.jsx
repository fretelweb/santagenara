import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navegador from './components/Navegador';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

class App extends Component {
  render() {
    return (
      <Router basename="/santagenara">
        <Navegador />
        <div className="container px-4">
          <Switch>
            <Route path="/register" component={RegisterPage} />
            {/* <Route path="/catalogo" component={CatalogoPage} /> */}
            <Route path="/login" component={LoginPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
