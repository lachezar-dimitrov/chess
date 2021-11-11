import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import Box from './Box/Box';
import { StoreContext } from '../../StoreProvider/StoreProvider';
import { generateId } from '../../../helpers/IdGenerator';
import AppStore from '../../../store/AppStore';

@observer
export default class Board extends Component {
  private renderBox = (box: string, index: number): ReactNode => {
    const {
      winner,
      xIsNext,
      playerSymbols,
      handleBoxClick,
    } = this.context as AppStore;

    const { xPlayer, oPlayer } = playerSymbols;
    const value = xIsNext ? xPlayer : oPlayer;

    const handleClick = (): void => handleBoxClick(index, value);

    return (
      <Box
        key={generateId()}
        value={box}
        className={classNames({
          'negative-select': xIsNext,
          'positive-select': !xIsNext,
          selectable: !box && !winner,
          negative: box === xPlayer,
          positive: box === oPlayer,
        })}
        onClick={handleClick}
      />
    );
  }

  render(): ReactNode {
    const { board } = this.context as AppStore;

    return (
      <div className="board">
        {board.map(this.renderBox)}
      </div>
    );
  }
}

Board.contextType = StoreContext;
