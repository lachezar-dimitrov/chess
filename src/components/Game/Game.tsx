import React from 'react';
import { observer } from 'mobx-react';
import Board from './Board/Board';
import AppStore from '../../store/AppStore';
import { calculateWinner } from '../../helpers/CalculateWinner';
import Moves from './Moves/Moves';

type Props = {
  store: AppStore;
}

@observer
export default class Game extends React.Component<Props> {
  private handleClick(index: number): void {
    const { store: { xIsNext, history, stepNumber } } = this.props;
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    squares[index] = xIsNext ? 'X' : 'O';

    // this.setState({
    //   history: newHistory.concat([{
    //     id: IdGenerator.getId(),
    //     squares,
    //   }]),
    //   xIsNext: !xIsNext,
    // });
  }

  // private jumpTo(step: number): void {
  //   this.setState({
  //     stepNumber: step,
  //     xIsNext: (step % 2) === 0,
  //   });
  // }

  render(): JSX.Element {
    const { store } = this.props;
    const {
      xIsNext,
      history,
      stepNumber,
    } = store;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    let status;

    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <Moves store={store} />
        </div>
      </div>
    );
  }
}
