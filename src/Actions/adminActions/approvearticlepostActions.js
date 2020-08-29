import axios from 'axios';
import { APPROVE_ARTICLE_BLOG_POST_REQUEST, 
         GET_ERRORS,
         CLEAR_ERRORS, 
         GET_ARTICLE_BLOG_POST_REQUESTS, 
         ARTICLE_BLOG_POST_REQUESTS_LOADING, 
         DELETE_ARTICLE_BLOG_POST_REQUEST } from '../../Actions/Types';

// Approve a Motivational Article/Blog Post Request

export const approveArticleBlogPostRequest = (_id) => dispatch => {

   dispatch(clearErrors());

 axios
 .put(`https://desolate-wave-36898.herokuapp.com/motivationalBlogs/pending/${_id}`)
 .then(

   res => dispatch(getArticleBlogPostRequests())

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

// GET Motivational Article/Blog Posts Requests

export const getArticleBlogPostRequests = () => dispatch => {
dispatch(setArticleBlogPostRequestsLoading());
 axios
 .get('https://desolate-wave-36898.herokuapp.com/motivationalBlogs/pending')
 .then(res => 

 dispatch({

   type: GET_ARTICLE_BLOG_POST_REQUESTS,
   payload: res.data

 })
 )

 .catch (err => 

 dispatch({

   type: GET_ARTICLE_BLOG_POST_REQUESTS,
   payload: null

 })
 );

};

// Delete Article/Blog Post Request

export const deleteArticleBlogPostRequest = _id => dispatch => {

axios
.delete(`https://desolate-wave-36898.herokuapp.com/motivationalBlogs/pending/${_id}`)
.then(
   
   res => dispatch(getArticleBlogPostRequests())

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

// Set Motivational Article/Blog Post Requests Loading

export const setArticleBlogPostRequestsLoading = () => {

   return {

      type: ARTICLE_BLOG_POST_REQUESTS_LOADING

   };
};

// Clear Errors

export const clearErrors = () => {

   return {

      type: CLEAR_ERRORS

   };
};