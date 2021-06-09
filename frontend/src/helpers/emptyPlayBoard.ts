import { SquareStatus, SquareType } from 'ui/square/Square.types';

export const emptyPlayBoard = (): SquareType[] => {
  const emptyPlayBoard: SquareType[] = [];
  for (let row = 0; row <= 4; ++row) {
    for (let column = 0; column <= 4; ++column) {
      emptyPlayBoard.push({
        status: SquareStatus.PROXIMITY_0,
        row,
        column,
      });
    }
  }
  return emptyPlayBoard;
};
