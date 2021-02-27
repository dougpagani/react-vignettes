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
// - add responsive design for tic-tac-toe, 3 sizes of squares

import './tic-tac-toe-from-react-tutorial.css';
import React, { useState } from 'react'

function Square({mark, onClick}) {
  const RED = "#633"
  const BLUE = "#366"
  const GRAY = "#555"
  let color = GRAY
  if (mark === 'X') color = RED
  if (mark === 'O') color = BLUE
  return (
    <button style={{"background-color": color}} className="square" onClick={onClick}>
      {mark}
    </button>
  );
}

function Board() {
  const [ marks, setMarks ] = useState(Array(9).fill(null))
  const [ XIsNext, setXToBeNext ] = useState(true)

  function renderSquare(i) {
    function setMark() {
      let newMarks = marks.slice()
      newMarks[i] = XIsNext ? 'X' : 'O'
      setXToBeNext(!XIsNext)
      setMarks(newMarks)
    }
    return <Square mark={marks[i]} onClick={setMark}/>;
  }


  const status = `Next player: ${XIsNext ? 'X' : 'O'}`;

  return (
    <div className="board">
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
