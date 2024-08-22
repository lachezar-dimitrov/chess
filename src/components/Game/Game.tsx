/* eslint-disable react/sort-comp */
import React, { Component, ReactNode } from "react";
import { observer } from "mobx-react";
import { RULES } from "../../constants/texts";
import Board from "../../containers/Game/Board/Board";
import Player from "../../store/models/Player";

export type Props = {
    draws: number;
    status: string;
    players: Array<Player>;
};

@observer
export default class Game extends Component<Props> {
    render(): ReactNode {
        return (
            <div className="game-container">
                <div data-test="game-info" className="game-info">
                    {RULES}
                </div>
                {this.renderHistory()}
                <Board />
            </div>
        );
    }

    private renderHistory(): ReactNode {
        const { draws, status, players } = this.props;

        const renderWins = (player: Player): ReactNode => (
            <div data-test={`wins-${player.symbol.toLowerCase()}`}>
                {`Wins ${player.symbol}: ${player.history.wins}`}
            </div>
        );

        return (
            <div data-test="history" className="history">
                <div data-test="status" className="status">
                    {status}
                </div>
                <div className="stats">
                    {renderWins(players[0])}
                    {renderWins(players[1])}
                    <div data-test="draws">{`Draws: ${draws}`}</div>
                </div>
            </div>
        );
    }
}
