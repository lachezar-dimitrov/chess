import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import Box from './Box/box';
import { StoreContext } from '../../StoreProvider/StoreProvider';
import { IAppStore } from '../../../interfaces/AppStore';

@observer
export default class Board extends Component {
  render(): ReactNode {
    const { board } = this.context as IAppStore;

    return (
      <div className="board">
        {board.map((
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
