export type SquareProps = {
  status?: SquareStatus;
};

export enum SquareStatus {
  TREASURE = -1,
  PROXIMITY_0 = 0,
  PROXIMITY_1 = 1,
  PROXIMITY_2 = 2,
  PROXIMITY_3 = 3,
}
