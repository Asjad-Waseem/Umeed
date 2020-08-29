import axios from 'axios';
import { APPROVE_DAILY_HEALTH_EXERCISE_POST_REQUEST, 
         GET_ERRORS,
         CLEAR_ERRORS, 
         GET_DAILY_HEALTH_EXERCISE_POST_REQUESTS, 
         DAILY_HEALTH_EXERCISE_POST_REQUESTS_LOADING, 
         DELETE_DAILY_HEALTH_EXERCISE_POST_REQUEST } from '../../Actions/Types';

// Approve a Daily Health Exercise Post Request

export const approveDailyHealthExercisePostRequest = (_id) => dispatch => {

   dispatch(clearErrors());

   alert("Daily Health Exercise Post Approval Request approved successfully")

 axios
 .put(`https://desolate-wave-36898.herokuapp.com/healthexercises/pending/${_id}`)
 .then(

   res => dispatch(getDailyHealthExercisePostRequests())

//  dispatch({

//     type: APPROVE_DAILY_HEALTH_EXERCISE_POST_REQUEST,
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

// GET Daily Health Exercise Post Requests

export const getDailyHealthExercisePostRequests = () => dispatch => {
dispatch(setDailyHealthExercisePostRequestsLoading());
 axios
 .get('https://desolate-wave-36898.herokuapp.com/healthexercises/pending')
 .then(res => 

 dispatch({

   type: GET_DAILY_HEALTH_EXERCISE_POST_REQUESTS,
   payload: res.data

 })
 )

 .catch (err => 

 dispatch({

   type: GET_DAILY_HEALTH_EXERCISE_POST_REQUESTS,
   payload: null

 })
 );

};

// Delete Daily Health Exercise Post Request

export const deleteDailyHealthExercisePostRequest = _id => dispatch => {

   alert("Daily Health Exercise Post Approval Request Deleted successfully")

axios
.delete(`https://desolate-wave-36898.herokuapp.com/healthexercises/pending/${_id}`)
.then(

   res => dispatch(getDailyHealthExercisePostRequests())

// dispatch({

//    type: DELETE_DAILY_HEALTH_EXERCISE_POST_REQUEST,
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

// Set Daily Health Exercise Post Requests Loading

export const setDailyHealthExercisePostRequestsLoading = () => {

   return {

      type: DAILY_HEALTH_EXERCISE_POST_REQUESTS_LOADING

   };
};

// Clear Errors

export const clearErrors = () => {

   return {

      type: CLEAR_ERRORS

   };
};