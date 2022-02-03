import React from 'react';
import ReactDOM from 'react-dom';
import '../public/index.scss';
import { Provider } from 'react-redux';
import Greetings from '@/component';
import { store } from './app/store';

ReactDOM.render(
  <Provider store={store}>
    <Greetings name="jinhyukoo" />
  </Provider>,
  document.getElementById('root'),
);
