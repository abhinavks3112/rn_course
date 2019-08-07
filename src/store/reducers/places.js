import { 
    ADD_PLACE, 
    DELETE_PLACE
} from '../actions/actionType';

const initialState = {
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return { 
                ...state, 
                places: state.places.concat({ 
                key: (`id- ${Math.random().toString(36).substr(2, 16)}`), 
                name: action.payload,
                image: { uri: 
                    'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
                } 
            }) };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place) => 
                        (place.key !== state.selectedPlace.key))
                };        
        default: return state;
    }
};

export default reducer;
