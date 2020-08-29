import axios from 'axios';
import { SUBMIT_SUCCESS_STORY, 
         GET_SUCCESS_STORIES,
         GET_ERRORS } from './Types';

// Submit a Success Story

export const submitASuccessStory = (newSuccessStory, patientId) => dispatch => {

  axios
  .post(`https://desolate-wave-36898.herokuapp.com/writeSuccessStory/${patientId}`, newSuccessStory)

  .then(res => 

   dispatch({

   type: SUBMIT_SUCCESS_STORY,
   payload: res.data

   })

   )

  };

   // Get Success Stories against a specific Patient

   export const getSuccessStories = () => dispatch => {

    axios
    .get('https://desolate-wave-36898.herokuapp.com/writeSuccessStory/getApprovedSuccessStory')
    .then(res => 
  
      dispatch({
  
        type: GET_SUCCESS_STORIES,
        payload: res.data
    
      })
    
     )
    
     .catch(err => 
    
        dispatch({
    
            type: GET_SUCCESS_STORIES,
            payload: {}
    
        })
    
     );
    
     };

         


  