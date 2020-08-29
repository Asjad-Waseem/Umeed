import axios from 'axios';
import { GIVE_PSYCHOLOGIST_FEEDBACK, 
         GET_PSYCHOLOGIST_FEEDBACK,
         GET_ERRORS } from './Types';

// Give Psychologist Feedback

export const givePsychologistFeedback = (psychologistId, newFeedback) => dispatch => {

  alert("Feedback submitted successfully");

  axios
  .post(`https://desolate-wave-36898.herokuapp.com/feedback/${psychologistId}`, newFeedback)

  .then(res => 

   dispatch({

   type: GIVE_PSYCHOLOGIST_FEEDBACK,
   payload: res.data

   })

   )

  };

 // Get Feedback/Ratings against a specific Psychologist

  export const getPsychologistFeedback = (psychologistId) => dispatch => {

    axios
    .get(`https://desolate-wave-36898.herokuapp.com/feedback/${psychologistId}`)
    .then(res => 
  
      dispatch({
  
        type: GET_PSYCHOLOGIST_FEEDBACK,
        payload: res.data
    
      })
    
     )
    
     .catch(err => 
    
        dispatch({
    
            type: GET_PSYCHOLOGIST_FEEDBACK,
            payload: {}
    
        })
    
     );
    
     };
  

         
  

  