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
  View,
  ActivityIndicatorIOS
} from 'react-native';

export default class reactApp extends Component {
  render() {
    var {isLoading} = this.state;
    if(isLoading)
      return this.renderLoadingMessage();
    else
      return this.renderResults();
  }
  constructor(props) {
   super(props);

   this.state = {
     wallsJSON: [],
     isLoading: true
   };
 }
 renderLoadingMessage() {
   return (

  <View style={styles.loadingContainer}>
         <Text style={{color: '#fff'}}>Contacting Unsplash</Text>

  </View>
   );
 }

 renderResults() {
   return (

 <View>
       <Text>
         Data loaded
       </Text>

  </View>
   );
 }
fetchWallsJSON() {
  var url = 'https://unsplash.it/list';
   fetch(url)
     .then( response => response.json() )
     .then( jsonData => {
       console.log(jsonData);
       this.setState({isLoading: false}); //update isLoading

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
   loadingContainer: {
	flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
});

AppRegistry.registerComponent('reactApp', () => reactApp);
