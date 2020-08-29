import { GET_MOTIVATIONAL_VIDEO_POST_REQUESTS,
         MOTIVATIONAL_VIDEO_POST_REQUESTS_LOADING,
         APPROVE_MOTIVATIONAL_VIDEO_POST_REQUEST, 
         DELETE_MOTIVATIONAL_VIDEO_POST_REQUEST } from '../../Actions/Types';

const initialState = {

motivationalvideopostrequests: [],
motivationalvideopostrequest: {},
loading: false

};

export default function(state = initialState, action) {

switch(action.type) {

case MOTIVATIONAL_VIDEO_POST_REQUESTS_LOADING:

return {

  ...state,
  loading: true

};

case GET_MOTIVATIONAL_VIDEO_POST_REQUESTS:

return {

  ...state,
  motivationalvideopostrequests: action.payload,
  loading: false

};

case APPROVE_MOTIVATIONAL_VIDEO_POST_REQUEST:

return {

  ...state,
  motivationalvideopostrequests: [action.payload, ...state.motivationalvideopostrequests]
};

case DELETE_MOTIVATIONAL_VIDEO_POST_REQUEST:

return {

  ...state,
  motivationalvideopostrequests: state.motivationalvideopostrequests.filter(post => post._id !== action.payload)

}

default:

return state

}
}