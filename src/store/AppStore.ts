import { action, makeObservable, observable } from 'mobx';
import { calculateWinner } from '../helpers/CalculateWinner';
import { IAppStore } from '../interfaces/store/IAppStore';
import { Squares } from '../types/common';

class AppStore implements IAppStore {
  @observable
  squares: Squares;

  @observable
  value: number;

  @observable
  xIsNext: boolean;

  constructor(squares: Squares, xIsNext: boolean) {
    makeObservable(this);

    this.squares = squares;
    this.xIsNext = xIsNext;
    this.value = 0;
  }

  @action
  onClick = (index: number): void => {
    const { squares, xIsNext } = this;

    if (calculateWinner(squares) || squares[index]) {
      return;
    }

    squares[index] = xIsNext ? 'X' : 'O';

    this.xIsNext = !xIsNext;
  }
}

const AppStoreInstance = new AppStore(Array(9).fill(''), true);

export default AppStoreInstance;
