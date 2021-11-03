import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import AppStore from './store/app';

const store = new AppStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
