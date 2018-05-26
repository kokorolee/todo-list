/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { toggleCheckDone } from './redux/actions/actionCreators'
class Note extends Component {

  render() {
    const { name, time, checked } = this.props.note
    const textDecorationLine = checked ? 'line-through' : 'none'
    const toggleCharDone_Undone = checked ? 'Undone' : 'Done'
    return (
      <View keyval={this.props.keyval} style={styles.container}>
        <Text style={{ textDecorationLine }} >{ name }</Text>
        <Text>{ time }</Text>
        <TouchableOpacity style={styles.controller}>
            <Text style={styles.button} onPress={() => this.props.toggleCheckDone(this.props.note.id)}> {toggleCharDone_Undone} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, {toggleCheckDone})(Note)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#97c344',
    padding: 10,
    margin: 10
  },
  controller: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: '#c3c3c3',
    padding: 10
  }
});
