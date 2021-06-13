import { ScoreBoardItem } from '../model';

const scoreBoard: ScoreBoardItem[] = [];

export const db = {
  write: (scoreBoardData: ScoreBoardItem[]): ScoreBoardItem[] => {
    scoreBoard.length = 0;
    scoreBoardData.map((item) => scoreBoard.push(item));
    return [...scoreBoard];
  },

  read: (): ScoreBoardItem[] => {
    return [...scoreBoard];
  },

  add: (scoreBoardDataItem: ScoreBoardItem): ScoreBoardItem[] => {
    scoreBoard.push(scoreBoardDataItem);
    return [...scoreBoard];
  },
};
