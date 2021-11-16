import { makeObservable, observable } from 'mobx';
import History from './History';

export default class Player {
    @observable symbol: string;
    @observable history: History;

    constructor(symbol: string) {
      makeObservable(this);

      this.symbol = symbol;
      this.history = new History();
    }
}
