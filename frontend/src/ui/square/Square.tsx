import React from 'react';

import { SquareProps, SquareStatus } from './Square.types';

import './Square.css';
import { getStyleForSquare } from 'helpers/getStyleForSquare';

export const Square: React.FC<SquareProps> = ({ status = SquareStatus.PROXIMITY_0 }) => {
  return <div className={`square ${getStyleForSquare(status)}`}>{status === -1 ? 'T' : status}</div>;
};
