import axios from 'axios';
import { GET_PSYCHOLOGIST_SESSIONS,
         GET_PATIENT_SESSIONS } from './Types';

// Get Psychologist Sessions

export const getPsychologistSessions = (psychologistId) => dispatch => {

  axios
  .get(`https://desolate-wave-36898.herokuapp.com/getPatientList/activeSession/${psychologistId}`)
  .then(res => 

    dispatch({

      type: GET_PSYCHOLOGIST_SESSIONS,
      payload: res.data
  
    })
  
   )
  
   .catch(err => 
  
      dispatch({
  
          type: GET_PSYCHOLOGIST_SESSIONS,
          payload: {}
  
      })
  
   );
  
   };

   // Get Patient Sessions

export const getPatientSessions = (patientId) => dispatch => {

  axios
  .get(`https://desolate-wave-36898.herokuapp.com/getPsychologistList/activeSession/${patientId}`)
  .then(res => 

    dispatch({

      type: GET_PATIENT_SESSIONS,
      payload: res.data
  
    })
  
   )
  
   .catch(err => 
  
      dispatch({
  
          type: GET_PATIENT_SESSIONS,
          payload: {}
  
      })
  
   );
  
   };


