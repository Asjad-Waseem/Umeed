import { GET_PENDING_PSYCHOLOGIST_PROFILES,
         GET_PENDING_MOTIVATIONAL_SPEAKER_PROFILES,
         GET_PENDING_MOTIVATIONAL_WRITER_PROFILES,
         GET_PENDING_HEALTH_GYM_INSTRUCTOR_PROFILES } from '../../Actions/Types';

const initialState = {

    profiles: null,
    loading: false

}

export default function(state = initialState, action) {

switch (action.type) {

    case GET_PENDING_PSYCHOLOGIST_PROFILES:

        return {
    
            ...state,
            profiles: action.payload,
            loading: false
    
        };

    case GET_PENDING_MOTIVATIONAL_SPEAKER_PROFILES:

    return {

        ...state,
        profiles: action.payload,
        loading: false

    };

    case GET_PENDING_MOTIVATIONAL_WRITER_PROFILES:

        return {
    
            ...state,
            profiles: action.payload,
            loading: false
    
        };

    case GET_PENDING_HEALTH_GYM_INSTRUCTOR_PROFILES:

        return {
    
            ...state,
            profiles: action.payload,
            loading: false
    
        };

    default:

        return state;

}

}