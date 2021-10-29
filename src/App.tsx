import React from 'react';
import Board from './components/Board/Board';

export default class App extends React.Component {
  emptyFn = (): void => {
    throw Error('Not implemented');
  }

  render(): JSX.Element {
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
