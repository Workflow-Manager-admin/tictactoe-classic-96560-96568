import React from 'react';

// PUBLIC_INTERFACE
/**
 * Square component for rendering a single square in the TicTacToe grid
 * 
 * @param {object} props - Component props
 * @param {string|null} props.value - The value to display in the square ('X', 'O', or null)
 * @param {function} props.onClick - Function to call when the square is clicked
 * @returns {JSX.Element} - A button representing a square on the board
 */
function Square({ value, onClick }) {
  return (
    <button 
      className="square" 
      onClick={onClick}
      style={{
        fontWeight: 'bold',
        color: value === 'X' ? '#4F95FF' : '#FF6B6B',
      }}
    >
      {value}
    </button>
  );
}

export default Square;
