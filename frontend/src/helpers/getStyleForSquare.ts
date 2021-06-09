import { SquareStatus } from 'ui/square/Square.types';

export const getStyleForSquare = (status: SquareStatus): string => {
  if (status === SquareStatus.TREASURE) return 'treasure';
  if (status === SquareStatus.PROXIMITY_3) return 'proximity-3';
  if (status === SquareStatus.PROXIMITY_2) return 'proximity-2';
  if (status === SquareStatus.PROXIMITY_1) return 'proximity-1';
  if (status === SquareStatus.PROXIMITY_0) return 'proximity-0';
  return '';
};
