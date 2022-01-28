import React from 'react';
import ReactDOM from 'react-dom';
import '../public/index.scss';
import Greetings from './component';
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <Greetings name="jinhyukoo"></Greetings>
  </Provider>,
  document.getElementById('root')
)