import { action, makeObservable, observable } from 'mobx';
import { calculateWinner } from '../helpers/CalculateWinner';
import History from './models/History';
import PLayerSymbols from './models/PlayerSymbols';

export default class AppStore {
  @observable
  playerSymbols: PLayerSymbols;// Should be on the same row as the prop

  @observable
  xIsNext: boolean; // don no use bool

  @observable
  winner: string;

  @observable
  turns: number;

  @observable
  board: Array<string>;

  @observable
  history: History;

  constructor() {
    makeObservable(this);

    this.turns = 0;
    this.winner = '';
    this.xIsNext = false;
    this.history = new History();
    this.board = Array(9).fill('');
    this.playerSymbols = new PLayerSymbols();
  }

  @action // should be on the same row / do not use arrow fn
  handleBoxClick = (index: number, value: string): void => {
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

  private isBoxAlreadyClicked = (i: number): boolean => Boolean(this.board[i]);
}
