import axios from 'axios';
import { PlayBoardSnapshot } from './scoresService.types';

export const playBoardService = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/playboard`);
    return response.data;
  } catch (error) {
    console.log('readPlayBoardService.error:', error);
  }
};

export const checkMarkedSquaresService = async (data: PlayBoardSnapshot) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/playboard`, data);
    return response.data;
  } catch (error) {
    console.log('checkMarkedSquaresService.error:', error);
  }
};
