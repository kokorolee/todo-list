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

  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity><Text>Reload</Text></TouchableOpacity>
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
