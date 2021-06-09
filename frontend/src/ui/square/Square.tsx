import React from 'react';

import { SquareProps, SquareStatus } from './Square.types';

import './Square.css';
import { getStyleForSquare } from 'helpers/getStyleForSquare';

export const Square: React.FC<SquareProps> = ({ status }) => {
  return <div className={`square ${getStyleForSquare(status)}`}>{status === SquareStatus.TREASURE ? 'T' : status}</div>;
};
