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
import React from 'react'

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
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
}

// ========================================

// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

export default Game
