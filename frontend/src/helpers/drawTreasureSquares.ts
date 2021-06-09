import { SquareStatus } from 'ui/square/Square.types';
import { emptyPlayBoard } from './emptyPlayBoard';

export const drawTreasureSquares = () => {
  const newPlayBoard = [...emptyPlayBoard()];

  const treasureSquares = new Set<number>();
  while (treasureSquares.size < 3) {
    treasureSquares.add(Math.floor(Math.random() * 25));
  }

  treasureSquares.forEach((treasureSquare) => {
    newPlayBoard[treasureSquare] = { ...newPlayBoard[treasureSquare], status: SquareStatus.TREASURE };
  });

  return newPlayBoard;
};
