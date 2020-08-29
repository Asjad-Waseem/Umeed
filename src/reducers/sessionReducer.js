import { GET_PSYCHOLOGIST_SESSIONS, 
         GET_PATIENT_SESSIONS } from '../Actions/Types';
import { findAllByTestId } from '@testing-library/react';

const initialState = {

    psychologistSessions: null,
    patientSessions: null,
    loading: false

}

export default function(state = initialState, action) {

switch (action.type) {

    case GET_PSYCHOLOGIST_SESSIONS:

    return {

        ...state,
        psychologistSessions: action.payload,
        loading: false

    };

    case GET_PATIENT_SESSIONS:

    return {

        ...state,
        patientSessions: action.payload,
        loading: false

    };

    default:

        return state;

}

}