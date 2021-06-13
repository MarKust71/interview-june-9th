import { ScoreBoardItem } from '../model';

const scoreBoard: ScoreBoardItem[] = [];

export const db = () => {
  const write = (scoreBoardData: ScoreBoardItem[]): ScoreBoardItem[] => {
    scoreBoard.length = 0;
    scoreBoardData.map((item) => scoreBoard.push(item));
    scoreBoard.sort((a: ScoreBoardItem, b: ScoreBoardItem) => a.score - b.score);
    if (scoreBoard.length > 10) scoreBoard.length = 10;
    return [...scoreBoard];
  };

  const read = (): ScoreBoardItem[] => {
    return [...scoreBoard];
  };

  const add = (scoreBoardDataItem: ScoreBoardItem): ScoreBoardItem[] => {
    if (!scoreBoardDataItem) return [...scoreBoard];

    scoreBoard.push(scoreBoardDataItem);
    scoreBoard.sort((a: ScoreBoardItem, b: ScoreBoardItem) => a.score - b.score);
    if (scoreBoard.length > 10) scoreBoard.length = 10;
    return [...scoreBoard];
  };

  return { write, read, add };
};
