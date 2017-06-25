import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

export default class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
   title: `Chat with ${navigation.state.params.user}`,
   //headerRight: <Button title="Info" />,
 });

  render() {
    const { params } = this.props.navigation.state;
    return <Text>Chat with {params.user}</Text>;
  }
}
