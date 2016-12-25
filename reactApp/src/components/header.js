import React from 'react';
import { Text, View } from 'react-native';

const Header = () => (
        <View style={styles.viewStyle}>
        <Text>Albums</Text>
        </View>
    );

export default Header;

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15
    },
    textStyle: {
        fontSize: 20
    }
};
