import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GameState } from 'reducers/gameReducer.types';
import { PlayBoard } from 'app/playBoard/PlayBoard';
import { ScoreBoard } from 'app/scoreBoard/ScoreBoard';

import { PlayBoardContainerProps } from './PlayBoardContainer.types';

import './PlayBoardContainer.css';
import { readScoresService } from 'api/services';
import { updateScoreBoard } from 'actions/gameActions';

export const PlayBoardContainer: React.FC<PlayBoardContainerProps> = ({}) => {
  const dispatch = useDispatch();

  const gameIsOver = useSelector<GameState, GameState['gameIsOver']>((state) => state.gameIsOver);
  const scoreBoard = useSelector<GameState, GameState['scoreBoard']>((state) => state.scoreBoard);

  useEffect(() => {
    const reloadScoreBoard = async () => {
      const newScoreBoard = await readScoresService();
      dispatch(updateScoreBoard(newScoreBoard));
    };
    reloadScoreBoard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={`playboard-container ${gameIsOver ? 'game-over' : ''}`}>
        <PlayBoard />
      </div>
      <div className={`playboard-container game-over-delay ${gameIsOver ? '' : 'game-over'}`}>
        <ScoreBoard scoreBoard={scoreBoard} />
      </div>
    </>
  );
};
