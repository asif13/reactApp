import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
       const init = firebase.initializeApp({
        apiKey: 'AIzaSyAzSRIgf5ko2MAqFHYYz0wq6a7ofPzoaTc',
        authDomain: 'reactapp-d33cf.firebaseapp.com',
        databaseURL: 'https://reactapp-d33cf.firebaseio.com',
        storageBucket: 'reactapp-d33cf.appspot.com',
        messagingSenderId: '416469883530'
    });
    if (init == null) {
        console.log('init failed');
    } else {
        console.log('init passed');
        }
    }
    render() {
        return (
        <View>
        <Header headerText="Login" />
        <LoginForm />
        </View>
        );
    }
};

export default App;
