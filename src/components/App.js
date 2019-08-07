import React, { Component } from 'react';
import { 
    createAppContainer
} from 'react-navigation';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import AuthScreen from '../screens/Auth/Auth';
import MainTabs from '../screens/MainTabs/MainTabs';

const store = configureStore();

console.log(store.getState());

const AppContainer = createAppContainer(MainTabs);

class App extends Component {
    render() {
        return (
        <Provider store={store}>
            <AppContainer />;
        </Provider>
        );      
    }
}

export default App;


/* 
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import PlaceInput from './PlaceInput/PlaceInput';
import PlacesList from './PlacesList/PlacesList';
import PlaceDetail from './PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from '../store/actions/index';

class App extends Component { 
    placeAddedHandler = placeName => (
        this.props.onAddPlace(placeName)
    )

    placeSelectedHandler = index => (
        this.props.onSelectPlace(index)
    )

    placeDeletedHandler = () => (
       this.props.onDeletePlace()
    )

    modalCloseHandler = () => (
        this.props.onDeselectPlace()
    )

    render() {        
        return (
        <View style={styles.container}>    
            <PlaceDetail 
            selectedPlace={this.props.selectedPlace} 
            onItemDeleted={this.placeDeletedHandler}
            onModalClosed={this.modalCloseHandler}
            />             
            <PlaceInput onPlaceAdded={this.placeAddedHandler} />
            <PlacesList 
            places={this.props.places} 
            onItemSelected={this.placeSelectedHandler} 
            />     
           
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,       
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }  
});

const mapStateToProps = state => ({
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
});

const mapDispatchToProps = dispatch => ({
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
 */
