/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux'
import { toggleAddNote, addNote } from './redux/actions/actionCreators.js'

let data = [];

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
    this.onAdd = this.onAdd.bind(this)
  }



  onAdd(){
    const { name } = this.state
    time = new Date() + ''
    this.props.addNote(name, time)

    this.setState({ name: '' })
    this.props.toggleAddNote()
  }


  render() {
    return (
      <View >
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ name: text })}
          value = { this.state.name }
          placeholder='Add somethings'
        />
        <View style={styles.container}>
          <Text></Text>
          <TouchableOpacity onPress={this.onAdd}><Text style={styles.button}>Add</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.button} onPress={() => this.props.toggleAddNote()}>Cancel</Text></TouchableOpacity>
          <Text></Text>
        </View>
      </View>
    );
  }


}
function mapStateToProps(state){
  return {
    arrNotes: state.arrNotes,
   }
}
export default connect(mapStateToProps, {toggleAddNote, addNote})(Form)
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button:{
    backgroundColor: '#ada9af',
    padding: 10
  },
  textInput:{
    backgroundColor: '#8ac9c0',
    margin: 10,
    paddingHorizontal: 10,
    height: 40,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});
