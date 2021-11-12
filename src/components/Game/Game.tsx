import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import Board from './Board/Board';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import {
  DRAW_MESSAGE, NEXT_PLAYER, RULES, WINNER_MESSAGE,
} from '../../constants/texts';
import AppStore from '../../store/AppStore';
import { StoreContext } from '../StoreProvider/StoreProvider';

@observer
export default class Game extends Component {
  renderHistory(): ReactNode {
    const {
      xIsNext,
      winner,
      history,
      playerSymbols,
    } = this.context as AppStore;

    const {
      xPlayer,
      oPlayer,
    } = playerSymbols;

    const {
      draws,
      xWins,
      oWins,
    } = history;

    let status;

    if (winner) {
      status = `${WINNER_MESSAGE} ${winner}`;
    } else if (draws) {
      status = DRAW_MESSAGE;
    } else {
      status = `${NEXT_PLAYER}: ${xIsNext ? xPlayer : oPlayer}`;
    }

    return (
      <div className={classNames('history', { black: xIsNext })}>
        <div className="status">{status}</div>
        <div className="stats">
          <div>{`Wins ${xPlayer}: ${xWins}`}</div>
          <div>{`Wins ${oPlayer}: ${oWins}`}</div>
          <div>{`Draws: ${draws}`}</div>
        </div>
      </div>
    );
  }

  render(): ReactNode {
    return (
      <div className="game-container">
        <div className="game-info">
          {RULES}
        </div>
        <ErrorBoundary>
          {this.renderHistory()}
        </ErrorBoundary>
        <ErrorBoundary>
          <Board />
        </ErrorBoundary>
      </div>
    );
  }
}

Game.contextType = StoreContext;
