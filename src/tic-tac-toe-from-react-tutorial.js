// React DOCS: https://reactjs.org/tutorial/tutorial.html#setup-option-1-write-code-in-the-browser
// FFF: https://www.youtube.com/watch?v=G-aO5hzo1aw&t=1432s
// Tasks:
// - complete the tutorial up until the point in the video
// - add time-travel
// - refactor time-travel as separate concern-area
// - Change browser title (wrong at first w/ useEffect, then Layout) as: "player X's move!"
// - add a game-win functionality
// - add some svg styling (purple & blue or something)
// - add win-detection rules
// - add a reset-game button
// - see if an array changing re-renders all
// - have a time-travel state which is a "push-to-array"
// - build chess, w/ svg & everything
// - add a useUILock() -- [ bool, lockUI, unlockUI ]
// - build a maze game, add depth-first & breadth-first search

import './tic-tac-toe-from-react-tutorial.css';
import React, { useState } from 'react'

function Square({init}) {
  const [ mark, setMark ] = useState(init)
  return (
    <button className="square" onClick={() => { setMark('x') }}>
      {mark}
    </button>
  );
}

function Board() {
  function renderSquare(i) {
    return <Square init={i}/>;
  }

  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

export default Game
