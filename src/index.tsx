import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import StoreProvider from './components/StoreProvider/StoreProvider';
import { store } from './store/AppStore';
import './index.less';

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root'),
);
