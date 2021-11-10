import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import { IAppStore } from '../../../interfaces/AppStore';
import { O, WINNER_MESSAGE, X } from '../../../constants/texts';
import { StoreContext } from '../../StoreProvider/StoreProvider';
import History from './History/History';

@observer
export default class GameInfo extends Component {
  render(): ReactNode {
    const {
      xIsNext,
      winner,
    } = this.context as IAppStore;

    let status;

    if (winner) {
      status = `${WINNER_MESSAGE} ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? X : O}`;
    }

    return (
      <div className="game-info">
        <div>{status}</div>
        <History />
      </div>
    );
  }
}

GameInfo.contextType = StoreContext;
