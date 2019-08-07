import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = ({ placeName, placeImage, onItemPressed }) => {
    console.log(placeName);
    return (
    <TouchableOpacity onPress={onItemPressed}>
        <View style={styles.listItem}>
            <Image source={placeImage} style={styles.imageStyle} />
            <Text>{placeName}</Text>            
        </View>
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        margin: 5,
        padding: 10,        
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageStyle: {
        marginRight: 10,
        width: 30,
        height: 30
    }
});

export default ListItem;
