import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import Game from './Game/Game';

@observer
export default class App extends Component {
  render(): ReactNode {
    return <Game />;
  }
}
