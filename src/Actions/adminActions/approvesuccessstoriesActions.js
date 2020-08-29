import axios from 'axios';
import { APPROVE_SUCCESS_STORY_REQUEST, 
         GET_ERRORS,
         CLEAR_ERRORS, 
         GET_SUCCESS_STORY_REQUESTS, 
         SUCCESS_STORY_REQUESTS_LOADING, 
         DELETE_SUCCESS_STORY_REQUEST } from '../../Actions/Types';

// Approve a Success Story Request

export const approveSuccessStoryPostRequest = (_id) => dispatch => {

   dispatch(clearErrors());

   alert("Success Story Post Request has been approved successfully");

 axios
 .put(`https://desolate-wave-36898.herokuapp.com/writeSuccessStory/approvePendingSuccessStory/${_id}`)
 .then(

   res => dispatch(getSuccessStoryPostRequests())

//  dispatch({

//     type: APPROVE_ARTICLE_BLOG_POST_REQUEST,
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

// GET Success Story Post Requests

export const getSuccessStoryPostRequests = () => dispatch => {
dispatch(setSuccessStoryPostRequestsLoading());
 axios
 .get('https://desolate-wave-36898.herokuapp.com/writeSuccessStory/getPendingSuccessStory')
 .then(res => 

 dispatch({

   type: GET_SUCCESS_STORY_REQUESTS,
   payload: res.data

 })
 )

 .catch (err => 

 dispatch({

   type: GET_SUCCESS_STORY_REQUESTS,
   payload: null

 })
 );

};

// Delete Success Story Post Request

export const deleteSuccessStoryPostRequest = _id => dispatch => {

   alert("Success Story Post Request has been deleted successfully");

axios
.delete(`https://desolate-wave-36898.herokuapp.com/writeSuccessStory/approvePendingSuccessStory/${_id}`)
.then(
   
   res => dispatch(getSuccessStoryPostRequests())

// dispatch({

//    type: DELETE_ARTICLE_BLOG_POST_REQUEST,
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

// Set Success Story Post Requests Loading

export const setSuccessStoryPostRequestsLoading = () => {

   return {

      type: SUCCESS_STORY_REQUESTS_LOADING

   };
};

// Clear Errors

export const clearErrors = () => {

   return {

      type: CLEAR_ERRORS

   };
};