import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import {
  RULES,
  NEXT_PLAYER,
  DRAW_MESSAGE,
  WINNER_MESSAGE,
} from '../../constants/texts';
import { StoreContext } from '../StoreProvider/StoreProvider';
import Board from './Board/Board';
import AppStore from '../../store/AppStore';

@observer
export default class Game extends Component {
  renderHistory(): ReactNode {
    const {
      draws,
      players,
      winnerSymbol,
      currentPlayerIndex,
    } = this.context as AppStore;

    const [xPlayer, oPlayer] = players;

    const { wins: xWins } = xPlayer.history;
    const { wins: oWins } = oPlayer.history;

    let status = '';

    if (winnerSymbol) {
      status = `${WINNER_MESSAGE} ${winnerSymbol}`;
    } else if (draws) {
      status = DRAW_MESSAGE;
    } else {
      status = `${NEXT_PLAYER}: ${players[currentPlayerIndex].symbol}`;
    }

    return (
      <div className="history">
        <div className="status">{status}</div>
        <div className="stats">
          <div>{`Wins ${xPlayer.symbol}: ${xWins}`}</div>
          <div>{`Wins ${oPlayer.symbol}: ${oWins}`}</div>
          <div>{`Draws: ${draws}`}</div>
        </div>
      </div>
    );
  }

  render(): ReactNode {
    return (
      <div className="game-container">
        <div className="game-info">{RULES}</div>
        {this.renderHistory()}
        <Board />
      </div>
    );
  }
}

Game.contextType = StoreContext;
