import React, { useState } from 'react';
import Board from './Board';
import './Game.css';

// Helper function to determine the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] };
    }
  }
  
  // Check if the board is full (a draw)
  if (squares.every(square => square !== null)) {
    return { winner: 'draw', line: [] };
  }
  
  return null;
}

// PUBLIC_INTERFACE
/**
 * Game component - Main container for TicTacToe Classic game
 * Handles game state management, turn handling, and victory conditions
 * 
 * @returns {JSX.Element} - Complete TicTacToe game interface
 */
function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isXNext, setIsXNext] = useState(true);
  
  const current = history[currentMove];
  const winnerInfo = calculateWinner(current);
  const winner = winnerInfo?.winner;
  const winningLine = winnerInfo?.line || [];
  
  // Handle a square click - updates game state
  const handleClick = (i) => {
    const historyCopy = history.slice(0, currentMove + 1);
    const currentSquares = [...historyCopy[historyCopy.length - 1]];
    
    // Return early if there's a winner or the square is already filled
    if (winner || currentSquares[i]) {
      return;
    }
    
    // Update the board with the current player's mark
    currentSquares[i] = isXNext ? 'X' : 'O';
    
    // Update game state
    setHistory([...historyCopy, currentSquares]);
    setCurrentMove(historyCopy.length);
    setIsXNext(!isXNext);
  };
  
  // Restart the game
  const restartGame = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setIsXNext(true);
  };
  
  // Get the game status message
  let status;
  if (winner === 'draw') {
    status = "It's a draw!";
  } else if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${isXNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game">
      <div className="game-info">
        <h1>TicTacToe Classic</h1>
        <div className={`status ${winner ? 'winner-status' : ''}`}>{status}</div>
      </div>
      
      <div className="game-board">
        <Board 
          squares={current} 
          onClick={handleClick}
        />
      </div>
      
      <div className="game-actions">
        <button 
          className="btn restart-btn" 
          onClick={restartGame}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}

export default Game;
