import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: false };
    componentWillMount() {
        firebase.initializeApp({
        apiKey: 'AIzaSyAzSRIgf5ko2MAqFHYYz0wq6a7ofPzoaTc',
        authDomain: 'reactapp-d33cf.firebaseapp.com',
        databaseURL: 'https://reactapp-d33cf.firebaseio.com',
        storageBucket: 'reactapp-d33cf.appspot.com',
        messagingSenderId: '416469883530'
    });
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({ loggedIn: true });
        } else {
            this.setState({ loggedIn: false });
        }
    });
    }

    renderContent() {
        if (this.state.loggedIn) {
            return (
                <CardSection>
                <Button title="Log out" />
                </CardSection>
            );
        }
        return <LoginForm />;
    }

    render() {
        return (
        <View>
        <Header headerText="Login" />
        {this.renderContent()}
        </View>
        );
    }
};

export default App;
