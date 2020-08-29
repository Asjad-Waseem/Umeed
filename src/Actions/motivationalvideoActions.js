import axios from 'axios';
import { SUBMIT_MOTIVATIONAL_VIDEO, 
         GET_ERRORS,
         CLEAR_ERRORS, 
         GET_APPROVED_MOTIVATIONAL_VIDEOS,
         APPROVED_MOTIVATIONAL_VIDEOS_LOADING,
         DELETE_MOTIVATIONAL_VIDEO} from './Types';

// Submit an Motivational Video Post Request

export const submitMotivationalVideo = (newMotivationalVideoPostRequest, _id) => dispatch => {

   dispatch(clearErrors());

   alert("Your video request has been received. Kindly wait for Admin's Verfication")

    // alert(JSON.stringify(newMotivationalVideoPostRequest, null, 2)); 
   
    // alert(_id);

  axios
  .post(`https://desolate-wave-36898.herokuapp.com/motivationalvideos/${_id}`, newMotivationalVideoPostRequest)
  .then(res => 

   dispatch({

   type: SUBMIT_MOTIVATIONAL_VIDEO,
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

  // GET Approved Motivational Videos

export const getApprovedMotivationalVideos = () => dispatch => {
    dispatch(setApprovedMotivationalVideosLoading());
     axios
     .get('https://desolate-wave-36898.herokuapp.com/motivationalvideos/approved')
     .then(res => 
    
     dispatch({
    
       type: GET_APPROVED_MOTIVATIONAL_VIDEOS,
       payload: res.data
    
     })
     )
    
     .catch (err => 
    
     dispatch({
    
       type: GET_APPROVED_MOTIVATIONAL_VIDEOS,
       payload: null
    
     })
     );
    
    };
    
    // Delete Approved Motivational Video
    
    export const deleteMotivationalVideo = _id => dispatch => {

      alert("Your Motivational Video post has been deleted successfully");
    
    axios
    .delete(`https://desolate-wave-36898.herokuapp.com/motivationalVideos/deleteVideo/${_id}`)
    .then(res => 
    
    dispatch({
    
       type: DELETE_MOTIVATIONAL_VIDEO,
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
    
    export const addMotivationalVideoLike = (_id, patientId) => dispatch => {
    
      axios
      .put(`https://desolate-wave-36898.herokuapp.com/motivationalVideos/like/${_id}/${patientId}`)
      .then(res => dispatch(getApprovedMotivationalVideos())
    
      )
      
      .catch (err => 
      
      dispatch({
      
         type: GET_ERRORS,
         payload: err.response.data
      
      })
      );
      
      };
    
      export const dislikeMotivationalVideo = (_id, patientId) => dispatch => {
    
        axios
        .put(`https://desolate-wave-36898.herokuapp.com/motivationalVideos/dislike/${_id}/${patientId}`)
        .then(res => dispatch(getApprovedMotivationalVideos())
      
        )
        
        .catch (err => 
        
        dispatch({
        
           type: GET_ERRORS,
           payload: err.response.data
        
        })
        );
        
        };
    
    // Add a Comment on Motivational Video
    
    export const addMotivationalVideoComment = (videoId, _id, comment) => dispatch => {
    
       dispatch(clearErrors());
            
     axios
     .put(`https://desolate-wave-36898.herokuapp.com/motivationalVideos/comment/${videoId}/${_id}`, comment)
    
     .then( res => 

      
   dispatch(getApprovedMotivationalVideos())
    
   //   dispatch({
    
   //      type: GET_APPROVED_MOTIVATIONAL_VIDEOS,
   //      payload: res.data
    
   //   })
     )
    
   //   .catch (err => 
    
   //   dispatch({
    
   //      type: GET_ERRORS,
   //      payload: err.response.data
    
   //   })
   //   );
    
     };
    
     // Delete a Comment on Motivational Video
    
    export const deleteMotivationalVideoComment = (videoId, commentId) => dispatch => {
        
     axios
     .put(`https://desolate-wave-36898.herokuapp.com/motivationalVideos/Removecomment/${videoId}/${commentId}`)
     .then(

      res => dispatch(getApprovedMotivationalVideos())
    
   //   dispatch({
    
   //      type: GET_APPROVED_MOTIVATIONAL_VIDEOS,
   //      payload: res.data
    
   //   })
     )
    
     .catch (err => 
    
     dispatch({
    
        type: GET_ERRORS,
        payload: err.response.data
    
     })
     );
    
     };
    
    // Set Approved Motivational Videos Loading
    
    export const setApprovedMotivationalVideosLoading = () => {
    
       return {
    
          type: APPROVED_MOTIVATIONAL_VIDEOS_LOADING
    
       };
    };

 // Clear Errors

export const clearErrors = () => {

    return {
 
       type: CLEAR_ERRORS
 
    };
 };