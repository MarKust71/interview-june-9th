export type SquareProps = {
  status: SquareStatus;
  onClick?: (index: number) => void;
  revealed: boolean;
  marked: boolean;
};

export type SquareType = SquareProps & {
  row: number;
  column: number;
};

export enum SquareStatus {
  TREASURE = -1,
  PROXIMITY_0 = 0,
  PROXIMITY_1 = 1,
  PROXIMITY_2 = 2,
  PROXIMITY_3 = 3,
}

export type CheckSquare = {
  index: number;
  status: SquareStatus;
};

export type PlayBoardSnapshot = {
  marked: number[];
  name: string;
  score: number;
  playBoard: SquareType[];
};
