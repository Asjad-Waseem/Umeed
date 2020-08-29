// import { SET_CURRENT_USER } from '../Actions/Types';
import isEmpty from '../Validation/is-empty';
import { TEST_DISPATCH } from '../Actions/Types';

  const initialState = {

    isAuthenticated: false,
    user: {},
   
  };

 // const initialState = {};

  export default function(state = initialState, action){

    switch(action.type) {

        case TEST_DISPATCH:

        return{

            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload

        };

     //   case SET_CURRENT_USER:

       // return{

         //   ...state,
           // isAuthenticated: !isEmpty(action.payload),
           // user: action.payload
        
        // };

        default:

        return state;
        
    }


}