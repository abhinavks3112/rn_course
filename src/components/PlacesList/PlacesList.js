import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlacesList = ({ places, onItemSelected }) => (
        <FlatList
        style={styles.listContainer}
        data={places}
        renderItem={(place) => (
            <ListItem         
            placeName={place.item.name} 
            placeImage={place.item.image}
            onItemPressed={() => 
                onItemSelected(place.item.key)}
            />
        )}       
        />
);


const styles = StyleSheet.create({
    listContainer: {
        width: '100%'
    }
});

export default PlacesList;
