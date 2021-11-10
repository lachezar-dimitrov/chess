import React, { Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import { StoreContext } from '../../../StoreProvider/StoreProvider';

@observer
export default class History extends Component {
  render(): ReactNode {
    // const { history } = this.context as IAppStore;

    return (
      <ol />
    );
  }
}

History.contextType = StoreContext;
