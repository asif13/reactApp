import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.buttonStyles} onPress={onPress}>
        <Text style={styles.textStyle}> {title} </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyles: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export default Button;
