import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Square } from 'ui/square/Square';
import { flipSquare, initPlayBoard } from 'actions/gameActions';
import { GameState } from 'reducers/gameReducer.types';

import { PlayBoardContainerProps } from './PlayBoardContainer.types';
import './PlayBoardContainer.css';

export const PlayBoardContainer: React.FC<PlayBoardContainerProps> = ({}) => {
  const dispatch = useDispatch();

  const playBoard = useSelector<GameState, GameState['playBoard']>((state) => state.playBoard);

  useEffect(() => {
    dispatch(initPlayBoard());
  }, []);

  const handleClick = (index: number) => {
    dispatch(flipSquare(index));
  };

  return (
    <div className="playboard-container">
      {playBoard?.map((square, index) => (
        <Square status={square.status} onClick={() => handleClick(index)} revealed={square.revealed} />
      ))}
    </div>
  );
};
