/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
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
    this.props.dispatch({
      type: 'ADD_NOTE',
      name,
      time
    })
    this.setState({ name: '' })
    this.toggleAddNote()
  }
  toggleAddNote(){
    this.props.dispatch({
      type: 'TOGGLE_ADD_NOTE'
    })
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
          <TouchableOpacity><Text style={styles.button} onPress={() => this.toggleAddNote()}>Cancel</Text></TouchableOpacity>
          <Text></Text>
        </View>
      </View>
    );
  }
} 
export default connect()(Form)
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
