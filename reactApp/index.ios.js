// 'use strict';
// var React = require('react');
// var ReactNative = require('react-native');
//
// var styles = ReactNative.StyleSheet.create({
//   text : {
//     color : 'black',
//     backgroundColor : 'white'
//     fontSize : 30,
//     margin : 80
//   }
// });
//
// class PropertyFinderApp extends React.Component{
//   render(){
//     return React.createElement(ReactNative.Text,{styles.text},"Hellow world");
//   }
//   ReactNative.AppRegistry.registerComponent('PropertyFinder',function(){return PropertyFinderApp});
// }

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
  View
} from 'react-native';

export default class reactApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          NOPE
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
  constructor(props) {
   super(props);

   this.state = {
     wallsJSON: [],
     isLoading: true
   };
 }

fetchWallsJSON() {
  var url = 'http://localhost:1337/images';
   fetch(url)
     .then( response => response.json() )
     .then( jsonData => {
       console.log(jsonData);
     })
 .catch( error => console.log("Fetch error " + error) );
    }
  componentDidMount(){
   this.fetchWallsJSON();
   }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactApp', () => reactApp);
