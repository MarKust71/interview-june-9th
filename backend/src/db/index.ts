import { ScoreBoardItem } from '../model/scoreBoard.model';
import { SquareStatus, SquareType } from '../model/playBoard.model';

const scoreBoard: ScoreBoardItem[] = [];
const playBoard: SquareType[] = [];

export const db = () => {
  // ScoreBoard methods
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

  // PlayBoard methods
  const empty = () => {
    playBoard.length = 0;
    for (let row = 0; row <= 4; ++row) {
      for (let column = 0; column <= 4; ++column) {
        playBoard.push({
          status: SquareStatus.PROXIMITY_0,
          row,
          column,
          revealed: false,
          marked: false,
        });
      }
    }
    return [...playBoard];
  };

  const init = () => {
    // empty the playboard, no treasures, proximity 0
    const newPlayBoard = [...empty()];

    // place treasures on the playboard
    const treasureSquares = new Set<number>();
    while (treasureSquares.size < 3) {
      treasureSquares.add(Math.floor(Math.random() * 25));
    }

    treasureSquares.forEach((treasureSquare) => {
      newPlayBoard[treasureSquare] = { ...newPlayBoard[treasureSquare], status: SquareStatus.TREASURE };
    });

    // mark proximity on the playboard
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

    playBoard.length = 0;
    newPlayBoard.forEach((item) => playBoard.push(item));

    return [...playBoard];
  };

  return { write, read, add, empty, init };
};

const updateProximity = (
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
