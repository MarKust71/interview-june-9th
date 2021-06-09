import React from 'react';

import { Square } from 'ui/square/Square';

import { PlayBoardContainerProps } from './PlayBoardContainer.types';
import './PlayBoardContainer.css';
import { SquareProps, SquareStatus } from '../../square/Square.types';

const playBoard: SquareProps[][] = [
  [
    { status: SquareStatus.PROXIMITY_3 },
    { status: SquareStatus.TREASURE },
    { status: SquareStatus.PROXIMITY_3 },
    { status: SquareStatus.PROXIMITY_2 },
    { status: SquareStatus.PROXIMITY_1 },
  ],
  [
    { status: SquareStatus.PROXIMITY_2 },
    { status: SquareStatus.PROXIMITY_3 },
    { status: SquareStatus.PROXIMITY_2 },
    { status: SquareStatus.PROXIMITY_3 },
    { status: SquareStatus.PROXIMITY_2 },
  ],
  [
    { status: SquareStatus.PROXIMITY_1 },
    { status: SquareStatus.PROXIMITY_2 },
    { status: SquareStatus.PROXIMITY_3 },
    { status: SquareStatus.TREASURE },
    { status: SquareStatus.PROXIMITY_3 },
  ],
  [
    { status: SquareStatus.PROXIMITY_2 },
    { status: SquareStatus.PROXIMITY_3 },
    { status: SquareStatus.PROXIMITY_2 },
    { status: SquareStatus.PROXIMITY_3 },
    { status: SquareStatus.PROXIMITY_2 },
  ],
  [
    { status: SquareStatus.PROXIMITY_3 },
    { status: SquareStatus.TREASURE },
    { status: SquareStatus.PROXIMITY_3 },
    { status: SquareStatus.PROXIMITY_2 },
    { status: SquareStatus.PROXIMITY_1 },
  ],
];

export const PlayBoardContainer: React.FC<PlayBoardContainerProps> = ({}) => {
  return (
    <div className="playboard-container">
      {playBoard.map((row) => row.map((square) => <Square status={square.status} />))}
    </div>
  );
};
