import {
  action,
  computed,
  observable,
  makeObservable,
} from 'mobx';
import {
  NUMBER_OF_ROWS,
  NUMBER_OF_COLUMNS,
} from '../constants/DefaultValues';

export default class Board {
    @observable private squares: Array<Array<string>>;

    constructor() {
      makeObservable(this);

      this.squares = Array(NUMBER_OF_ROWS)
        .fill(
          Array(NUMBER_OF_COLUMNS)
            .fill(''),
        );
    }

    @action.bound setValue(row: number, column: number, value: string): void {
      this.squares[row][column] = value;
    }

    @computed get allSquares(): Array<Array<string>> {
      return this.squares;
    }

    getValue(x: number, y: number): string {
      return this.squares[x][y];
    }

    /**
     * Given an array of 9 squares, this function will check for a winner.
     *
     * @returns The symbol of the player that won the game or an empty string
     */
    calculateWinner(row: number, column: number): string {
      const symbol = this.squares[row][column];

      const rows = this.checkRows(symbol);
      const columns = this.checkColumns(symbol);
      const diagonals = this.checkDiagonals(symbol);

      if (rows || columns || diagonals) {
        return symbol;
      }

      return '';
    }

    private checkRows(symbol: string): boolean {
      const { squares } = this;
      let symbols = '';

      for (let row = 0; row < squares.length; row += 1) {
        symbols += symbol;
      }

      for (let row = 0; row < squares.length; row += 1) {
        const line = squares[row].join('');

        if (line === symbols) {
          return true;
        }
      }

      return false;
    }

    private checkColumns(symbol: string): boolean {
      const { squares } = this;
      let symbols = '';

      for (let row = 0; row < squares.length; row += 1) {
        symbols += symbol;
      }

      for (let column = 0; column < squares.length; column += 1) {
        let col = '';

        for (let row = 0; row < squares.length; row += 1) {
          col += squares[row][column];
        }

        if (col === symbols) {
          return true;
        }
      }

      return false;
    }

    private checkDiagonals(symbol: string): boolean {
      const { squares } = this;
      let symbols = '';

      for (let row = 0; row < squares.length; row += 1) {
        symbols += symbol;
      }

      const middleRow = 1;
      const middleColumn = 1;
      const up = middleRow - 1;
      const down = middleRow + 1;
      const left = middleColumn - 1;
      const right = middleColumn + 1;

      const middleValue = this.getValue(middleRow, middleColumn);

      const upperLeft = this.getValue(up, left);
      const downRight = this.getValue(down, right);

      const mainDiagonal = [upperLeft, middleValue, downRight];

      if (mainDiagonal.join('') === symbols) {
        return true;
      }

      const upperRight = this.getValue(up, right);
      const downLeft = this.getValue(down, left);

      const secondaryDiagonal = [upperRight, middleValue, downLeft];

      if (secondaryDiagonal.join('') === symbols) {
        return true;
      }

      return false;
    }
}
