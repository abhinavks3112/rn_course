import React from 'react';
import { 
    Modal,
    View, 
    Text, 
    Image, 
    Button, 
    StyleSheet, 
    TouchableOpacity, 
    Platform 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlaceDetail = ({ selectedPlace, onItemDeleted, onModalClosed }) => {    
    let modelContent = null;
    if (selectedPlace) { 
        console.log('In PlaceDeatil modal', selectedPlace.name);      
        modelContent = (
        <View>
             <Image source={selectedPlace.image} style={styles.imageStyle} />
             <Text style={styles.textStyle}>{selectedPlace.name}</Text>   
        </View>);
    }
    return (
        <Modal         
        style={styles.modalStyle}
        animationType='slide'
        visible={selectedPlace !== null}
        onRequestClose={onModalClosed}
        backdropOpacity={Platform.OS === 'android' ? 0.1 : 0.7}
        >
            <View style={styles.modalStyle}>            
                   {modelContent}  
                <View>
                    <TouchableOpacity onPress={onItemDeleted} >
                        <View style={styles.deleteButtonStyle}>
                            <Icon size={24} name='delete' color='red' />
                        </View>
                    </TouchableOpacity>
                    <Button title='Close' onPress={onModalClosed} />
                </View>                
            </View>
        </Modal>
        
    );
};

const styles = StyleSheet.create({
    modalStyle: {
        margin: 22
    },
    imageStyle: {
        width: '100%',
        height: 200
    },
    textStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18
    },
    deleteButtonStyle: {
        alignItems: 'center'
    }
    
});

export default PlaceDetail;
