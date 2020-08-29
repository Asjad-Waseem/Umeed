import { SUBMIT_PROGRESS_REPORT,
         GET_PROGRESS_REPORTS } from '../Actions/Types';

const initialState = {

    progressreports: '',
    response: ''

}

export default function(state = initialState, action) {

switch (action.type) {

    case SUBMIT_PROGRESS_REPORT:

    return {

        ...state,
        response: action.payload

    };

    case GET_PROGRESS_REPORTS:

        return {
    
            ...state,
            progressreports: action.payload
    
        };

    default:

        return state;

}

}