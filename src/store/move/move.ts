import { observable } from 'mobx';

export default class Move {
    @observable id = 0;

    @observable squares: Array<string> = [];
}
