/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Note from './Note.js'

export default class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return <Note
        key = { key }
        keyval = { key }
        val = { val }
        deleteMethod = { () => this.deleteNote(key) }
        viewMethod = { () => this.viewNote(key) }
      />
    })
    return (
      <View style={styles.container}>
        <View style = { styles.header }>
          <Text style = { styles.headerText } > -Note- </Text>
        </View>

        <ScrollView style = { styles.scrollContainer }>
            { notes }
        </ScrollView>

        <View style = { styles.footer }>
          <TextInput
            style = { styles.textInput }
            onChangeText = { (noteText) => this.setState({ noteText }) }
            value = { this.state.noteText }
            placeholder = 'note'
            placeholderTextColor = '#fff'
          />
        </View>
        <TouchableOpacity style = { styles.addButton } onPress = { this.addNote.bind(this) }>
          <Text style = { styles.textAddButton }>+</Text>
        </TouchableOpacity>
      </View>
    );


  }
  addNote(){
    if (this.state.noteText){
      let d = new Date();
      this.state.noteArray.push({
        'date': d.getFullYear() + "/" + d.getMonth() + 1 + "/" + d.getDate(),
        'note': this.state.noteText
      });
      this.setState({ noteArray: this.state.noteArray })
      this.setState({ noteText: '' })
    }
  }

  viewNote(key){
    let date = this.state.noteArray[key].date
    let note = 'comment: \n' + this.state.noteArray[key].note
    alert(date + "\n" + note)
  }

  deleteNote(key){
    this.state.noteArray.splice(key, 1)
    this.setState({ noteArray: this.state.noteArray })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    top: 50,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  headerText: {
    fontSize: 20,
    color: 'black'
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',

    width: '100%',
    zIndex: 10,
    backgroundColor: '#fefefe',

    bottom: 10,
    left: 0,
    right: 0,
  },
  textInput: {
    alignSelf: 'stretch',
    backgroundColor: '#252525',
    height: 50,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 11,
    elevation: 11,
    backgroundColor: '#26b624',
    width: 50,
    height: 50,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
     borderRadius: 50,
  },

});
