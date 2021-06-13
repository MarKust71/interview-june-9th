import { SquareStatus } from 'ui/square/Square.types';

import { drawTreasureSquares } from './drawTreasureSquares';
import { updateProximity } from './updateProximity';

export const markProximity = () => {
  const newPlayBoard = [...drawTreasureSquares()];

  newPlayBoard.forEach((square) => {
    if (square.status === SquareStatus.TREASURE) {
      for (let distance = 1; distance < 4; ++distance) {
        // up
        updateProximity(newPlayBoard, square, distance, -1, 0);
        // down
        updateProximity(newPlayBoard, square, distance, 1, 0);
        // left
        updateProximity(newPlayBoard, square, distance, 0, -1);
        // right
        updateProximity(newPlayBoard, square, distance, 0, 1);
        // up-left
        updateProximity(newPlayBoard, square, distance, -1, -1);
        // up-right
        updateProximity(newPlayBoard, square, distance, -1, 1);
        // down-left
        updateProximity(newPlayBoard, square, distance, 1, -1);
        // down-right
        updateProximity(newPlayBoard, square, distance, 1, 1);
      }
    }
  });

  return newPlayBoard;
};
