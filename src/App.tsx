import React from 'react';
import { observer } from 'mobx-react';
import Game from './components/Game/Game';
import AppStore from './store/AppStore';

type Props = {
  store: AppStore;
}

@observer
export default class App extends React.Component<Props> {
  render(): JSX.Element {
    const { store } = this.props;
    return (
      <div className="game-container">
        <Game store={store} />
      </div>
    );
  }
}
