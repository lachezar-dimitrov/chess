import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import Box from './Box/Box';
import { StoreContext } from '../../StoreProvider/StoreProvider';
import { generateId } from '../../../helpers/IdGenerator';
import AppStore from '../../../store/AppStore';

@observer
export default class Board extends Component {
  render(): ReactNode {
    const { board } = this.context as AppStore;

    return (
      <div className="board">
        {board.map((box, index) => (
          <Box
            key={generateId()}
            index={index}
            value={box}
          />
        ))}
      </div>
    );
  }
}

Board.contextType = StoreContext;
