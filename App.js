import React from 'react';
import Main from './app/components/Main.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


export default class App extends React.Component {
  render() {
    return (
        <Provider>
          <Main/>
        </Provider>
    );
  }
}
