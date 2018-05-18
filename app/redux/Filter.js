/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
class Filter extends Component {
  getStyleFilter(statusName){
    const { filterStatus } = this.props;
    if (statusName === filterStatus) return{ color: 'yellow', fontWeight: 'bold' }
    return styles.buttonText
  }
  setFilterStatus(action){
    this.props.dispatch({ type: action })
  }
  render() {
    return (
      <View style={ styles.container}>
        <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_SHOW_ALL')} >
          <Text style={this.getStyleFilter('SHOW_ALL') }> ShowAll </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_DONE')}>
          <Text style={this.getStyleFilter("DONE")}> Done </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_UNDONE')}>
          <Text style={ this.getStyleFilter("UNDONE")  }> Undone </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#256396',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonText: {
    color: 'white'
  }
});

function mapStateToProps(state){
  return { filterStatus: state.filterStatus }
}

export default connect(mapStateToProps)(Filter);
