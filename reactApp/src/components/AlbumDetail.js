import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';

const AlbumDetail = ({ album }) => {
     const { title, artist, thumbnail_image } = album;
    return (
        <Card>
            <CardSection>
            <View style={styles.thumbnailContainerStyle}>
                <Image style={styles.thumbnail_style} source={{ uri: thumbnail_image }} />
            </View>
            <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnail_style: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail;
