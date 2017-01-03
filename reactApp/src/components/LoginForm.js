import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };
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
                <CardSection>
                <Button title={'Log In !'} />
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
