/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { connect } from 'react-redux'
import { toggleCheckDone, toggleEdit, deleteNote, updateNote } from './redux/actions/actionCreators'
import { Form } from './Form.js'
class Note extends Component {

  state = { 
    isEditting: false,
    editContent: ''
   }

  render() {
    const { name, time, checked, isEditting } = this.props.note
    const textDecorationLine = checked ? 'line-through' : 'none'
    const toggleCharDone_Undone = checked ? 'Undone' : 'Done'
    const toggleStringEdit = this.state.isEditting ? 'Save' : 'Edit'

    let noteEdit = ''
    if (this.state.isEditting){
      noteEdit = <TextInput
        multiline = {true} 
        numberOfLines = {4}
        value={this.state.editContent}
        onChangeText={(editContent) => this.setState({ editContent })}
      />
    }else {
      noteEdit =  <Text style={{ textDecorationLine }} >{ name }</Text>
    }
    let noteControll = ''
    if (this.state.isEditting) { 
      noteControll = 
      <View>
          <TouchableOpacity style={styles.controller}>
            <Text style={styles.button} onPress={() => this.toggleEdit(this.props.note.id)}> { toggleStringEdit } </Text>
          </TouchableOpacity>
      </View>
    }else{
      noteControll = 
      <View>
          <TouchableOpacity style={styles.controller}>
            <Text style={styles.button} onPress={() => this.toggleEdit(this.props.note.id)}> { toggleStringEdit } </Text>
          </TouchableOpacity>
      </View>
    }

    return (
      <View keyval={this.props.keyval} style={styles.container}>
        <View>
         { noteEdit }
        </View>
      <View style= { styles.toggle }>
        { !this.state.isEditting ? 
           <TouchableOpacity style={styles.controller}>
            <Text style={styles.button} onPress={() => this.props.toggleCheckDone(this.props.note.id)}> { toggleCharDone_Undone } </Text>
          </TouchableOpacity>  
          : null
        }
       

          <TouchableOpacity style={styles.controller}>
            <Text style={styles.button} onPress={() => this.toggleEdit(this.props.note.id)}> { toggleStringEdit } </Text>
          </TouchableOpacity>

          { this.state.isEditting ? 
              <TouchableOpacity style={styles.controller}>
                <Text style={styles.button} onPress={() => this.toggleNotEdit(this.props.note.id)}>  Cancle </Text>
              </TouchableOpacity>
              : null
           }

          { !this.state.isEditting ?           
            <TouchableOpacity style={styles.controller}>
              <Text style={styles.button} onPress={ () => this.props.deleteNote(this.props.note.id) } > Delete </Text>
            </TouchableOpacity> 
            : null
          }

      </View>
      </View>
    );
  }

  toggleEdit(id) {
    if (this.state.isEditting){
      name = this.state.editContent;
      this.props.updateNote(id, name)
     }
    this.setState({ 
      isEditting: !this.state.isEditting,
      editContent: this.props.note.name
     })
  }
  toggleNotEdit(id) {
    this.setState({ 
      isEditting: false,
     })
  }
}


export default connect(null, {toggleCheckDone, toggleEdit, deleteNote, updateNote})(Note)

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
  },
  toggle: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row'
  },
  editInput:{
    height: 30
  },
});
