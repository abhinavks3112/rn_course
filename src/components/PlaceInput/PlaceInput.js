import React, { Component } from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';

class PlaceInput extends Component {
    state = { 
        placeName: ''      
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {         
            return;
        }
        
        this.props.onPlaceAdded(this.state.placeName);
    }
    
    render() {
        return (
            <View style={styles.inputContainer}>
               <TextInput
                placeholder='An Awesome Place'
                style={styles.textInputStyle}
                onChangeText={(placeName) => this.setState({ placeName })}
                value={this.state.placeName}
               />               
            <Button title='Add' style={styles.buttonStyle} onPress={this.placeSubmitHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {  
        width: '100%',
        //backgroundColor: 'blue',   
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'      
    },
    textInputStyle: {
       // backgroundColor: 'yellow',
        width: '70%'
    },
    buttonStyle: {
       width: '30%'
    },
});

export default PlaceInput;
