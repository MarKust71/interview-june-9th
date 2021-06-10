import React from 'react';
import { Provider } from 'react-redux';

import { Root } from 'app/root/Root';

import { gameStore } from './store/gameStore';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <Provider store={gameStore}>
      <Root />
    </Provider>
  );
};
