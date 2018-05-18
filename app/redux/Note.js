/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'

class Note extends Component {

  toggleCheckDone(){
    this.props.dispatch({
      type: 'TOGGLE_CHECK_DONE',
      id: this.props.note.id
    })
  }

  render() {
    const { name, time, checked } = this.props.note
    const textDecorationLine = checked ? 'line-through' : 'none'
    const toggleCharDone_Undone = checked ? 'Undone' : 'Done'
    return (
      <View style={styles.container}>
        <Text style={{ textDecorationLine }} >{ name }</Text>
        <Text>{ time }</Text>
        <TouchableOpacity style={styles.controller}>
            <Text style={styles.button} onPress={() => this.toggleCheckDone()}> {toggleCharDone_Undone} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controller}>
            <Text style={styles.button} onPress={() => this.toggleCheckDone()}> {toggleCharDone_Undone} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(Note)

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
