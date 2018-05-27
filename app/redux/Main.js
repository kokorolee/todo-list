/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  AsyncStorage,
  AppState
} from 'react-native';

import { connect } from 'react-redux';

import store from './redux/store.js'
import reducer from './redux/reducers/reducer.js'

import Header from './Header.js'
import Note from './Note.js';
import Filter from './Filter.js'
import Form from './Form.js'

class Main extends Component {
  getNoteList(){
    const { filterStatus, arrNotes } = this.props
    if (filterStatus === 'SHOW_ALL') return arrNotes.filter(e => !e.isDeleted)
    if (filterStatus === 'DONE') return arrNotes.filter(e => e.checked).filter(e => !e.isDeleted)
    if (filterStatus === 'UNDONE') return arrNotes.filter(e => !e.checked).filter(e => !e.isDeleted)
  }


  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <View style={{ flex: 10 }}>
          { this.props.isAdding ? <Form/> : null }
          <FlatList
            data={this.getNoteList()}
            renderItem={({ item }) => <Note
                                          note={item}
                                          keyval={item.keyval}
                                        />}
          />
        </View>
        <Filter/>
      </View>
    );
  }

}

function mapStateToProps(state) {
  return {
    filterStatus: state.filterStatus,
    arrNotes: state.arrNotes,
    isAdding: state.isAdding
   }
}

export default connect(mapStateToProps)(Main)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});
