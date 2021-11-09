import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import Square from './Square/Square';
import { StoreContext } from '../../StoreProvider/StoreProvider';
import { ISquare } from '../../../interfaces/common/square';

@observer
export default class Board extends Component {
  render(): ReactNode {
    const { squares }: { squares: Array<ISquare>} = this.context;

    return (
      <div className="board">
        {squares.map((
          { id, value },
          index: number,
        ) => (
          <Square
            key={id}
            index={index}
            value={value}
          />
        ))}
      </div>
    );
  }
}

Board.contextType = StoreContext;
