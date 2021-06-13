import React from 'react';

import { GameState } from 'reducers/gameReducer.types';

import { ScoreBoardProps } from './ScoreBoard.types';
import { useSelector } from 'react-redux';

import './ScoreBoard.css';

export const ScoreBoard: React.FC<ScoreBoardProps> = ({}) => {
  const scoreBoard = useSelector<GameState, GameState['scoreBoard']>((state) => state.scoreBoard);

  return (
    <>
      <h1 className="scoreboard-header">Scoreboard</h1>
      <ol>
        {scoreBoard?.map((item) => (
          <li>
            <div className="scoreboard-li">
              <div>{item.name}</div>
              <div>{item.score}</div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};
