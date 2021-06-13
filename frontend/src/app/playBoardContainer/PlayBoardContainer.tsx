import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GameState } from 'reducers/gameReducer.types';
import { PlayBoard } from 'app/playBoard/PlayBoard';
import { ScoreBoard } from 'app/scoreBoard/ScoreBoard';
import { scoresService } from 'api/scoresService';
import { initPlayBoard, updateScoreBoard } from 'actions/gameActions';
import { playBoardService } from 'api/playBoardService';

import './PlayBoardContainer.css';

export const PlayBoardContainer = (): JSX.Element => {
  const dispatch = useDispatch();

  const gameIsOver = useSelector<GameState, GameState['gameIsOver']>((state) => state.gameIsOver);
  const scoreBoard = useSelector<GameState, GameState['scoreBoard']>((state) => state.scoreBoard);
  const playBoard = useSelector<GameState, GameState['playBoard']>((state) => state.playBoard);

  useEffect(() => {
    const reloadScoreBoard = async () => {
      const newScoreBoard = await scoresService();
      dispatch(updateScoreBoard(newScoreBoard));
    };
    reloadScoreBoard();

    const reloadPlayBoard = async () => {
      const newPlayBoard = await playBoardService();
      dispatch(initPlayBoard([...newPlayBoard]));
    };
    reloadPlayBoard();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={`playboard-container ${gameIsOver ? 'game-over' : ''}`}>
        <PlayBoard playBoard={playBoard} />
      </div>
      <div className={`playboard-container game-over-delay ${gameIsOver ? '' : 'game-over'}`}>
        <ScoreBoard scoreBoard={scoreBoard} />
      </div>
    </>
  );
};
