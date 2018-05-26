/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { toggleAddNote } from './redux/actions/actionCreators.js'
class Header extends Component {
  toggleAddNote(){
    this.props.dispatch({
      type: 'TOGGLE_ADD_NOTE'
    })
  }
  render() {
    return (
      <View style={styles.header}>
        <Text></Text>
        <Text> --Note-- </Text>
        <TouchableOpacity style={styles.buttonAdd} onPress={() => this.toggleAddNote()}>
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

export default connect(mapStateToProps)(Header)
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
