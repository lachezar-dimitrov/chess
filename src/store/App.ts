import { action, makeObservable, observable } from 'mobx';
import { UnaryFunction } from '../types/Functions';
import { IMoveStore } from './move/Move';

interface IAppStore {
  history: Array<IMoveStore>;
  step: number;
  xIsNext: boolean;
  jumpTo: UnaryFunction<number, void>;
}

export default class AppStore implements IAppStore {
    @observable history = [];

    @observable step = 0;

    @observable xIsNext = true;

    constructor() {
      makeObservable(this);
    }

    @action
    jumpTo: UnaryFunction<number, void> = (step) => {
      this.step = step;
      this.xIsNext = (step % 2) === 0;
    }
}
