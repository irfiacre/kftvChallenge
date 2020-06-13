import React from 'react';
import { Provider } from 'react-redux';
import AppRoute from './routes/index';
import configureStore from './redux/configureStore';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
};

export default App;
