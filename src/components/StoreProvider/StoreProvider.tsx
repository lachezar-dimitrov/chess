import React, { ReactNode, createContext, Component } from 'react';
import { observer } from 'mobx-react';
import { IAppStore } from '../../interfaces/AppStore';

interface Props {
  store: IAppStore;
  children: ReactNode;
}

export const StoreContext = createContext<IAppStore | null>(null);

@observer
export default class StoreProvider extends Component<Props> {
  render(): ReactNode {
    const { children, store } = this.props;

    return (
      <StoreContext.Provider value={store}>
        {children}
      </StoreContext.Provider>
    );
  }
}
