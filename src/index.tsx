import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import StoreProvider from './components/StoreProvider/StoreProvider';
import AppStore from './store/App';
import './index.css';

ReactDOM.render(
  <StoreProvider store={AppStore}>
    <App />
  </StoreProvider>,
  document.getElementById('root'),
);
