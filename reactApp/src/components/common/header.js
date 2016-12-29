import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => (
        <View style={styles.viewStyle}>
        <Text>{props.headerText}</Text>
        </View>
    );

export { Header };

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.2,
        // position: 0,
        // elevation: 'realative'
    },
    textStyle: {
        fontSize: 20
    }
};
