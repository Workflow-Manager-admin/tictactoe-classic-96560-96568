import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> TicTacToe Classic
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container" style={{ paddingTop: '100px' }}>
          <Game />
        </div>
      </main>
    </div>
  );
}

export default App;