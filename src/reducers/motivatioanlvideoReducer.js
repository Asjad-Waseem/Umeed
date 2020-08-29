import { SUBMIT_MOTIVATIONAL_VIDEO, 
         GET_APPROVED_MOTIVATIONAL_VIDEOS,
         APPROVED_MOTIVATIONAL_VIDEOS_LOADING, 
         DELETE_MOTIVATIONAL_VIDEO } from '../Actions/Types';

const initialState = {

motivationalvideos: [],
motivationalvideo: {},
loading: false

};

export default function(state = initialState, action) {

switch(action.type) {

   case APPROVED_MOTIVATIONAL_VIDEOS_LOADING:

   return {

       ...state,
       loading: true

   };

   case GET_APPROVED_MOTIVATIONAL_VIDEOS:

   return {

       ...state,
       motivationalvideos: action.payload,
       loading: false

   };

   case SUBMIT_MOTIVATIONAL_VIDEO:

   return {

       ...state,
       motivationalvideos: [action.payload, ...state.motivationalvideos]
   };

   case DELETE_MOTIVATIONAL_VIDEO:

   return {

       ...state,
       motivationalvideos: state.motivationalvideos.filter(video => video._id !== action.payload)

   }

   default:

   return state

}
}