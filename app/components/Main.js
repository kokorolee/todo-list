/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import Note from './Note.js'
var data = [];

export default class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      noteArray: data,
      noteText: '',
    }
  }
componentDidMount = async() => {
  try {
    const val = await AsyncStorage.getItem('note_value')
    if (val !== null) {
      var data = JSON.parse(val)
      console.log("data" + data.values )
      this.setState({noteArray: data})
    }
  } catch (e) {
    console.error(e)
  }
}

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return <Note
                key = { key }
                keyval = { key }
                val = { val }
                deleteMethod = { () => this.deleteNote(val) }
                viewMethod = { () => this.viewNote(val) }
                updateMethod={this.updateMethod.bind(this)}
                checkBoxMethod = { () => this.checkboxUpdate(val) }
      />})

    return (
      <View style={styles.container}>
        <View style = { styles.header }>
          <Text style = { styles.headerText } > -Note- </Text>
        </View>

        <ScrollView style = { styles.scrollContainer }>
            { notes }
        </ScrollView>

        <View style = { styles.inputWrapper }>
          <TextInput
            style = { styles.textInput }
            onChangeText = { (noteText) => this.setState({ noteText }) }
            value = { this.state.noteText }
            placeholder = 'Add somethings ... '
            placeholderTextColor = '#fff'
          />
        </View>
        <TouchableOpacity style = { styles.addButton } onPress = { this.addNote.bind(this) }>
          <Text style = { styles.textAddButton }>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
  async addNote(){
    if (this.state.noteText){
      this.state.noteArray.push({
        'name': this.state.noteText,
        'time': (new Date()).toString(),
        'checked': false
      })
    }
    this.crudNote(this.state.noteArray);
    this.setState({ noteText: '' })
  }

  async viewNote(val){
    alert(val.name)
    console.log(val)
  }
  checkboxUpdate(val){
    val.checked = !val.checked
    this.crudNote(this.state.noteArray)
  }
  updateMethod(key, content) {
    this.state.noteArray[key].name = content
    this.crudNote(this.state.noteArray)
   }
  async deleteNote(val){
    this.state.noteArray.splice(val, 1)
    this.crudNote(this.state.noteArray);
  }

  async crudNote(noteArray) {
    this.setState({ noteArray: noteArray });
    try {
      let parseData = JSON.stringify(noteArray);
      await AsyncStorage.setItem('note_value',  parseData);
    } catch (error) {
      console.log("Error");
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: 'red'
  },
  header: {
    top: 20,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    zIndex: 10
  },
  headerText: {
    fontSize: 20,
    color: 'black'
  },
  scrollContainer: {
    marginBottom: 50,
    backgroundColor: 'blue'
  },
  inputWrapper: {
    position: 'absolute',

    width: '100%',
    zIndex: 10,
    backgroundColor: '#fefefe',

    top: 70,
    left: 0,
    right: 0,
  },
  textInput: {
    alignSelf: 'stretch',
    backgroundColor: '#40594c',
    height: 50,
    paddingLeft: 20
  },
  addButton: {
    position: 'absolute',
    top: 80,
    right: 20,
    zIndex: 11,
    elevation: 11,
    backgroundColor: '#26b624',
    width: 30,
    height: 30,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
