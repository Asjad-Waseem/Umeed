import { GET_DAILY_HEALTH_EXERCISE_POST_REQUESTS,
    DAILY_HEALTH_EXERCISE_POST_REQUESTS_LOADING,
    APPROVE_DAILY_HEALTH_EXERCISE_POST_REQUEST, 
    DELETE_DAILY_HEALTH_EXERCISE_POST_REQUEST } from '../../Actions/Types';

const initialState = {

dailyhealthexercisepostrequests: [],
dailyhealthexercisepostrequest: {},
loading: false

};

export default function(state = initialState, action) {

switch(action.type) {

case DAILY_HEALTH_EXERCISE_POST_REQUESTS_LOADING:

return {

  ...state,
  loading: true

};

case GET_DAILY_HEALTH_EXERCISE_POST_REQUESTS:

return {

  ...state,
  dailyhealthexercisepostrequests: action.payload,
  loading: false

};

case APPROVE_DAILY_HEALTH_EXERCISE_POST_REQUEST:

return {

  ...state,
  dailyhealthexercisepostrequests: [action.payload, ...state.dailyhealthexercisepostrequests]
};

case DELETE_DAILY_HEALTH_EXERCISE_POST_REQUEST:

return {

  ...state,
  dailyhealthexercisepostrequests: state.dailyhealthexercisepostrequests.filter(post => post._id !== action.payload)

}

default:

return state

}
}