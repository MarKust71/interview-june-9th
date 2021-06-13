import axios from 'axios';

export const readPlayBoardService = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/playboard');
    return response.data;
  } catch (error) {
    console.log('readPlayBoardService.error:', error);
  }
};
