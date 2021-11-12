import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import { StoreContext } from '../../StoreProvider/StoreProvider';
import { generateUniqueKey } from '../../../helpers/KeyGenerator';
import Box from './Box/Box';
import AppStore from '../../../store/AppStore';

@observer
export default class Board extends Component {
  render(): ReactNode {
    const { board } = this.context as AppStore;
    // console.log({ board });

    return (
      <div className="board">
        {board.squares.map((box, index) => (
          <Box
            key={generateUniqueKey()}
            index={index}
            value={box}
          />
        ))}
      </div>
    );
  }
}

Board.contextType = StoreContext;
