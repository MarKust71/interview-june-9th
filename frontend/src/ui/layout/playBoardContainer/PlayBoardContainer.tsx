import React, { useEffect, useState } from 'react';

import { Square } from 'ui/square/Square';

import { PlayBoardContainerProps } from './PlayBoardContainer.types';
import './PlayBoardContainer.css';
import { markProximity } from 'helpers/markProximity';
import { SquareType } from 'ui/square/Square.types';

export const PlayBoardContainer: React.FC<PlayBoardContainerProps> = ({}) => {
  const [playBoard, setPlayBoard] = useState<SquareType[]>([]);

  useEffect(() => {
    // console.log(playBoard);
  }, [playBoard]);

  useEffect(() => {
    setPlayBoard(
      markProximity().sort((a, b) => {
        return parseInt(`${a.row}${a.column}`) - parseInt(`${b.row}${b.column}`);
      })
    );
  }, []);

  return (
    <div className="playboard-container">
      {playBoard.map((square) => (
        <Square status={square.status} />
      ))}
    </div>
  );
};
