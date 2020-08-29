import axios from 'axios';
import { APPROVE_MOTIVATIONAL_VIDEO_POST_REQUEST, 
         GET_ERRORS,
         CLEAR_ERRORS, 
         GET_MOTIVATIONAL_VIDEO_POST_REQUESTS, 
         MOTIVATIONAL_VIDEO_POST_REQUESTS_LOADING, 
         DELETE_MOTIVATIONAL_VIDEO_POST_REQUEST } from '../../Actions/Types';

// Approve a Motivational Video Post Request

export const approveMotivationalVideoPostRequest = (_id) => dispatch => {

   dispatch(clearErrors());

   alert("Motivational Video approval request approved successfully")

 axios
 .put(`https://desolate-wave-36898.herokuapp.com/motivationalvideos/pending/${_id}`)
 .then(

   res => dispatch(getMotivationalVideoPostRequests())

//  dispatch({

//     type: APPROVE_MOTIVATIONAL_VIDEO_POST_REQUEST,
//     payload: res.data

//  })
 )

 .catch (err => 

 dispatch({

    type: GET_ERRORS,
   // payload: err.response.data
   payload: null

 })
 );

 };

// GET Motivational Video Posts Requests

export const getMotivationalVideoPostRequests = () => dispatch => {
dispatch(setMotivationalVideoPostRequestsLoading());
 axios
 .get('https://desolate-wave-36898.herokuapp.com/motivationalvideos/pending')
 .then(res => 

 dispatch({

   type: GET_MOTIVATIONAL_VIDEO_POST_REQUESTS,
   payload: res.data

 })
 )

 .catch (err => 

 dispatch({

   type: GET_MOTIVATIONAL_VIDEO_POST_REQUESTS,
   payload: null

 })
 );

};

// Delete Motivational Video Post Request

export const deleteMotivationalVideoPostRequest = _id => dispatch => {

   alert("Motivational Video approval request deleted successfully")

axios
.delete(`https://desolate-wave-36898.herokuapp.com/motivationalvideos/pending/${_id}`)
.then(

   res => dispatch(getMotivationalVideoPostRequests())

// dispatch({

//    type: DELETE_MOTIVATIONAL_VIDEO_POST_REQUEST,
//    payload: _id

// })
)

.catch (err => 

dispatch({

   type: GET_ERRORS,
   payload: err.response.data

})
);

};

// Set Motivational Video Post Requests Loading

export const setMotivationalVideoPostRequestsLoading = () => {

   return {

      type: MOTIVATIONAL_VIDEO_POST_REQUESTS_LOADING

   };
};

// Clear Errors

export const clearErrors = () => {

   return {

      type: CLEAR_ERRORS

   };
};