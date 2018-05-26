import React from 'react';
import Main from './app/redux/Main.js'
import { Provider, connect} from 'react-redux'
import { AsyncStorage } from 'react-native'
import { createStore,  } from 'redux';
import { Text, View, TouchableOpacity } from 'react-native';
import store from './app/redux/redux/store.js'
import reducer from './app/redux/redux/reducers/reducer.js'

let defaultArrayNotes = createStore(reducer);

export default class App extends React.Component {

  constructor (props){
    super(props)
    this.state = {
      isLoading: true,
      arrNotes: []
    }
  }

componentDidMount() {
  this.getDate()
  this.setState({isLoading: false})
}
getDate = async () =>{
  try {
    const val = await AsyncStorage.getItem('note_value')
    if (val !== null) {
      console.log('if');
      var data = JSON.parse(val)
      console.log('componentDidMount '+ JSON.stringify(data, null,4) )
      var defaultArrayNotes = {
        arrNotes: data
      }
      this.setState({ arrNotes: createStore(reducer) })
    }else {
      console.log(defaultArrayNotes);
      this.setState(defaultArrayNotes)
    }
  } catch (e) {
    console.error(e)
  }
}

  render() {
    if (this.state.isLoading){
      return <Text style={{ position: 'absolute', top: '50%', left: '50%'}}>..Loading</Text>
    }
    return (
        <Provider store = {store}>
            <Main/>
        </Provider>
    );
  }
}
