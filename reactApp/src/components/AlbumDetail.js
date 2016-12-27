import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';

const AlbumDetail = (props) => (
        <Card>
            <CardSection>
            <View></View>
            <View style={styles.headerContentStyle}>
                <Text>{props.album.title}</Text>
                <Text>{props.album.artist}</Text>
            </View>
            </CardSection>
        </Card>
    );

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
};

export default AlbumDetail;
