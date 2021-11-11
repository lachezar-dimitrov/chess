import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import {
  DRAW_MESSAGE,
  NEXT_PLAYER, WINNER_MESSAGE,
} from '../../../constants/texts';
import AppStore from '../../../store/AppStore';
import { StoreContext } from '../../StoreProvider/StoreProvider';

@observer
export default class History extends Component {
  render(): ReactNode {
    const {
      xIsNext,
      winner,
      history,
      playerSymbols,
    } = this.context as AppStore;

    const { xPlayer, oPlayer } = playerSymbols;

    let status;
    const { draws, xWins, oWins } = history;

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
}

History.contextType = StoreContext;
