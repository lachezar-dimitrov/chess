import { action, makeObservable, observable } from 'mobx';
import {
  INITIAL_TURNS,
  INITIAL_DRAWS,
  maxNumberOfTurns,
  INITIAL_PLAYER_INDEX,
  INITIAL_WINNER_SYMBOL,
  DEFAULT_PLAYER_ONE_SIGN,
  DEFAULT_PLAYER_TWO_SIGN,
} from './constants/DefaultValues';
import Board from './models/Board';
import Player from './models/Player';
import History from './models/History';

export default class AppStore {
  @observable turns: number;
  @observable draws: number;
  @observable winnerSymbol: string;
  @observable currentPlayerIndex: number;

  @observable board: Board;
  @observable history: History;
  @observable players: Array<Player>;

  constructor() {
    makeObservable(this);

    this.turns = INITIAL_TURNS;
    this.draws = INITIAL_DRAWS;
    this.winnerSymbol = INITIAL_WINNER_SYMBOL;
    this.currentPlayerIndex = INITIAL_PLAYER_INDEX;

    this.board = new Board();
    this.history = new History();
    this.players = [
      new Player(DEFAULT_PLAYER_ONE_SIGN),
      new Player(DEFAULT_PLAYER_TWO_SIGN),
    ];
  }

  @action.bound handleBoxClick(index: number, value: string): void {
    if (this.winnerSymbol || !!this.board.squares[index]) {
      return;
    }

    this.turns += 1;
    this.board.squares[index] = value;
    this.winnerSymbol = this.board.calculateWinner();

    if (this.winnerSymbol) {
      this.players.forEach((player) => {
        if (player.symbol === this.winnerSymbol) {
          player.history.wins += 1;
        } else {
          player.history.loses += 1;
        }
      });

      return;
    }

    if (this.turns === maxNumberOfTurns) {
      this.draws += 1;

      return;
    }

    this.currentPlayerIndex = this.turns % this.players.length;
  }
}
