import { action, makeObservable, observable } from 'mobx';
import { calculateWinner } from '../helpers/CalculateWinner';
import History from './models/History';
import PLayerSymbols from './models/PlayerSymbols';

export default class AppStore {
  @observable playerSymbols: PLayerSymbols;

  @observable xIsNext: boolean; // don no use bool

  @observable winner: string;

  @observable turns: number;

  @observable board: Array<string>;

  @observable history: History;

  constructor() {
    makeObservable(this);

    this.turns = 0;
    this.winner = '';
    this.xIsNext = false;
    this.board = Array(9).fill('');

    this.history = new History();
    this.playerSymbols = new PLayerSymbols();
  }

  @action.bound handleBoxClick(index: number, value: string): void {
    const {
      winner,
      playerSymbols,
      isBoxAlreadyClicked,
    } = this;

    const {
      xPlayer,
      oPlayer,
    } = playerSymbols;

    if (winner || isBoxAlreadyClicked(index)) {
      return;
    }

    this.turns += 1;

    if (this.turns === 9) {
      this.history.draws += 1;
    }

    this.board[index] = value;

    this.winner = calculateWinner(this.board);

    if (this.winner === xPlayer) {
      this.history.xWins += 1;
    } else if (this.winner === oPlayer) {
      this.history.oWins += 1;
    }

    this.xIsNext = !this.xIsNext; // Think about a better way
  }

  @action.bound private isBoxAlreadyClicked(i: number): boolean {
    return Boolean(this.board[i]);
  }
}
