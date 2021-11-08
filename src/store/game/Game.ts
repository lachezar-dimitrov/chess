import { makeObservable, observable } from 'mobx';
import {
  IBoardStore,
  IGameInfo,
  IGameStore,
} from '../../interfaces/store/IAppStore';

class GameStore implements IGameStore {
    @observable board: IBoardStore;

    @observable gameInfo: IGameInfo;

    constructor(board: IBoardStore, gameInfo: IGameInfo) {
      makeObservable(this);

      this.board = board;
      this.gameInfo = gameInfo;
    }
}

const GameStoreInstance = new GameStore();

export default GameStoreInstance;
