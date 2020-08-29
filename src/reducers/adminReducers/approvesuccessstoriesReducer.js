import { GET_SUCCESS_STORY_REQUESTS,
         SUCCESS_STORY_REQUESTS_LOADING,
         APPROVE_SUCCESS_STORY_REQUEST, 
         DELETE_SUCCESS_STORY_REQUEST } from '../../Actions/Types';

const initialState = {

successstoriespostrequests: [],
successstoriespostrequest: {},
loading: false

};

export default function(state = initialState, action) {

switch(action.type) {

case SUCCESS_STORY_REQUESTS_LOADING:

return {

  ...state,
  loading: true

};

case GET_SUCCESS_STORY_REQUESTS:

return {

  ...state,
  successstoriespostrequests: action.payload,
  loading: false

};

case APPROVE_SUCCESS_STORY_REQUEST:

return {

  ...state,
  successstoriespostrequests: [action.payload, ...state.successstoriespostrequests]
};

case DELETE_SUCCESS_STORY_REQUEST:

return {

  ...state,
  successstoriespostrequests: state.successstoriespostrequests.filter(post => post._id !== action.payload)

}

default:

return state

}
}