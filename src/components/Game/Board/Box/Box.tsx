import React, { Component, ReactNode } from "react";
import { observer } from "mobx-react";
import classNames from "classnames";
import Player from "../../../../store/models/Player";

type HandleBoxClick = (r: number, c: number, v: string) => void;

export type Props = {
    row: number;
    value: string;
    column: number;
    winnerSymbol: string;
    players: Array<Player>;
    currentPlayerIndex: number;
    handleBoxClick: HandleBoxClick;
};

@observer
export default class Box extends Component<Props> {
    render(): ReactNode {
        const { row, value, column, players, winnerSymbol, currentPlayerIndex, handleBoxClick } = this.props;

        const boxValue = players[currentPlayerIndex].symbol;
        const handleClick = (): void => handleBoxClick(row, column, boxValue);

        const [xPlayer, oPlayer] = players;
        const { symbol: xSymbol } = xPlayer;
        const { symbol: oSymbol } = oPlayer;

        const classes = {
            "negative-select": currentPlayerIndex % players.length === 0,
            "positive-select": currentPlayerIndex % players.length === 1,
            selectable: !value && !winnerSymbol,
            negative: value === xSymbol,
            positive: value === oSymbol,
        };

        return (
            <button
                type="button"
                data-test={`box-${row}-${column}`}
                className={classNames("box", classes)}
                onClick={handleClick}
            >
                {value}
            </button>
        );
    }
}
