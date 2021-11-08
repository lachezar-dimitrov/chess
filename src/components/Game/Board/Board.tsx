import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Square from './Square/Square';
import { Squares } from '../../../types/common';

interface Props {
  squares?: Squares;
}

@observer
export default class Board extends Component<Props> {
  render(): React.ReactNode {
    const { squares } = this.props;

    return (
      <div className="game-board">
        {squares?.map(() => <Square />)}
      </div>
    );
  }
}
