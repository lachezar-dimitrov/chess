import React, { createContext, Component, ReactNode } from 'react';
import { observer } from 'mobx-react';
import { IAppStore } from '../../interfaces/store/IAppStore';

interface Props {
  store: IAppStore;
  children: ReactNode;
}

export const StoreContext = createContext<IAppStore | null>(null);

@observer
export default class StoreProvider extends Component<Props> {
  render(): React.ReactNode {
    const { children, store } = this.props;

    return (
      <StoreContext.Provider value={store}>
        {children}
      </StoreContext.Provider>
    );
  }
}
