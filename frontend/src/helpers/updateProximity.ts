import { SquareStatus, SquareType } from '../ui/square/Square.types';

export const updateProximity = (
  playBoard: SquareType[],
  square: SquareType,
  distance: number,
  shiftRow: number,
  shiftColumn: number,
) => {
  if (
    square.row + shiftRow * distance >= 0 &&
    square.row + shiftRow * distance <= 4 &&
    square.column + shiftColumn * distance >= 0 &&
    square.column + shiftColumn * distance <= 4
  ) {
    const index = (square.row + shiftRow * distance) * 5 + square.column + shiftColumn * distance;
    switch (distance + (shiftRow && shiftColumn ? 1 : 0)) {
      case 1:
        if (playBoard[index].status < SquareStatus.PROXIMITY_3 && playBoard[index].status !== SquareStatus.TREASURE)
          playBoard[index] = { ...playBoard[index], status: SquareStatus.PROXIMITY_3 };
        break;
      case 2:
        if (playBoard[index].status < SquareStatus.PROXIMITY_2 && playBoard[index].status !== SquareStatus.TREASURE)
          playBoard[index] = { ...playBoard[index], status: SquareStatus.PROXIMITY_2 };
        break;
      case 3:
        if (playBoard[index].status < SquareStatus.PROXIMITY_1 && playBoard[index].status !== SquareStatus.TREASURE)
          playBoard[index] = { ...playBoard[index], status: SquareStatus.PROXIMITY_1 };
        break;
      default:
        break;
    }
  }
};
