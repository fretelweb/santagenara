import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRouter } from './AppRouter';
import { store } from './reducers/store';

// import { store } from './reducers';
export const App = () => {
  return (
    <Provider store={store}>
      <Router basename="/santagenara">
        <AppRouter />
      </Router>
    </Provider>
  );
};
