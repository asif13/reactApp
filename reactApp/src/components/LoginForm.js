import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };
    onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
            this.setState({ error: 'Auth failed' });
        });
    });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    placeholder="user@gmail.com"
                    label="email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                     />
                </CardSection>
                 <CardSection>
                    <Input 
                    // placeholder="user@gmail.com"
                    secureTextEntry
                    label="password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                     />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                <Button title={'Log In !'} onPress={this.onButtonPress.bind(this)} />
                </CardSection>
            </Card>
        );
    }
}

const styles = {
errorTextStyle: {
    fontSize: 13,
    alignSelf: 'center',
    color: 'red',
    }
};
export default LoginForm;
