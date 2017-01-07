import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header, Button, CardSection, Spinner } from './components/common';

const ReduxApp = () =>  {
    return (
        <Provider store={createStore(reducers)}>
        <View>
        <Header headerText="Home" />
        </View>
        </Provider>
    );
};
export default ReduxApp;
