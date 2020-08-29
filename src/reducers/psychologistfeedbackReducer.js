import { GIVE_PSYCHOLOGIST_FEEDBACK, 
         GET_PSYCHOLOGIST_FEEDBACK } from '../Actions/Types';

const initialState = {

psychologistfeedbacks: '',
response: ''

}

export default function(state = initialState, action) {

switch (action.type) {

case GIVE_PSYCHOLOGIST_FEEDBACK:

return {

   ...state,
   response: action.payload

};

case GET_PSYCHOLOGIST_FEEDBACK:

   return {

       ...state,
       psychologistfeedbacks: action.payload

   };

default:

   return state;

}

}