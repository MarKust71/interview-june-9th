import axios from 'axios';

import { ScoreBoardItem } from '../reducers/gameReducer.types';

export const readScoresService = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/scoreboard');
    return response.data;
  } catch (error) {
    console.log('readScoresService.error:', error);
  }
};

export const addScoreService = async (data: ScoreBoardItem) => {
  try {
    await axios.post('http://localhost:8080/api/addscore', data);
  } catch (error) {
    console.log('addScoreService.error:', error);
  }
};
