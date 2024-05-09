import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import { Quote, Twitter } from 'react-bootstrap-icons';
function App() {
  const [player1, setPlayer1] = useState('Player 1');
  const [player2, setPlayer2] = useState('Player 2');
  const player1Char = 'X';
  const player2Char = 'O';
  const playerBorderRed = 'solid 3px red';
  const playerBorderNone = 'none';
  const [player1BorderStyle, setPlayer1BorderStyle] = useState(playerBorderRed);
  const [player2BorderStyle, setPlayer2BorderStyle] = useState(playerBorderNone);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [squareChar, setSquareChar] = useState(player1Char);
  const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', '']);



  const squareClick = (indexVal) => {
    const squaresArray = [...squares];
    squaresArray[indexVal] = squareChar;
    setSquares([...squaresArray]);
    if (squareChar === player1Char) {
      setSquareChar(player2Char);
      setPlayer2BorderStyle(playerBorderNone);
      setPlayer1BorderStyle(playerBorderRed);
    } else {
    setSquareChar(player1Char);
    setPlayer1BorderStyle(playerBorderNone);
    setPlayer2BorderStyle(playerBorderRed);
    }
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
    setSquareChar(player1Char);
    setPlayer1BorderStyle(playerBorderRed);
    setPlayer2BorderStyle(playerBorderNone);
  }

  const resetScore = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    resetGame();
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
          id="player1-input"
          type="text" value={player1}
          style={{ border: player1BorderStyle }}
          onChange={(e) => setPlayer1(e.target.value)}
        />
        vs
        <input
          id="player2-input"
          type="text" value={player2}
          style={{ border: player2BorderStyle }}
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
