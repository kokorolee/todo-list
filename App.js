import React from 'react';
import Main from './app/redux/Main.js'
import { Provider } from 'react-redux'

import store from './app/redux/redux/store.js'
export default class App extends React.Component {
  render() {
    return (
        <Provider store = {store}>
          <Main/>
        </Provider>
    );
  }
}