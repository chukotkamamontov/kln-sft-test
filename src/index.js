import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store'
import { Provider } from 'react-redux'
import App from './components/App';
import './assets/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

