import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';

import { Square } from 'ui/square/Square';
import {
  flipSquare,
  increaseScore,
  initPlayBoard,
  markSquare,
  toggleGamePending,
  updatePlayerName,
} from 'actions/gameActions';
import { GameState } from 'reducers/gameReducer.types';

import { PlayBoardContainerProps } from './PlayBoardContainer.types';
import './PlayBoardContainer.css';

export const PlayBoardContainer: React.FC<PlayBoardContainerProps> = ({}) => {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const playBoard = useSelector<GameState, GameState['playBoard']>((state) => state.playBoard);
  const gameScore = useSelector<GameState, GameState['gameScore']>((state) => state.gameScore);
  const playerName = useSelector<GameState, GameState['playerName']>((state) => state.playerName);
  const gameIsPending = useSelector<GameState, GameState['gameIsPending']>((state) => state.gameIsPending);

  useEffect(() => {
    dispatch(initPlayBoard());
  }, []);

  useEffect(() => {
    if (playBoard) {
      const markedCount = playBoard.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.marked ? 1 : 0),
        0
      );
      if (markedCount === 3) {
        playBoard.forEach((square, index) => {
          if (square.marked) {
            dispatch(markSquare(index));
            dispatch(flipSquare(index));
          }
        });
        dispatch(increaseScore());
      }
    }
  }, [playBoard]);

  const handleClick = (index: number) => {
    if (!gameIsPending) {
      setError(true);
      return;
    }

    dispatch(markSquare(index));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!playerName) {
      setError(true);
      return;
    }

    dispatch(toggleGamePending());
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    dispatch(updatePlayerName(event.target.value));
    setError(false);
  };

  return (
    <div>
      <div className="player-name-box">
        <h1 className="player-name-label">Player:</h1>
        {!gameIsPending ? (
          <Form onSubmit={handleSubmit} className="player-name-input" style={{ backgroundColor: '#fff' }}>
            <Form.Control
              as="input"
              type="text"
              size="lg"
              placeholder="Enter your name"
              isInvalid={error}
              onChange={handleChange}
            />
          </Form>
        ) : (
          <h1 className="player-name-input">{playerName}</h1>
        )}
      </div>
      <div className="playboard-container">
        {playBoard?.map((square, index) => (
          <Square
            status={square.status}
            onClick={() => handleClick(index)}
            revealed={square.revealed}
            marked={square.marked}
          />
        ))}
      </div>
      <div className="player-name-box" style={{ marginBottom: 0, marginTop: 8 }}>
        <h2 className="player-name-label" style={{ whiteSpace: 'nowrap' }}>
          Your current score:
        </h2>
        <h2 className="player-name-input" style={{ textAlign: 'center' }}>
          {gameScore}
        </h2>
      </div>
    </div>
  );
};
