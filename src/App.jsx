import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [initialMove, setInitalMove] = useState(true);

  const [player1, setPlayer1] = useState('Player 1');
  const [player2, setPlayer2] = useState('Player 2');
  const player1Char = 'X';
  const player2Char = 'O';
  const playerBorderRed = 'solid 3px red';
  const playerBorderNone = 'solid 3px transparent';
  const [player1BorderStyle, setPlayer1BorderStyle] = useState(playerBorderRed);
  const [player2BorderStyle, setPlayer2BorderStyle] = useState(playerBorderNone);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const [squareChar, setSquareChar] = useState(player1Char); //Initial Square Character = X
  const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', '']); //Game Board starts empty
  const [squaresCount, setSquaresCount] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [winnerName, setWinnerName] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const openModal = (openBool) => {
    setIsModalOpen(openBool);
  };

  const resetGame = () => {
    setSquares(['', '', '', '', '', '', '', '', '']);
    setSquareChar(player1Char);
    setPlayer1BorderStyle(playerBorderRed);
    setPlayer2BorderStyle(playerBorderNone);
    openModal(false);
    setInitalMove(true);
    setGameOver(false);
    setSquaresCount(0);
  }

  const resetScore = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    resetGame();
  }

  const newGame = () => {
    if (winnerName === player1) {
      setPlayer1Score(player1Score + 1);
    }
    if (winnerName === player2) {
      setPlayer2Score(player2Score + 1);
    }
    resetGame();
    setIsModalOpen(false);
  }

  const charSwitch = () => {
    if (squareChar === player1Char) {
      setSquareChar(player2Char);
      setPlayer1BorderStyle(playerBorderNone);
      setPlayer2BorderStyle(playerBorderRed);
    } else if (squareChar === player2Char) {
      setSquareChar(player1Char);
      setPlayer1BorderStyle(playerBorderRed);
      setPlayer2BorderStyle(playerBorderNone);
    }
  }

  const squareClick = (indexVal) => {
    //Only allows clicks on empty squares. If empty, player's character is set at index value within array.
    if (squares[indexVal] === '') {
      const squaresArray = [...squares];
      squaresArray[indexVal] = squareChar;
      setSquares([...squaresArray]);
      if (initialMove === true) {
        setInitalMove(false);
      }
      if (initialMove === false) {
        setSquaresCount(squaresCount + 1);
      }
    }
  }
  const squareChecker = () => {
    //-----------------------HORZONTAL CHECKERS-------------------------
    if (squares[0] === player1Char && squares[1] === player1Char && squares[2] === player1Char) {
      setWinnerName(player1);
      setGameOver(true);
    } else if (squares[3] === player1Char && squares[4] === player1Char && squares[5] === player1Char) {
      setWinnerName(player1);
      setGameOver(true);
    } else if (squares[6] === player1Char && squares[7] === player1Char && squares[8] === player1Char) {
      setWinnerName(player1);
      setGameOver(true);
    } else  if (squares[0] === player2Char && squares[1] === player2Char && squares[2] === player2Char) {
      setWinnerName(player2);
      setGameOver(true);
    } else if (squares[3] === player2Char && squares[4] === player2Char && squares[5] === player2Char) {
      setWinnerName(player2);
      setGameOver(true);
    } else if (squares[6] === player2Char && squares[7] === player2Char && squares[8] === player2Char) {
      setWinnerName(player2);
      setGameOver(true);
    } //--------------------------VERTICAL CHECKER-------------------------
    else  if (squares[0] === player1Char && squares[3] === player1Char && squares[6] === player1Char) {
      setWinnerName(player1);
      setGameOver(true);
    } else if (squares[1] === player1Char && squares[4] === player1Char && squares[7] === player1Char) {
      setWinnerName(player1);
      setGameOver(true);
    } else if (squares[2] === player1Char && squares[5] === player1Char && squares[8] === player1Char) {
      setWinnerName(player1);
      setGameOver(true);
    } else  if (squares[0] === player2Char && squares[3] === player2Char && squares[6] === player2Char) {
      setWinnerName(player2);
      setGameOver(true);
    } else if (squares[1] === player2Char && squares[4] === player2Char && squares[7] === player2Char) {
      setWinnerName(player2);
      setGameOver(true);
    } else if (squares[2] === player2Char && squares[5] === player2Char && squares[8] === player2Char) {
      setWinnerName(player2);
      setGameOver(true);
    } //---------------------------DIAGONAL CHECKER-------------------
    else if (squares[0] === player1Char && squares[4] === player1Char && squares[8] === player1Char) {
      setWinnerName(player1);
      setGameOver(true);
    } else if (squares[2] === player1Char && squares[4] === player1Char && squares[6] === player1Char) {
      setGameOver(true);
      setWinnerName(player1);
    } else  if (squares[0] === player2Char && squares[4] === player2Char && squares[8] === player2Char) {
      setWinnerName(player2);
      setGameOver(true);
    } else if (squares[2] === player2Char && squares[4] === player2Char && squares[6] === player2Char) {
      setGameOver(true);
      setWinnerName(player2);
    } //-------------------------TIE GAME CHECKER-----------------------
    else if (squaresCount === 9 && gameOver === false) {
      setGameOver(true)
      setWinnerName('Draw!');
    }
  }

  useEffect(() => {
    if (gameOver === true) {
      openModal(true);
    }
  }, [gameOver, squaresCount]);

  useEffect(() => {
    squareChecker();
    if (initialMove === false) {
      charSwitch();
    } else {
      setInitalMove(false);
    }
  }, [squares]);

  useEffect(() => {
    if (isModalOpen === true) {
      setPlayer1BorderStyle(playerBorderNone);
      setPlayer2BorderStyle(playerBorderNone);
    }
    if (initialMove === false && isModalOpen === false) {
      if (winnerName === player1) {
        setPlayer1Score(player1Score + 1);
      }
      if (winnerName === player2) {
        setPlayer2Score(player2Score + 1);
      }
    }

  }, [isModalOpen]);

  useEffect(() => {
    resetScore();
  }, []);

  return (
    <div className="App">
      <div id="app-title">Tic-Tac-Toe</div>
      <div id="score-board">
        <div id="players-box">
          <div id="player-box">
            {player1Score}
            <input
              id="player1-input"
              type="text" value={player1}
              style={{ borderBottom: player1BorderStyle }}
              onChange={(e) => setPlayer1(e.target.value)}
            />
          </div>
          <span>VS</span>
          <div id="player-box">
            {player2Score}
            <input
              id="player2-input"
              type="text" value={player2}
              style={{ borderBottom: player2BorderStyle }}
              onChange={(e) => setPlayer2(e.target.value)}
            />
          </div>
        </div>
        <div id="score-board-button-group">
            <button className="score-board-button" onClick={resetScore}>Reset Score</button>
            <button className="score-board-button" onClick={resetGame}>Reset Game</button>
        </div>

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
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span>{winnerName !== 'Draw!' ? `${winnerName} Wins!` : winnerName}</span>
            <button
              className="closeModal"
              onClick={() => {newGame(); }}
            >
              <span>New Game</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
