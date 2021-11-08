import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Square from './Square/Square';
import { StoreContext } from '../../StoreProvider/StoreProvider';
import { ISquare } from '../../../interfaces/common/square';

interface Props {
  squares?: Array<ISquare>;
}

@observer
export default class Board extends Component<Props> {
  render(): React.ReactNode {
    const { squares } = this.context;
    // console.log({ squares });

    return (
      <div className="game-board">
        {squares.map((square: string) => (
          <Square
            key={square}
            value={square}
          />
        ))}
      </div>
    );
  }
}

Board.contextType = StoreContext;
