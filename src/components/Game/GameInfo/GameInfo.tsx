import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import {
  DRAW_MESSAGE,
  NEXT_PLAYER, O, WINNER_MESSAGE, X,
} from '../../../constants/texts';
import { IAppStore } from '../../../interfaces/AppStore';
import { StoreContext } from '../../StoreProvider/StoreProvider';
import History from './History/History';

@observer
export default class GameInfo extends Component {
  render(): ReactNode {
    const {
      xIsNext,
      winner,
      history,
    } = this.context as IAppStore;

    let status;
    const { draws, xWins, oWins } = history;

    if (winner) {
      status = `${WINNER_MESSAGE} ${winner}`;
    } else if (draws) {
      status = DRAW_MESSAGE;
    } else {
      status = `${NEXT_PLAYER}: ${xIsNext ? X : O}`;
    }

    return (
      <div className={classNames('game-info', { black: xIsNext })}>
        <div>{status}</div>
        <div>{`Draws: ${draws}`}</div>
        <div>{`Wins X: ${xWins}`}</div>
        <div>{`Wins O: ${oWins}`}</div>
        <History />
      </div>
    );
  }
}

GameInfo.contextType = StoreContext;
