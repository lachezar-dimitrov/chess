import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import {
  RULES,
  NEXT_PLAYER,
  DRAW_MESSAGE,
  WINNER_MESSAGE,
} from '../../constants/texts';
import Board from '../../containers/Game/Board/Board';
import Player from '../../store/models/Player';

export type Props = {
  draws: number;
  winnerSymbol: string;
  players: Array<Player>;
  currentPlayerIndex: number
}

@observer
export default class Game extends Component<Props> {
  private renderHistory(): ReactNode {
    const {
      draws,
      players,
      winnerSymbol,
      currentPlayerIndex,
    } = this.props;

    let status = '';

    if (winnerSymbol) {
      status = `${WINNER_MESSAGE} ${winnerSymbol}`;
    } else if (draws) {
      status = DRAW_MESSAGE;
    } else {
      status = `${NEXT_PLAYER}: ${players[currentPlayerIndex].symbol}`;
    }

    const renderWins = (player: Player): ReactNode => (
      <div>{`Wins ${player.symbol}: ${player.history.wins}`}</div>
    );

    return (
      <div data-unit-test="history" className="history">
        <div data-unit-test="status" className="status">{status}</div>
        <div className="stats">
          {renderWins(players[0])}
          {renderWins(players[1])}
          <div>{`Draws: ${draws}`}</div>
        </div>
      </div>
    );
  }

  render(): ReactNode {
    return (
      <div className="game-container">
        <div data-unit-test="game-info" className="game-info">{RULES}</div>
        {this.renderHistory()}
        <Board />
      </div>
    );
  }
}
