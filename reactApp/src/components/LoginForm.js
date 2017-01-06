import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading : false };
    onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
             if (error == null){
                    console.log(' user logged in');
            }else{
                console.log(' user logged in error');

            }
            firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    console.log('The password is too weak.');
                } else {
                    console.log(errorMessage);
                }
                console.log(error);
                if (error == null){
                    console.log(' user created');
                }else{
                    console.log(' user creation in error');
                }
                this.setState({ error: 'Auth failed',loading: true });
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
                {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

renderButton() {
    if (this.state.loading){
        return <Spinner size = "small" />;
    }else{
        return(
         <Button title={'Log In !'} onPress={this.onButtonPress.bind(this)}></Button>
        );
    }
};

const styles = {
errorTextStyle: {
    fontSize: 13,
    alignSelf: 'center',
    color: 'red',
    }
};

export default LoginForm;
