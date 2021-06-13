import axios from 'axios';

import { ScoreBoardItem } from 'reducers/gameReducer.types';

export const scoresService = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/scoreboard`);
    return response.data;
  } catch (error) {
    console.log('readScoresService.error:', error);
  }
};

export const addScoreService = async (data: ScoreBoardItem) => {
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/addscore`, data);
  } catch (error) {
    console.log('addScoreService.error:', error);
  }
};
