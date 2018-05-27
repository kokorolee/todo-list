import React from 'react';
import Main from './app/redux/Main.js'
import { Provider, connect} from 'react-redux'
import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware } from 'redux';
import { Text, View, TouchableOpacity } from 'react-native';
import store from './app/redux/redux/store.js'
import reducer from './app/redux/redux/reducers/reducer.js'

export default class App extends React.Component {

  constructor (props){
    super(props)
    this.state = {
      isLoading: false,
      store: store
    }
  }

  componentDidMount = async() => {
    this.setState({ isLoading: true })
    await AsyncStorage.getItem('note_value3').then((value) => {
      if (value !== null && value.length) {
        data = JSON.parse(value);
        let initStore = {
          arrNotes: data,
          isAdding: false,
          filterStatus: 'SHOW_ALL',
          isDeleted: false
        }
        this.setState({ store: createStore(reducer, initStore) });
        this.setState({isLoading: false})

        return JSON.parse(value);
      } else {
      }
    })
    this.setState({isLoading: false})
  }

  render() {
    if (this.state.isLoading){
      return <Text style={{ position: 'absolute', top: '50%', left: '50%'}}>..Loading</Text>
    }
    return (
        <Provider store = {this.state.store}>
            <Main/>
        </Provider>
    );
  }
}
