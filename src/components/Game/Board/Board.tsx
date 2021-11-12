import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import { StoreContext } from '../../StoreProvider/StoreProvider';
import Box from './Box/Box';
import AppStore from '../../../store/AppStore';

@observer
export default class Board extends Component {
  render(): ReactNode {
    const { board } = this.context as AppStore;

    return (
      <div className="board">
        {board.squares.map((box, index) => (
          <Box
            // eslint-disable-next-line react/no-array-index-key
            key={`${index}-box`}
            index={index}
            value={box}
          />
        ))}
      </div>
    );
  }
}

Board.contextType = StoreContext;
