import {
  action,
  observable,
  makeObservable,
  computed,
} from 'mobx';
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
import { DRAW_MESSAGE, NEXT_PLAYER, WINNER_MESSAGE } from '../constants/texts';

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

  @computed get status(): string {
    const {
      draws,
      players,
      winnerSymbol,
      currentPlayerIndex,
    } = this;

    if (winnerSymbol) {
      return `${WINNER_MESSAGE} ${winnerSymbol}`;
    }
    if (draws) {
      return DRAW_MESSAGE;
    }
    return `${NEXT_PLAYER}: ${players[currentPlayerIndex].symbol}`;
  }

  @action.bound handleBoxClick(
    row: number,
    column: number,
    value: string,
  ): void {
    if (!this.winnerSymbol && !this.board.getValue(row, column)) {
      this.turns += 1;

      this.board.setValue(row, column, value);

      this.winnerSymbol = this.board.calculateWinner(row, column);

      if (this.winnerSymbol) {
        this.players.forEach((player) => {
          if (player.symbol === this.winnerSymbol) {
            player.history.wins += 1;
          } else {
            player.history.loses += 1;
          }
        });
      } else if (this.turns === maxNumberOfTurns) {
        this.draws += 1;
      } else {
        this.currentPlayerIndex = this.turns % this.players.length;
      }
    }
  }
}
