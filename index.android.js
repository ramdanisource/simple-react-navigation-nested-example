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
  FlatList,
  TouchableNativeFeedback,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";
import { List, ListItem } from "react-native-elements";
import ChatScreen from './ChatScreen';

export default class nyobain_lagi extends Component {

    constructor (props) {
      super(props)
      this.state = { data: [] }
    }

    componentDidMount() {
      this.requestDataPerson();
    }

    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            flex:1,
            backgroundColor: "#eeeeee",
          }}
        />
      );
    };

    requestDataPerson = () => {
      const url = 'http://api.trycatch.id/api/persons';
      fetch(url)
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: res.data,
            error: res.error || null,
          });
        })
        .catch(error => {
          this.setState({ error });
        });
    };

    render() {
      return (
          <FlatList
              data={this.state.data}
              ItemSeparatorComponent={this.renderSeparator}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                  <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} >
                    <ListItem style={styles.listaja} title={item.first_name} subtitle={item.phone_number} />
                  </TouchableNativeFeedback>
              )}
              containerStyle={{ borderBottomWidth: 0 }}
            />
      );
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
    Recent: { screen: nyobain_lagi },
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
  },
  listaja:{
    backgroundColor: '#fafafa',
    padding:10,
  }
});

AppRegistry.registerComponent('nyobain_lagi', () => SimpleApp);
