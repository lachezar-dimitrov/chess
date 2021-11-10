import { action, makeObservable, observable } from 'mobx';
import { O, X } from '../constants/texts';
import { BoardType } from '../types/Board';
import { IHistory } from '../interfaces/History';
import { IAppStore } from '../interfaces/AppStore';
import { calculateWinner } from '../helpers/CalculateWinner';
import { IPLayerSymbols } from '../interfaces/PlayerSymbols';

class AppStore implements IAppStore {
  @observable
  playerSymbols: IPLayerSymbols;

  @observable
  xIsNext: boolean;

  @observable
  winner: string;

  @observable
  turns: number;

  @observable
  board: BoardType;

  @observable
  history: IHistory;

  constructor(
    board: BoardType,
    playerSymbols: IPLayerSymbols,
    history: IHistory,
  ) {
    makeObservable(this);

    this.board = [...board];
    this.playerSymbols = { ...playerSymbols };
    this.history = { ...history };

    this.turns = 0;
    this.winner = '';
    this.xIsNext = false;
  }

  @action
  handleBoxClick = (index: number): void => {
    const {
      winner,
      xIsNext,
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

    this.board[index] = xIsNext ? xPlayer : oPlayer;

    this.winner = calculateWinner(this.board);

    if (this.winner === xPlayer) {
      this.history.xWins += 1;
    } else if (this.winner === oPlayer) {
      this.history.oWins += 1;
    }

    this.xIsNext = !this.xIsNext;
  }

  private isBoxAlreadyClicked = (i: number): boolean => Boolean(this.board[i]);
}

const board: BoardType = Array(9).fill('');

const playerSymbols = {
  xPlayer: 'X',
  oPlayer: 'O',
};

const history = {
  xWins: 0,
  oWins: 0,
  draws: 0,
};

const AppStoreInstance = new AppStore(board, playerSymbols, history);

export default AppStoreInstance;
