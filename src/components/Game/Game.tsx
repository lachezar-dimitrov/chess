import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import Board from './Board/Board';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import History from './History/History';
import GameInfo from './GameInfo/GameInfo';

@observer
export default class Game extends Component {
  render(): ReactNode {
    return (
      <div className="game-container">
        <ErrorBoundary>
          <GameInfo />
        </ErrorBoundary>
        <ErrorBoundary>
          <History />
        </ErrorBoundary>
        <ErrorBoundary>
          <Board />
        </ErrorBoundary>
      </div>
    );
  }
}
