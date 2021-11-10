import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import Box from './Box/Box';
import { StoreContext } from '../../StoreProvider/StoreProvider';
import { IAppStore } from '../../../interfaces/AppStore';
import { generateId } from '../../../helpers/IdGenerator';

@observer
export default class Board extends Component {
  private renderBox = (box: string, index: number): ReactNode => {
    const {
      winner,
      xIsNext,
      playerSymbols,
      handleBoxClick,
    } = this.context as IAppStore;

    const { xPlayer, oPlayer } = playerSymbols;

    const handleClick = (): void => handleBoxClick(index);

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
    const { board } = this.context as IAppStore;

    return (
      <div className="board">
        {board.map(this.renderBox)}
      </div>
    );
  }
}

Board.contextType = StoreContext;
