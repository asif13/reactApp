import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
    console.log('onButtonPress');
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        console.log('1');
        this.onLoginSuccess(); 
    }
    ).catch(() => {
          console.log('2');
            firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
                  console.log('3');
                 this.onLoginSuccess(); 
            }
                ).catch(() => {
                console.log('4');
                this.onLoginFail(); 
        });
    });
    }

    onLoginSuccess() {
        console.log('logged In');
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }
    onLoginFail() {
        console.log('login failed');
        this.setState({
            error: 'Authenticattion failed', loading: false
        });
    }
    renderButton() {
    if (this.state.loading) {
        return <Spinner />;
    } 
        return (
         <Button title={'Log In !'} onPress={this.onButtonPress.bind(this)} />
        );
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
                {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}


const styles = {
errorTextStyle: {
    fontSize: 13,
    alignSelf: 'center',
    color: 'red'
    }
};

export default LoginForm;
