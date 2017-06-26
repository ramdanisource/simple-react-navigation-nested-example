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

  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ChatScreen from './ChatScreen';
import { TabNavigator } from "react-navigation";
import { List, ListItem } from "react-native-elements";

let data = [{"id":1,"first_name":"Javon","last_name":"Jakubowski","email":"trevion76@gmail.com","phone_number":"+1-667-653-0631","address":"5994 Cyril Plain\nJohnpaulbury, MT 22853","city":"Laurenbury","job_title":"Biological Scientist","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":2,"first_name":"Emie","last_name":"Toy","email":"timmy75@huels.net","phone_number":"1-797-649-8796 x15622","address":"2543 Allene Extensions Apt. 078\nPort Rae, CO 40674","city":"New Reneborough","job_title":"Biochemist or Biophysicist","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":3,"first_name":"Marcelo","last_name":"Bruen","email":"lamar.orn@gmail.com","phone_number":"(480) 864-0885 x1708","address":"8679 Orion Port\nMohrside, WV 66557-5371","city":"East Titus","job_title":"Radiologic Technologist and Technician","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":4,"first_name":"Howard","last_name":"Kuhlman","email":"allison55@yahoo.com","phone_number":"+1 (686) 459-5531","address":"44395 Shawn Isle Apt. 378\nWisozkside, WA 91799","city":"Lake Nico","job_title":"Rental Clerk","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":5,"first_name":"Emmanuel","last_name":"Leffler","email":"streich.ona@schowalter.biz","phone_number":"567.903.9933","address":"26589 Fritsch Fort Suite 682\nKevenstad, MD 11073-7196","city":"West Marquisebury","job_title":"Manager of Weapons Specialists","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":6,"first_name":"Ebony","last_name":"Mitchell","email":"cassin.louvenia@goyette.com","phone_number":"825.952.0224","address":"5700 Tremblay Parkways Suite 982\nRutherfordland, LA 07710","city":"Kristopherhaven","job_title":"Food Tobacco Roasting","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":7,"first_name":"Sonia","last_name":"Schmitt","email":"joel.kunde@brekke.org","phone_number":"1-865-372-2651","address":"993 Ortiz Plaza Suite 018\nJeremyview, NY 37560-5884","city":"Lake Leone","job_title":"Waitress","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":8,"first_name":"Marilie","last_name":"Medhurst","email":"eerdman@shields.net","phone_number":"1-219-344-5661 x780","address":"6359 Moses Ports\nEast Monroemouth, TN 30835-2285","city":"Hoppeville","job_title":"Financial Services Sales Agent","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":9,"first_name":"Roosevelt","last_name":"Crona","email":"epadberg@leuschke.com","phone_number":"390.785.2404 x778","address":"61252 Arne Freeway\nEast Dexter, NC 46795","city":"Domingohaven","job_title":"Lay-Out Worker","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":10,"first_name":"Carlotta","last_name":"Dickinson","email":"darrin.kerluke@gmail.com","phone_number":"(406) 669-0366 x204","address":"6458 Adella Roads Apt. 386\nColestad, CO 82733","city":"North Aiyanafurt","job_title":"Production Manager","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":11,"first_name":"Guillermo","last_name":"Daniel","email":"greta.kerluke@hotmail.com","phone_number":"254.729.6974 x139","address":"832 Jammie Rest\nYundttown, NY 73698-9115","city":"Port Javier","job_title":"Gaming Cage Worker","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":12,"first_name":"Preston","last_name":"Orn","email":"gutkowski.dayton@hotmail.com","phone_number":"1-449-493-5769","address":"27232 Batz Cape\nJovanyhaven, LA 34111","city":"Ebertmouth","job_title":"Vending Machine Servicer","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":13,"first_name":"Juliana","last_name":"Beahan","email":"kunze.abagail@hotmail.com","phone_number":"1-605-276-5945 x1790","address":"543 Carter Walk\nNew Nathenport, UT 85850-5054","city":"Rempelbury","job_title":"Animal Care Workers","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":14,"first_name":"Kenton","last_name":"Emmerich","email":"alexys.west@dibbert.info","phone_number":"+1-779-739-1423","address":"934 Schneider Ferry Apt. 142\nAnastasialand, WA 04080-3837","city":"Lake Dion","job_title":"Data Processing Equipment Repairer","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":15,"first_name":"Ludwig","last_name":"Wilderman","email":"kuhlman.alexa@yahoo.com","phone_number":"772.296.4595 x43245","address":"124 Rolfson Squares Suite 410\nLemkefort, MS 26723","city":"Lehnerport","job_title":"Optical Instrument Assembler","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":16,"first_name":"Earnestine","last_name":"Hodkiewicz","email":"bryce47@yahoo.com","phone_number":"+1-968-866-9433","address":"5378 Kemmer Summit\nMcCulloughberg, OH 23396-0067","city":"East Gene","job_title":"Preschool Education Administrators","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":17,"first_name":"Janis","last_name":"Schiller","email":"toy95@feeney.com","phone_number":"284.287.8727 x369","address":"5358 Myrtis Freeway Suite 445\nKrajcikland, MT 97562","city":"West Vita","job_title":"Gas Processing Plant Operator","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":18,"first_name":"Shanon","last_name":"Jacobi","email":"vpaucek@oberbrunner.com","phone_number":"(864) 531-4756","address":"4988 Sophie Club\nNew Quincy, TX 90882-5348","city":"Hintzview","job_title":"Gaming Dealer","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":19,"first_name":"Lorine","last_name":"Beahan","email":"casper.florian@morar.com","phone_number":"+1.981.868.5903","address":"2397 Cordelia Harbors Suite 346\nLake Lenna, MS 36174","city":"Stiedemannfurt","job_title":"Infantry Officer","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":20,"first_name":"Alexandrine","last_name":"Howe","email":"luettgen.colleen@hotmail.com","phone_number":"+1-404-253-4400","address":"2745 Morris Loop Suite 687\nBernhardside, NM 65808","city":"Charlotteland","job_title":"Earth Driller","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":21,"first_name":"Reynold","last_name":"Koelpin","email":"faye15@hotmail.com","phone_number":"+1-813-721-1898","address":"309 Auer Field\nAlvahton, AK 00204-8341","city":"West Ahmed","job_title":"Healthcare Practitioner","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":22,"first_name":"Lue","last_name":"Maggio","email":"boehm.meaghan@hotmail.com","phone_number":"(425) 220-9500 x889","address":"22114 Myles Flats\nSchillerstad, KY 81987","city":"Elseburgh","job_title":"Painting Machine Operator","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":23,"first_name":"Winona","last_name":"Leuschke","email":"elsa.stark@reynolds.com","phone_number":"+1-762-307-4519","address":"664 Omer Roads Apt. 468\nBreitenbergfurt, IA 59961-7607","city":"Lake Annamarieport","job_title":"Sculptor","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":24,"first_name":"Carolyn","last_name":"Walsh","email":"laila.kunze@batz.com","phone_number":"+1-914-266-8869","address":"81629 Littel Circle\nEast Kittyview, NV 83234","city":"Hicklebury","job_title":"Precision Etcher and Engraver","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"},{"id":25,"first_name":"Anthony","last_name":"Trantow","email":"hbins@hotmail.com","phone_number":"(437) 816-0048","address":"3909 Nolan Ports Apt. 191\nEast Zack, LA 36330-5430","city":"Elizabethhaven","job_title":"Underground Mining","created_at":"2017-06-15 16:30:03","updated_at":"2017-06-15 16:30:03"}]

export default class nyobain_lagi extends Component {

    constructor (props) {
      super(props)
      this.state = { data: Array.from(data) }
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

    render() {
      return (
        <List >
        <FlatList
            data={this.state.data}
            ItemSeparatorComponent={this.renderSeparator}
            keyExtractor={(item, index) => item.id}
            renderItem={({item, index}) =><ListItem title={item.first_name} subtitle={item.email}/> }
          />
          </List>

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
  listItem:{
    flex: 1,
    padding:0,
    margin:0,
    backgroundColor: '#fafafa'
  },
  listaja:{
    padding:20,
  }
});

AppRegistry.registerComponent('nyobain_lagi', () => SimpleApp);
