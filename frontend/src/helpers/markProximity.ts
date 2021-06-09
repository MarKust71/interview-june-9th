import { SquareStatus, SquareType } from 'ui/square/Square.types';

import { drawTreasureSquares } from './drawTreasureSquares';

export const markProximity = () => {
  const newPlayBoard = [...drawTreasureSquares()];

  newPlayBoard.forEach((square) => {
    if (square.status === SquareStatus.TREASURE) {
      for (let distance = 1; distance < 4; ++distance) {
        // up
        updatePlayBoard(newPlayBoard, square, distance, -1, 0);
        // down
        updatePlayBoard(newPlayBoard, square, distance, 1, 0);
        // left
        updatePlayBoard(newPlayBoard, square, distance, 0, -1);
        // right
        updatePlayBoard(newPlayBoard, square, distance, 0, 1);
        // up-left
        updatePlayBoard(newPlayBoard, square, distance, -1, -1);
        // up-right
        updatePlayBoard(newPlayBoard, square, distance, -1, 1);
        // down-left
        updatePlayBoard(newPlayBoard, square, distance, 1, -1);
        // down-right
        updatePlayBoard(newPlayBoard, square, distance, 1, 1);
      }
    }
  });

  return newPlayBoard;
};

const updatePlayBoard = (
  playBoard: SquareType[],
  square: SquareType,
  distance: number,
  shiftRow: number,
  shiftColumn: number
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
