import axios from 'axios';
import { SUBMIT_DAILY_HEALTH_EXERCISE_BLOG_POST, 
         GET_ERRORS,
         CLEAR_ERRORS, 
         GET_APPROVED_DAILY_HEALTH_EXERCISE_BLOG_POSTS, 
         APPROVED_DAILY_HEALTH_EXERCISE_BLOG_POST_LOADING, 
         DELETE_DAILY_HEALTH_EXERCISE_BLOG_POST } from './Types';

// Submit an Motivational Article/Blog Post Request

export const submitDailyHealthExerciseBlogPost = (newDailyHealthExercisePostData, _id) => dispatch => {

   dispatch(clearErrors());

   alert("Your daily health exercise article/blog request has been received. Kindly wait for Admin's verification")

 axios
 .post(`https://desolate-wave-36898.herokuapp.com/healthexercises/${_id}`, newDailyHealthExercisePostData)
 .then(res => 

 dispatch({

    type: SUBMIT_DAILY_HEALTH_EXERCISE_BLOG_POST,
    payload: res.data

 })
 )

 .catch (err => 

 dispatch({

    type: GET_ERRORS,
    payload: err.response.data

 })
 );

 };

// GET Approved Daily Health Exercise Posts

export const getApprovedDailyHealthExerciseBlogPosts = () => dispatch => {
dispatch(setApprovedDailyHealthExerciseBlogPostsLoading());
 axios
 .get('https://desolate-wave-36898.herokuapp.com/healthexercises/approved')
 .then(res => 

 dispatch({

   type: GET_APPROVED_DAILY_HEALTH_EXERCISE_BLOG_POSTS,
   payload: res.data

 })
 )

 .catch (err => 

 dispatch({

   type: GET_APPROVED_DAILY_HEALTH_EXERCISE_BLOG_POSTS,
   payload: null

 })
 );

};

// Delete Approved Daily Health Exercise Post

export const deleteDailyHealthExerciseBlogPost = _id => dispatch => {

   alert("Your Daily Health Exercise post has been deleted successfully");

axios
.delete(`https://desolate-wave-36898.herokuapp.com/healthExercises/deleteExercise/${_id}`)
.then(res => 

dispatch({

   type: DELETE_DAILY_HEALTH_EXERCISE_BLOG_POST,
   payload: _id

})
)

.catch (err => 

dispatch({

   type: GET_ERRORS,
   payload: err.response.data

})
);

};

// Add Like

export const addDailyHealthExerciseBlogPostLike = (_id, patientId) => dispatch => {

  axios
  .put(`https://desolate-wave-36898.herokuapp.com/healthExercises/like/${_id}/${patientId}`)
  .then(res => dispatch(getApprovedDailyHealthExerciseBlogPosts())

  )
  
  .catch (err => 
  
  dispatch({
  
     type: GET_ERRORS,
     payload: err.response.data
  
  })
  );
  
  };

  // Remove a Like

  export const dislikeDailyHealthExerciseBlogPost = (_id, patientId) => dispatch => {

    axios
    .put(`https://desolate-wave-36898.herokuapp.com/healthExercises/dislike/${_id}/${patientId}`)
    .then(res => dispatch(getApprovedDailyHealthExerciseBlogPosts())
  
    )
    
    .catch (err => 
    
    dispatch({
    
       type: GET_ERRORS,
       payload: err.response.data
    
    })
    );
    
    };

// Add a Comment on Motivational Article/Blog

export const addDailyHealthExerciseBlogPostComment = (postId, _id, comment) => dispatch => {

   dispatch(clearErrors());

 axios
 .put(`https://desolate-wave-36898.herokuapp.com/healthExercises/comment/${postId}/${_id}`, comment)
 .then(res => 

   dispatch(getApprovedDailyHealthExerciseBlogPosts())

//  dispatch({

//     type: GET_APPROVED_DAILY_HEALTH_EXERCISE_BLOG_POSTS,
//     payload: res.data

//  })
  )

 .catch (err => 

 dispatch({

    type: GET_ERRORS,
    payload: err.response.data

 })
 );

 };

 // Delete a Comment on Daily Health Exercise Blog Post

export const deleteDailyHealthExerciseBlogPostComment = (blogId, commentId) => dispatch => {

 axios
 .put(`https://desolate-wave-36898.herokuapp.com/healthExercises/Removecomment/${blogId}/${commentId}`)
 .then(

   res => dispatch(getApprovedDailyHealthExerciseBlogPosts())

//  dispatch({

//     type: GET_APPROVED_DAILY_HEALTH_EXERCISE_BLOG_POSTS,
//     payload: res.data

//  })
 )

 .catch (err => 

 dispatch({

    type: GET_ERRORS,
    payload: err.response.data

 })
 );

 };

// Set Approved Daily Health Exercise Posts Loading

export const setApprovedDailyHealthExerciseBlogPostsLoading = () => {

   return {

      type: APPROVED_DAILY_HEALTH_EXERCISE_BLOG_POST_LOADING

   };
};

// Clear Errors

export const clearErrors = () => {

   return {

      type: CLEAR_ERRORS

   };
};