import React from 'react';
import Board from './components/Board/Board';
import { calculateWinner } from './helpers/CalculateWinner';
import { IdGenerator } from './helpers/IdGenerator';

type Props = {

}

type Squares = {
  id: number;
  squares: Array<string>;
}

type State = {
  history: Array<Squares>;
  stepNumber: number;
  xIsNext: boolean;
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      history: [{
        id: IdGenerator.getId(),
        squares: Array(9).fill(''),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  private handleClick(index: number): void {
    const { xIsNext, history, stepNumber } = this.state;
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    squares[index] = xIsNext ? 'X' : 'O';

    this.setState({
      history: newHistory.concat([{
        id: IdGenerator.getId(),
        squares,
      }]),
      xIsNext: !xIsNext,
    });
  }

  private jumpTo(step: number): void {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render(): JSX.Element {
    const { xIsNext, stepNumber, history } = this.state;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move}`
        : 'Go to game start';

      return (
        <li key={step.id}>
          <button
            type="button"
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });

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
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
