import { GET_PATIENT_PAYMENT_REQUESTS,
         APPROVE_PATIENT_PAYMENT_REQUEST, 
         DELETE_PATIENT_PAYMENT_REQUEST } from '../../Actions/Types';

const initialState = {

paymentrequests: [],
paymentrequest: {},
loading: false

};

export default function(state = initialState, action) {

switch(action.type) {

case GET_PATIENT_PAYMENT_REQUESTS:

return {

  ...state,
  paymentrequests: action.payload,
  loading: false

}

case APPROVE_PATIENT_PAYMENT_REQUEST:

return {

  ...state,
  paymentrequests: [action.payload, ...state.paymentrequests]
};

case DELETE_PATIENT_PAYMENT_REQUEST:

return {

  ...state,
  paymentrequests: state.paymentrequests.filter(paymentrequest => paymentrequest._id !== action.payload)

}

default:

return state

}
}