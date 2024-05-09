import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { Quote, Twitter } from 'react-bootstrap-icons';
function App() {
  const [player1, setPlayer1] = useState('Player 1');
  const [player2, setPlayer2] = useState('Player 2');
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [squareChar, setSquareChar] = useState('X');
  const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', '']);

  const squareClick = (indexVal) => {
    setSquares({...squares, [indexVal]: squareChar});
    setSquareChar('O')
  }

  const horizontalChecker = () => {

  }

  const verticalChecker = () => {

  }

  const diagonalChecker = () => {

  }

  const scoreChecker = () => {

  }

  const resetGame = () => {
    setSquares(['', '', '', '', '', '', '', '', '']);
  }

  const resetScore = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
  }

  useEffect(() => {

  })

  return (
    <div className="App">
      <div id="app-title">Tic-Tac-Toe</div>
      <div
        id="score-board"
      >
        {player1Score}
        <div id="score-board-group">
          <span>Scoreboard</span>
          <button id="reset-button" onClick={resetScore}>Reset Score</button>
        </div>
        {player2Score}
      </div>
      <div id="players-box">
        <input
          className="players-input"
          type="text" value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
        />
        vs
        <input
          className="players-input"
          type="text" value={player2}
          onChange={(e) => setPlayer1(e.target.value)}
        />
      </div>
      <div id="game-board">

        {squares.map((square, index) => (
          <div
            className="square"
            key={index}
            onClick={() => {squareClick(index)}}
          >
            {squares[index]}
          </div>))}
      </div>
      <button id="reset-button" onClick={resetGame}>Reset Game</button>
    </div>
  );
}

export default App;
