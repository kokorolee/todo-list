/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

import {
  CheckBox
} from 'native-base'

export default class Note extends Component {
  state = {
       isEdit: false,
       editContent: null
   }
  render() {
    let edit = this.state.isEdit;
    let noteRender = '';
    if (edit) {
        noteRender = <TextInput
            value={this.state.editContent}
            autoFocus={true}
            onChangeText={(editContent) => this.setState({ editContent })}
        />;
    } else {
        noteRender = <Text style = { styles.noteText, styles.noteName }>{ this.props.val.name }</Text>
    }

    return (
      <View keyval = { this.props.keyval } style = { styles.note }>
        <TouchableOpacity onPress = { this.props.viewMethod } >
          <Text style = { styles.noteText }>{ this.props.val.time }</Text>
          { noteRender }
        </TouchableOpacity>
        <TouchableOpacity onPress={ this.props.deleteMethod } style = { styles.deleteNote }>
          <Text>x</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = { () => this.editNote() } style = { styles.editNote }>
          <Text>E</Text>
        </TouchableOpacity>
        <TouchableOpacity style = { styles.checkboxs }>
          <CheckBox style = { styles.checkbox } onPress = { this.props.checkBoxMethod } checked={this.props.val.checked }  />
        </TouchableOpacity>
      </View>
    );
  }

editNote() {
    this.state.isEdit = !this.state.isEdit;
    if (this.state.isEdit) {
        this.state.editContent = this.props.val.name;
    } else {
        this.props.updateMethod(this.props.keyval, this.state.editContent);
        this.state.editContent = '';
    }
    this.setState(this.state);
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
  noteName: {
    fontSize: 20
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
  },
  editNote: {
    height: 30,
    width: 30,
    top: 30,
    right: 10,
    position: 'absolute',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkboxs: {
    position: 'absolute',
    right: 20,
    top: 60,
    height: 30,
    width: 30,
  },
  checkbox: {
    height: '100%',
    width: '100%'
  }
});
