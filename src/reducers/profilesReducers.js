const initialState = {

    profiles: {},
    loading: false

};

export default function(state = initialState, action){


     //   case SET_CURRENT_USER:

        return{

            ...state,
           // isAuthenticated: !isEmpty(action.payload),
           // user: action.payload
        
         };
        
    }





 