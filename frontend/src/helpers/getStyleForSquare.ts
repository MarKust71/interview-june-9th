import { SquareStatus } from 'ui/square/Square.types';

export const getStyleForSquare = (status: SquareStatus): string => {
  switch (status) {
    case SquareStatus.TREASURE:
      return 'treasure';
    case SquareStatus.PROXIMITY_0:
      return 'proximity-0';
    case SquareStatus.PROXIMITY_1:
      return 'proximity-1';
    case SquareStatus.PROXIMITY_2:
      return 'proximity-2';
    case SquareStatus.PROXIMITY_3:
      return 'proximity-3';
  }
  return '';
};
