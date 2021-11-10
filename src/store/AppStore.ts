import { action, makeObservable, observable } from 'mobx';
import { O, X } from '../constants/texts';
import { IBox } from '../interfaces/Box';
import { IHistory } from '../interfaces/History';
import { IAppStore } from '../interfaces/AppStore';
import { generateId } from '../helpers/IdGenerator';
import { calculateWinner } from '../helpers/CalculateWinner';

class AppStore implements IAppStore {
  @observable
  xIsNext: boolean;

  @observable
  winner: string;

  @observable
  turns: number;

  @observable
  board: Array<IBox>;

  @observable
  history: IHistory;

  constructor(board: Array<IBox>, history: IHistory) {
    makeObservable(this);

    this.board = [...board];
    this.history = { ...history };

    this.turns = 0;
    this.winner = '';
    this.xIsNext = false;
  }

  @action
  onBoxClick = (index: number): void => {
    this.turns += 1;

    const boardValues = this.board.map((square) => square.value);

    if (calculateWinner(boardValues) || boardValues[index]) {
      return;
    }

    this.board[index].value = this.xIsNext ? X : O;

    this.xIsNext = !this.xIsNext;
  }
}

const board = Array<IBox>(9)
  .fill({ id: '0', value: '0' })
  .map(() => ({
    id: generateId().toString(),
    value: '',
  }));

const history = {
  xWins: 0,
  oWins: 0,
  draws: 0,
};

const AppStoreInstance = new AppStore(board, history);

export default AppStoreInstance;
