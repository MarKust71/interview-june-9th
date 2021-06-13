import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { Square } from 'ui/square/Square';
import { GameState } from 'reducers/gameReducer.types';
import {
  flipSquare,
  increaseScore,
  markSquare,
  setGameIsOver,
  toggleGamePending,
  updatePlayerName,
  updateScoreBoard,
} from 'actions/gameActions';
import { countTreasureRevealed } from 'helpers/countTreasureRevealed';
import { addScoreService, readScoresService } from 'api/readScoresService';

import { PlayBoardProps } from './PlayBoard.types';

import './PlayBoard.css';

export const PlayBoard: React.FC<PlayBoardProps> = ({ playBoard = [] }) => {
  const dispatch = useDispatch();

  const [error, setError] = useState(false);

  const gameIsPending = useSelector<GameState, GameState['gameIsPending']>((state) => state.gameIsPending);
  const playerName = useSelector<GameState, GameState['playerName']>((state) => state.playerName);
  const gameScore = useSelector<GameState, GameState['gameScore']>((state) => state.gameScore);
  const gameIsOver = useSelector<GameState, GameState['gameIsOver']>((state) => state.gameIsOver);

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

  const handleClick = (index: number) => {
    if (!gameIsPending) {
      setError(true);
      return;
    }

    dispatch(markSquare(index));
  };

  useEffect(() => {
    // dispatch(initPlayBoard());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (playBoard) {
      const markedCount = playBoard.reduce(
        (accumulator, currentValue) => accumulator + (currentValue.marked ? 1 : 0),
        0,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playBoard]);

  useEffect(() => {
    if (countTreasureRevealed(playBoard) === 3) dispatch(setGameIsOver());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameScore]);

  useEffect(() => {
    if (gameIsOver && playerName && gameScore) {
      // dispatch(addScore({ name: playerName, score: gameScore }));
      const addNewScoreToScoreBoard = async () => {
        await addScoreService({ name: playerName, score: gameScore });
        const newScoreBoard = await readScoresService();
        dispatch(updateScoreBoard(newScoreBoard));
      };
      addNewScoreToScoreBoard();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameIsOver]);

  return (
    <>
      <div className="player-name-box">
        <h1 className="player-name-label">Player:</h1>
        {!gameIsPending ? (
          <Form onSubmit={handleSubmit} className="player-name-input" style={{ backgroundColor: '#fff' }}>
            <Form.Control
              as="input"
              type="text"
              size="lg"
              placeholder={`Enter your name${error ? ' before you start!' : ''}`}
              isInvalid={error}
              onChange={handleChange}
            />
          </Form>
        ) : (
          <h1 className="player-name-input">{playerName}</h1>
        )}
      </div>
      <div className="playboard">
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
    </>
  );
};
