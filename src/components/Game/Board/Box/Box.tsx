import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import { StoreContext } from '../../../StoreProvider/StoreProvider';
import AppStore from '../../../../store/AppStore';

type Props = {
  index: number;
  value: string;
};

@observer
export default class Box extends Component<Props> {
  render(): ReactNode {
    const { value, index } = this.props;
    const {
      winner,
      xIsNext,
      playerSymbols,
      handleBoxClick,
    } = this.context as AppStore;

    const { xPlayer, oPlayer } = playerSymbols;
    const boxValue = xIsNext ? xPlayer : oPlayer;

    const handleClick = (): void => handleBoxClick(index, boxValue);

    return (
      <button
        type="button"
        className={classNames('box', {
          'negative-select': xIsNext,
          'positive-select': !xIsNext,
          selectable: !value && !winner,
          negative: value === xPlayer,
          positive: value === oPlayer,
        })}
        onClick={handleClick}
      >
        {value}
      </button>
    );
  }
}

Box.contextType = StoreContext;
