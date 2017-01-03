import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { text: '' };
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    label="email"
                    value={this.state.text}
                    onChangeText={text => this.setState({ text })}
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
