import { 
    ADD_PLACE, 
    DELETE_PLACE
} from './actionType';

export const addPlace = (placeName) => ({
    type: ADD_PLACE,
    payload: placeName
});

export const deletePlace = () => ({
    type: DELETE_PLACE
});
