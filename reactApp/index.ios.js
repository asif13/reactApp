'use strict';
var randManager = require('./RandManager.js');
var Swiper = require('react-native-swiper');
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
const NUM_WALLPAPERS = 5;
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
    <ActivityIndicator
        animating={this.state.animating}
        style={[styles.centering, {height: 80}]}
        size="large"
      />
         <Text style={{color: '#fff'}}>Contacting</Text>

  </View>
   );
 }

 renderResults() {

   var {wallsJSON, isLoading} = this.state;
   if (!isLoading) {
     return (
   <View style = {styles.loadingDone}>
       <Swiper>
         {wallsJSON.map((wallpaper, index) => {
           return (
             <Text style={styles.welcome} key={index}>
               {wallpaper.author}
             </Text>
           );
         })}
       </Swiper>
      </View>
     );
   }
 }

fetchWallsJSON() {
  var url = 'https://unsplash.it/list';
   fetch(url)
     .then( response => response.json() )
     .then( jsonData => {
      //  console.log(jsonData);
      var randomIds = randManager.uniqueRandomNumbers(NUM_WALLPAPERS,0,jsonData.length);
      var walls = [];
      randomIds.forEach(randomId => {
        walls.push(jsonData[randomId]);
      })
      this.setState({isLoading: false,
        wallsJSON : [].concat(walls)
      }); //update isLoading
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
   loadingDone: {
	flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('reactApp', () => reactApp);
