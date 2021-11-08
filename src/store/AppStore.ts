import { makeObservable, observable } from 'mobx';
import { IAppStore, IGameStore } from '../interfaces/store/IAppStore';
import GameStore from './game/Game';

class AppStore implements IAppStore {
  @observable
  game: IGameStore;

  constructor(game: IGameStore) {
    makeObservable(this);

    this.game = game;
  }
}

const AppStoreInstance = new AppStore(GameStore);

export default AppStoreInstance;
