import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import Square from './Square/Square';
import { StoreContext } from '../../StoreProvider/StoreProvider';
import { ISquare } from '../../../interfaces/common/square';

interface Props {
  squares?: Array<ISquare>;
}

@observer
export default class Board extends Component<Props> {
  renderSquare(index: number): ReactNode {
    const { squares } = this.context;

    return (
      <Square
        index={index}
        value={squares[index].value}
      />
    );
  }

  render(): ReactNode {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

Board.contextType = StoreContext;
