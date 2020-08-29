import { SUBMIT_SUCCESS_STORY,
         GET_SUCCESS_STORIES } from '../Actions/Types';

const initialState = {

    response: '',
    successstories: ''

}

export default function(state = initialState, action) {

switch (action.type) {

    case SUBMIT_SUCCESS_STORY:

    return {

        ...state,
        response: action.payload

    };

    case GET_SUCCESS_STORIES:

    return {
    
         ...state,
         successstories: action.payload
    
    };

    default:

        return state;

}

}