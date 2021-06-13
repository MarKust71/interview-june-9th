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

export const checkMarkedSquaresService = async (data: number[]) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/playboard/check`, data);
    return response.data;
  } catch (error) {
    console.log('checkMarkedSquaresService.error:', error);
  }
};

export const checkPlayerHasPendingGameService = async (name: string) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/playboard/resume`, { name });
    return response.data;
  } catch (error) {
    console.log('checkPlayerHasPendingGameService.error:', error);
  }
};

export const savePlayBoardSnapshotService = async (data: PlayBoardSnapshot) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/playboard/snapshot`, data);
    return response.data;
  } catch (error) {
    console.log('savePlayBoardSnapshotService.error:', error);
  }
};
