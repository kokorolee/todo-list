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

reload = async() => {
    try {
      const val = await AsyncStorage.getItem('note_value')
      if (val !== null) {
        var data = JSON.parse(val)
        console.log("data" + data )
        this.setState({noteArray: data})
      }
    } catch (e) {
      console.error(e)
    }
  }
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => this.reload()}><Text>Reload</Text></TouchableOpacity>
        <Text> --Note-- </Text>
        <TouchableOpacity style={styles.buttonAdd} onPress={() => this.props.toggleAddNote()}>
          <Text>+</Text>
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
  }
});
