import { SquareStatus, SquareType } from '../ui/square/Square.types';

export type CountTreasureRevealedParams = SquareType[] | undefined;

export const countTreasureRevealed = (playBoard: CountTreasureRevealedParams): number => {
  const result = playBoard?.reduce((accumulator, currentValue) => {
    const addValue = currentValue.revealed && currentValue.status === SquareStatus.TREASURE ? 1 : 0;
    return accumulator + addValue;
  }, 0);

  return result ? result : 0;
};
