import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import AppStore from './store/AppStore';

const store = new AppStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
