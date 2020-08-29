import { GET_TOP_RATED_PROFILES } from '../Actions/Types';

const initialState = {

    profiles: null,
    loading: false

}

export default function(state = initialState, action) {

switch (action.type) {

    case GET_TOP_RATED_PROFILES:

    return {

        ...state,
        profiles: action.payload,
        loading: false

    };

    default:

        return state;

}

}