import React from 'react';
import { observer } from 'mobx-react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Board from './Board/Board';
import './game.less';

@observer
export default class Game extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="game-container">
        <ErrorBoundary>
          <Board />
        </ErrorBoundary>
        {/* <ErrorBoundary>
          <GameInfo />
        </ErrorBoundary> */}
      </div>
    );
  }
}
