import { action, observable } from 'mobx';
import { IdGenerator } from '../helpers/IdGenerator';

type Squares = {
    id: number;
    squares: Array<string>;
}

export default class AppStore {
    @observable history: Array<Squares> = [{
      id: IdGenerator.getId(),
      squares: Array(9).fill(''),
    }];

    @observable stepNumber = 0;

    @observable xIsNext = true;

    @action jumpTo = (step: number): void => {
      this.stepNumber = step;
      this.xIsNext = (step % 2) === 0;
    }
}
