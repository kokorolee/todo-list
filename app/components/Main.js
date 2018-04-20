import React from 'react';
import { StyleSheet, Text, View, StatusBar, ListView } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Icon, List, ListItem } from 'native-base'

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  // ADD YOUR FIREBASE CREDENTIALS
  apiKey: "AIzaSyBBGRwIJpbUIVRl8TIaA-yy2BIGqGhsU3Y",
  authDomain: "todo-list-reactinative.firebaseapp.com",
  databaseURL: "https://todo-list-reactinative.firebaseio.com",
  projectId: "todo-list-reactinative",
  storageBucket: "todo-list-reactinative.appspot.com",
  messagingSenderId: "402577319804"

};

firebase.initializeApp(firebaseConfig);

var data = []

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      listViewData: data,
      newTodo: ""
    }
  }

  componentDidMount() {
    var that = this
    firebase.database().ref('/todos').on('child_added', function (data) {
      var newData = [...that.state.listViewData]
      newData.push(data)
      console.log(newData)
      that.setState({ listViewData: newData })
    })
  }

  addRow(data) {
    var key = firebase.database().ref('/todos').push().key
    firebase.database().ref('/todos').child(key).set({ name: data, time: Date.now() })
    // this.setState({ listViewData: [""] })
  }

  async deleteRow(secId, rowId, rowMap, data) {
    await firebase.database().ref('todos/' + data.key).set(null)
    rowMap[`${secId}${rowId}`].props.closeRow();
    var newData = [...this.state.listViewData];
    newData.splice(rowId, 1)
    this.setState({ listViewData: newData });
  }

  showInformation() {
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ marginTop: StatusBar.currentHeight }}>
          <Content>
            <Item>
              <Input
                onChangeText={(newTodo) => this.setState({ newTodo })}
                placeholder="Add name"
              />
              <Button onPress={() => this.addRow(this.state.newTodo)}>
                <Icon name="add" />
              </Button>
            </Item>
          </Content>
        </Header>

        <Content>
          <List
            enableEmptySections
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
                <ListItem>
                  <Text style = { styles.textView }> {data.val().time}</Text>
                  <Text> {data.val().name}</Text>
                </ListItem>
            }
            renderLeftHiddenRow={data =>
              <Button full onPress={() => this.addRow(data)} >
                <Icon name="information-circle" />
              </Button>
            }
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={() => this.deleteRow(secId, rowId, rowMap, data)}>
                <Icon name="trash" />
              </Button>

            }
            leftOpenValue={-75}
            rightOpenValue={-75}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textView: {
    color: 'red'
  }
});
