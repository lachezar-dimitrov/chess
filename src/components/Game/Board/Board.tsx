import React, { Component, Fragment, ReactNode } from 'react';
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
        {board.allSquares.map((row, rowIndex) => (
          <Fragment key={Math.random()}>
            {row.map((box, columnIndex) => (
              <Box
                value={box}
                row={rowIndex}
                column={columnIndex}
                key={Math.random()}
              />
            ))}
          </Fragment>
        ))}
      </div>
    );
  }
}

Board.contextType = StoreContext;
