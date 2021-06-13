import React from 'react';

import { ScoreBoardProps } from './ScoreBoard.types';

import './ScoreBoard.css';

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ scoreBoard = [] }) => {
  return (
    <div className="scoreboard-container">
      <h1 className="scoreboard-header">Scoreboard</h1>
      <hr />
      <ol>
        {scoreBoard.map((item) => (
          <li>
            <div className="scoreboard-li">
              <div>{item.name}</div>
              <div>{item.score}</div>
            </div>
          </li>
        ))}
      </ol>
      <hr />
      <h6>Reload this page to play again</h6>
    </div>
  );
};
