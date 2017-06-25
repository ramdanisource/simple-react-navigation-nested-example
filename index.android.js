/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ChatScreen from './ChatScreen';
import { TabNavigator } from "react-navigation";

export default class nyobain_lagi extends Component {

  static navigationOptions = {
    title: 'My Chats',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Happy Eid Mubarak
        </Text>
        <Text style={styles.instructions}>
          Selamat Hari Raya Idul Fitri 1438 H
        </Text>
        <Text style={styles.signature}>
          -- Rizki yang masih single :p --
        </Text>
        <Button
         onPress={() => navigate('Chat')}
         title="Chat with Lucy"
        />

      </View>
    );
  }
}

class RecentChatsScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>List of recent chats</Text>
          <Button
            onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
            title="Chat with Lucy"
            style={styles.tombol}
          />
        </View>
    )
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>List of recent chats</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Chat', { user: 'Mira' })}
          title="Chat with Mira"
          style={styles.tombol}
        />
      </View>
    )
  }
}

const MainScreenNavigator = TabNavigator(
  {
    Recent: { screen: RecentChatsScreen },
    All: { screen: AllContactsScreen },
  },
  {
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {  //https://github.com/react-community/react-navigation/blob/master/docs/api/navigators/TabNavigator.md
        activeTintColor: 'black',
        inactiveTintColor: '#9e9e9e',
        indicatorStyle: {
          backgroundColor: '#424242',
        },
        style: {
          backgroundColor: 'white',
          borderTopWidth: 0,
        },
    }
  },
);

const SimpleApp = StackNavigator(
  {
    Home: {
      screen: MainScreenNavigator
    },
    Chat: {
       screen: ChatScreen
    },
  },
  {
    navigationOptions: {
      title: 'Chat Yuk',
      headerTintColor: 'black',
      headerStyle: {
        backgroundColor:"white",
        elevation: 0,       //remove shadow on Android
        shadowOpacity: 0,   //remove shadow on iOS
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 18,
  },
  signature:{
    textAlign: 'center',
    color: '#1B5E20',
    marginBottom: 5,
    fontSize: 18,
  },
  tombol:{
    marginTop: 10
  }
});

AppRegistry.registerComponent('nyobain_lagi', () => SimpleApp);
