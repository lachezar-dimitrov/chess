import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import Box from './Box/box';
import { IBox } from '../../../interfaces/Box';
import { StoreContext } from '../../StoreProvider/StoreProvider';

@observer
export default class Board extends Component {
  render(): ReactNode {
    const { squares }: { squares: Array<IBox>} = this.context;

    return (
      <div className="board">
        {squares.map((
          { id, value },
          index: number,
        ) => (
          <Box
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
