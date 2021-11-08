import { action, makeObservable, observable } from 'mobx';
import { generateId } from '../helpers/IdGenerator';
import { ISquare } from '../interfaces/common/square';
import { IAppStore } from '../interfaces/store/IAppStore';
import { calculateWinner } from '../helpers/CalculateWinner';

class AppStore implements IAppStore {
  @observable
  squares: Array<ISquare>;

  @observable
  value: number;

  @observable
  xIsNext: boolean;

  constructor(squares: Array<ISquare>, xIsNext: boolean) {
    makeObservable(this);

    this.squares = squares;
    this.xIsNext = xIsNext;
    this.value = 0;
  }

  @action
  onClick = (index: number): void => {
    const { squares, xIsNext } = this;

    const boardValues = squares.map((square) => square.value);

    if (calculateWinner(boardValues) || boardValues[index]) {
      return;
    }

    boardValues[index] = xIsNext ? 'X' : 'O';

    this.xIsNext = !xIsNext;
  }
}

const AppStoreInstance = new AppStore(
  Array<ISquare>(9).map(() => ({
    id: generateId().toString(),
    value: '',
  })),
  true,
);

export default AppStoreInstance;
