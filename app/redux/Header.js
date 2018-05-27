/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import { connect } from 'react-redux'
import { toggleAddNote } from './redux/actions/actionCreators.js'
class Header extends Component {

getDate = async () =>{
  try {
    const val = await AsyncStorage.getItem('note_value')
    if (val !== null) {
      console.log(JSON.stringify(JSON.parse(val),null,4))
      return data = JSON.parse(val)
    }else {
      console.log(defaultArrayNotes);
      return store
    }
  } catch (e) {
    console.error(e)
  }
}
  render() {
    return (
      <View style={styles.header}>
        <Text></Text>
        <Text> --Note-- </Text>
        <TouchableOpacity style={styles.buttonAdd} onPress={() => this.props.toggleAddNote()}>
          <Text style={ styles.buttonText} >+</Text>
        </TouchableOpacity>
      </View>

    );
  }
}
function mapStateToProps(state){
  return{
    isAdding: state.isAdding
  }
}

export default connect(mapStateToProps, { toggleAddNote })(Header)
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#3299d2',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row'
  },
  buttonAdd: {
    backgroundColor: '#0a9f22',
    height: 30,
    width: 30,
    alignItems: 'center',
  },
  buttonText: {
    alignItems: 'center',
    marginTop: 5
  }
});
