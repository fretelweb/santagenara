import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AcercaScreen } from './screens/AcercaScreen';
import { CartScreen } from './screens/CartScreen';
import { CatalogoScreen } from './screens/CatalogoScreen';
import { Banner } from './screens/components/Banner';
import { Cabecera } from './screens/components/Cabecera';
import { Footer } from './screens/components/Footer';
import { DistribuidoresScreen } from './screens/DistribuidoresScreen';
import { HomeScreen } from './screens/HomeScreen';
import { LoginScreen } from './screens/LoginScreen';
import { ProductoScreen } from './screens/ProductoScreen';
import { RegisterScreen } from './screens/RegisterScreen';

export const AppRouter = () => {
  return (
    <>
      <Cabecera />
      <Banner />
      <Switch>
        <Route path="/" component={CatalogoScreen} exact />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/catalogo" component={CatalogoScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/cart" component={CartScreen} />
        <Route path="/inicio" component={HomeScreen} />
        <Route path="/acerca" component={AcercaScreen} />
        <Route path="/distribuidores" component={DistribuidoresScreen} />
        <Route path="/producto/:id" component={ProductoScreen} exact />
        {/* <Route path="*" component={HomeScreen} /> */}
      </Switch>
      <Footer />
    </>
  );
};
