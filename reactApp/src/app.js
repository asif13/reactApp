import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
            firebase.initializeApp({
        apiKey: 'AIzaSyAzSRIgf5ko2MAqFHYYz0wq6a7ofPzoaTc',
        authDomain: 'reactapp-d33cf.firebaseapp.com',
        databaseURL: 'https://reactapp-d33cf.firebaseio.com',
        storageBucket: 'reactapp-d33cf.appspot.com',
        messagingSenderId: '416469883530'
    });
    }
    render() {
        return (
        <View>
        <Header headerText="Login" />
        <Text>App</Text>
        </View>
        );
    }
};

export default App;