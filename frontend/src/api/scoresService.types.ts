import { SquareType } from 'ui/square/Square.types';

export type PlayBoardSnapshot = {
  marked: number[];
  name: string;
  score: number;
  playBoard: SquareType[];
};
