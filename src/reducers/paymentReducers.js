import { MAKE_PAYMENT_REQUEST,
         SELECT_TEXT_CHAT_SESSION,
         SELECT_VIDEO_CHAT_SESSION,
         CHECK_AVAILABLE_SLOTS } from '../Actions/Types';

const initialState = {

    payment: [],
    sessionDetails: '',
    serviceType: '',
    bookedSlots: '',
    // sessionDate: '',
    // slotBooked: ''

}

export default function(state = initialState, action) {

switch (action.type) {

    case MAKE_PAYMENT_REQUEST:

    return {

        ...state,
        payment: action.payload

    };

    case SELECT_TEXT_CHAT_SESSION:

    return {

        ...state,
        serviceType: action.payload

    };

    case SELECT_VIDEO_CHAT_SESSION:

    return {

    ...state,
    sessionDetails: action.payload

    };

    case CHECK_AVAILABLE_SLOTS:

    return {

        ...state,
        bookedSlots: action.payload
    }

    default:

        return state;

}

}

 