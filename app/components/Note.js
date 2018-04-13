/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,

} from 'react-native';

export default class Note extends Component {
  render() {
    return (
      <View style = { styles.note }>
        <Text style = { styles.noteText }>{ this.props.val.date }</Text>
        <Text style = { styles.noteText }>{ this.props.val.note }</Text>

        <TouchableOpacity onPress={ this.props.deleteMethod } style = { styles.deleteNote }>
          <Text>x</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
      position: 'relative',
      top: 60,
      padding: 20,
      margin: 10,
      paddingRight: 100,
      backgroundColor: 'yellow',
      
  },
  noteText: {
    paddingLeft: 20,
  },
  deleteNote: {
    position: 'absolute',
    right: 10,

    alignItems: 'stretch',
    backgroundColor: '#e99c17',

    width: 30,
    height: 30,

    justifyContent: 'center',
    alignItems: 'center',
  }
});
