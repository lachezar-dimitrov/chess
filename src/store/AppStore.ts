/* eslint-disable lines-between-class-members */
import { action, makeObservable, observable } from 'mobx';
import Board from './models/Board';
import History from './models/History';
import PLayerSymbols from './models/PlayerSymbols';

export default class AppStore {
  @observable turns: number;
  @observable winner: string;
  @observable xIsNext: boolean; // don no use bool

  @observable board: Board;
  @observable history: History;
  @observable playerSymbols: PLayerSymbols;

  constructor() {
    makeObservable(this);

    // should be constant
    this.turns = 0;
    this.winner = '';
    this.xIsNext = false;

    this.board = new Board();
    this.history = new History();
    this.playerSymbols = new PLayerSymbols();
  }

  @action.bound handleBoxClick(index: number, value: string): void {
    const {
      winner,
      playerSymbols,
    } = this;

    const {
      xPlayer,
      oPlayer,
    } = playerSymbols;

    if (winner || !!this.board.squares[index]) {
      return;
    }

    this.turns += 1;

    if (this.turns === 9) { // constant 9
      this.history.draws += 1;
    }

    this.board.squares[index] = value;

    this.winner = this.board.calculateWinner();

    // Think about a better way
    if (this.winner === xPlayer) {
      this.history.xWins += 1;
    } else if (this.winner === oPlayer) {
      this.history.oWins += 1;
    }

    this.xIsNext = !this.xIsNext; // Think about a better way
  }
}
