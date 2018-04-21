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
import * as firebase from 'firebase'
var data = [];

const firebaseConfig = {
  apiKey: "AIzaSyBBGRwIJpbUIVRl8TIaA-yy2BIGqGhsU3Y",
  authDomain: "todo-list-reactinative.firebaseapp.com",
  databaseURL: "https://todo-list-reactinative.firebaseio.com",
  projectId: "todo-list-reactinative",
  storageBucket: "todo-list-reactinative.appspot.com",
  messagingSenderId: "402577319804"

};
firebase.initializeApp(firebaseConfig);


export default class Main extends Component {

  constructor(props){
    super(props);
    this.state = {
      noteArray: data,
      noteText: '',
    }
  }

componentDidMount (){
  var that = this
  firebase.database().ref('/todos').on('child_added', function(data){
    var newData = [...that.state.noteArray]
    newData.push(data)
    console.log(newData)
    that.setState({noteArray: newData})
  })
}

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return <Note
                key = { key }
                keyval = { key }
                val = { val }
                deleteMethod = { () => this.deleteNote(val.key) }
                viewMethod = { () => this.viewNote(val.key) }
                updateMethod = { () => this.updateNote(val.key) }
                checkBoxMethod = { () => this.checkboxUpdate(val.key) }
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
  async addNote(){
    if (this.state.noteText){
      var key = firebase.database().ref('/todos').push().key
      console.log(key);
      console.log(this.state.noteText);
      console.log(Date.now());
      await firebase.database().ref('/todos').child(key).set({ name: this.state.noteText, time: Date.now(), checkbox: false })
      this.setState({ noteText: '' })
    }
  }

  viewNote(key){

  }


  async deleteNote(val){
    this.state.noteArray.splice(val, 1)
    await firebase.database().ref('todos/' + val).set(null)
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
