import axios from 'axios';
import { SUBMIT_PROGRESS_REPORT,
         GET_PROGRESS_REPORTS, 
         GET_ERRORS } from './Types';

// Submit a Progress Report

export const submitAProgressReport = (newReport, patientId) => dispatch => {

  axios
  .post(`https://desolate-wave-36898.herokuapp.com/progressReport/${patientId}`, newReport)

  .then(res => 

   dispatch({

   type: SUBMIT_PROGRESS_REPORT,
   payload: res.data

   })

   )

  };

  // Get Progress Reports against a specific Patient

  export const getProgressReports = (patientId) => dispatch => {

    axios
    .get(`https://desolate-wave-36898.herokuapp.com/progressReport/${patientId}`)
    .then(res => 
  
      dispatch({
  
        type: GET_PROGRESS_REPORTS,
        payload: res.data
    
      })
    
     )
    
     .catch(err => 
    
        dispatch({
    
            type: GET_PROGRESS_REPORTS,
            payload: {}
    
        })
    
     );
    
     };
  

         
  

  