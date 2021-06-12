import React from 'react';
import { useSelector } from 'react-redux';

import { GameState } from 'reducers/gameReducer.types';
import { PlayBoard } from 'app/playBoard/PlayBoard';
import { ScoreBoard } from 'app/scoreBoard/ScoreBoard';

import { PlayBoardContainerProps } from './PlayBoardContainer.types';

import './PlayBoardContainer.css';

export const PlayBoardContainer: React.FC<PlayBoardContainerProps> = ({}) => {
  const gameIsOver = useSelector<GameState, GameState['gameIsOver']>((state) => state.gameIsOver);

  return (
    <>
      <div className={`playboard-container ${gameIsOver ? 'game-over' : ''}`}>
        <PlayBoard />
      </div>
      <div className={`playboard-container game-over-delay ${gameIsOver ? '' : 'game-over'}`}>
        <ScoreBoard />
      </div>
    </>
  );
};
