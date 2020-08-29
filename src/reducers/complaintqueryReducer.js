import { REGISTER_COMPLAINT_QUERY } from '../Actions/Types';

const initialState = {

complaintqueries: [],
complaintquery: {}

};

export default function(state = initialState, action) {

switch(action.type) {

   case REGISTER_COMPLAINT_QUERY:

   return {

       ...state,
       complaintquery: action.payload

   };

   default:

   return state;

}
}