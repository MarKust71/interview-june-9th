import React from 'react';

import { getStyleForSquare } from 'helpers/getStyleForSquare';

import { SquareProps, SquareStatus } from './Square.types';
import './Square.css';

export const Square: React.FC<SquareProps> = ({ status, onClick = () => null, revealed }) => {
  return (
    <div className={`card-grid-box no-flip`}>
      <div
        className={`square card-box ${revealed ? 'no-flip' : 'flip'} ${getStyleForSquare(status)}`}
        onClick={() => onClick(0)}
      >
        {status === SquareStatus.TREASURE ? 'T' : status}
      </div>
      <div className={`card-box-back ${revealed ? 'flip' : 'no-flip'}`} onClick={() => onClick(0)} />
    </div>
  );
};
