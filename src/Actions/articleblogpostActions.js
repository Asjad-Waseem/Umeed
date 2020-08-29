import axios from 'axios';
import { SUBMIT_ARTICLE_BLOG_POST, 
         GET_ERRORS,
         CLEAR_ERRORS, 
         GET_APPROVED_ARTICLE_BLOG_POSTS, 
         APPROVED_ARTICLE_BLOG_POST_LOADING, 
         DELETE_ARTICLE_BLOG_POST } from './Types';

// Submit an Motivational Article/Blog Post Request

export const submitArticleBlogPosts = (newArticleBlogPostData, _id) => dispatch => {

   dispatch(clearErrors());

   alert("Your Article/Blog request has been received. Kindly wait for Admin's Verification")

 axios
 .post(`https://desolate-wave-36898.herokuapp.com/motivationalBlogs/${_id}`, newArticleBlogPostData)
 .then(res => 

 dispatch({

    type: SUBMIT_ARTICLE_BLOG_POST,
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

// GET Approved Motivational Article/Blog Posts

export const getApprovedArticleBlogPosts = () => dispatch => {
dispatch(setApprovedArticleBlogPostsLoading());
 axios
 .get('https://desolate-wave-36898.herokuapp.com/motivationalBlogs/approved')
 .then(res => 

 dispatch({

   type: GET_APPROVED_ARTICLE_BLOG_POSTS,
   payload: res.data

 })
 )

 .catch (err => 

 dispatch({

   type: GET_APPROVED_ARTICLE_BLOG_POSTS,
   payload: null

 })
 );

};

// Delete Approved Article/Blog Post

export const deleteArticleBlogPost = _id => dispatch => {

   alert("Your Article/Blog post has been deleted successfully");

axios
.delete(`https://desolate-wave-36898.herokuapp.com/motivationalBlogs/deleteBlog/${_id}`)
.then(res => 

dispatch({

   type: DELETE_ARTICLE_BLOG_POST,
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

export const addArticleBlogPostLike = (_id, patientId) => dispatch => {

  axios
  .put(`https://desolate-wave-36898.herokuapp.com/motivationalBlogs/like/${_id}/${patientId}`)
  .then( 

  // alert(res)

  // console.log(res.data)
     
   res => dispatch(getApprovedArticleBlogPosts())

  )
  
  .catch (err => 
  
  dispatch({
  
     type: GET_ERRORS,
     payload: err.response.data
  
  })
   );
  
  };

  export const dislikeArticleBlogPost = (_id, patientId) => dispatch => {

    axios
    .put(`https://desolate-wave-36898.herokuapp.com/motivationalBlogs/dislike/${_id}/${patientId}`)
    .then(res => dispatch(getApprovedArticleBlogPosts())
  
    )
    
    .catch (err => 
    
    dispatch({
    
       type: GET_ERRORS,
       payload: err.response.data
    
    })
    );
    
    };

// Add a Comment on Motivational Article/Blog

export const addArticleBlogPostComment = (postId, _id, comment) => dispatch => {

   dispatch(clearErrors());

 axios
 .put(`https://desolate-wave-36898.herokuapp.com/motivationalBlogs/comment/${postId}/${_id}`, comment)

 .then(res => 

   dispatch(getApprovedArticleBlogPosts())

 );

 };

 // Delete a Comment on Motivational Article/Blog

export const deleteArticleBlogPostComment = (blogId, commentId) => dispatch => {

 axios
 .put(`https://desolate-wave-36898.herokuapp.com/motivationalBlogs/Removecomment/${blogId}/${commentId}`)
 .then(res => 

   res => dispatch(getApprovedArticleBlogPosts())

//  dispatch({

//     type: GET_APPROVED_ARTICLE_BLOG_POSTS,
//     payload: res.data

//  })
//  )

//  .catch (err => 

//  dispatch({

//     type: GET_ERRORS,
//     payload: err.response.data

//  })
 );

 };

// Set Approved Motivational Article/Blog Posts Loading

export const setApprovedArticleBlogPostsLoading = () => {

   return {

      type: APPROVED_ARTICLE_BLOG_POST_LOADING

   };
};

// Clear Errors

export const clearErrors = () => {

   return {

      type: CLEAR_ERRORS

   };
};