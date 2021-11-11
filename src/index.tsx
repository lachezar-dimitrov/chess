import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import StoreProvider from './components/StoreProvider/StoreProvider';
import AppStore from './store/AppStore';
import './index.less';

const store = new AppStore();

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root'),
);
