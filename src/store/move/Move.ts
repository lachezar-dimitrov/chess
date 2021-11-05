import { observable } from 'mobx';

export interface IMoveStore {
    id: number;
    squares: Array<string>
}

export default class MoveStore implements IMoveStore {
    @observable id = 0;

    @observable squares: Array<string> = [];
}
