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

  constructor(xIsNext: boolean) {
    makeObservable(this);
    // console.log({ squares });

    this.squares = Array<ISquare>(9)
      .fill({ id: '0', value: '0' })
      .map(() => ({
        id: generateId().toString(),
        value: '',
      }));

    this.xIsNext = xIsNext;
    this.value = 0;
  }

  @action
  onClick = (index: number): void => {
    const { squares, xIsNext } = this;

    const boardValues = squares.map((square) => square.value);

    // console.log('dd');

    if (calculateWinner(boardValues) || boardValues[index]) {
      return;
    }
    // console.log({ squares: squares[index] });
    squares[index].value = xIsNext ? 'X' : 'O';

    this.xIsNext = !xIsNext;
  }
}

const AppStoreInstance = new AppStore(false);

export default AppStoreInstance;
