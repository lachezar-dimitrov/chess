import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import { StoreContext } from '../../../StoreProvider/StoreProvider';
import AppStore from '../../../../store/AppStore';

type Props = {
  row: number;
  value: string;
  column: number;
};

@observer
export default class Box extends Component<Props> {
  render(): ReactNode {
    const { value, row, column } = this.props;
    const {
      winnerSymbol,
      currentPlayerIndex,
      players,
      handleBoxClick,
    } = this.context as AppStore;

    const boxValue = players[currentPlayerIndex].symbol;

    const handleClick = (): void => handleBoxClick(row, column, boxValue);

    const classes = {
      'negative-select': currentPlayerIndex % players.length === 0,
      'positive-select': currentPlayerIndex % players.length !== 0,
      selectable: !value && !winnerSymbol,
      negative: value === players[0].symbol,
      positive: value === players[1].symbol,
    };

    return (
      <button
        type="button"
        className={classNames('box', classes)}
        onClick={handleClick}
      >
        {value}
      </button>
    );
  }
}

Box.contextType = StoreContext;
