import { createStore } from '@reduxjs/toolkit';

import { gameReducer } from 'reducers/gameReducer';

export const gameStore = createStore(gameReducer);
