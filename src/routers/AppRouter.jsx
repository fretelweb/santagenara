import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CartScreen } from '../pages/CartScreen';
import { CatalogoScreen } from '../pages/CatalogoScreen';
import { HomeScreen } from '../pages/HomeScreen';
import { LoginScreen } from '../pages/LoginScreen';
import { RegisterScreen } from '../pages/RegisterScreen';

export const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={CatalogoScreen} exact />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/catalogo" component={CatalogoScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/cart" component={CartScreen} />
        <Route path="/inicio" component={HomeScreen} />
        <Route path="*" component={HomeScreen} />
      </Switch>
    </div>
  );
};
