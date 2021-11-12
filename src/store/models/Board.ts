import { makeObservable, observable } from 'mobx';

export default class Board {
    private readonly lines: Array<Array<number>>;

    @observable squares: Array<string>;

    constructor() {
      makeObservable(this);

      this.lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      this.squares = Array(9).fill('');
    }

    /**
     * Given an array of 9 squares, this function will check for a winner.
     *
     * @returns The symbol of the player that won the game or an empty string
    */
    calculateWinner(): string {
      const { lines, squares } = this;

      for (let i = 0; i < lines.length; i += 1) {
        const [a, b, c] = lines[i];
        if (squares[a]
            && squares[a] === squares[b]
            && squares[a] === squares[c]
        ) {
          return squares[a];
        }
      }

      return '';
    }
}
