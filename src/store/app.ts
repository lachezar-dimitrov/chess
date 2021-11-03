import { action, observable } from 'mobx';
import Move from './move/move';

export default class App {
    @observable history: Array<Move> = [];

    @observable stepNumber = 0;

    @observable xIsNext = true;

    @action jumpTo = (step: number): void => {
      this.stepNumber = step;
      this.xIsNext = (step % 2) === 0;
    }
}
