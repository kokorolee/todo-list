/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { filterShowAll, filterDone, filterUnDone  } from './redux/actions/actionCreators.js'
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
        <TouchableOpacity onPress={() => this.props.filterShowAll()} >
          <Text style={this.getStyleFilter('SHOW_ALL') }> ShowAll </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.filterDone()}>
          <Text style={this.getStyleFilter("DONE")}> Done </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.filterUnDone()}>
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

export default connect(mapStateToProps, { filterShowAll, filterDone, filterUnDone })(Filter);
