import axios from 'axios';
import { GET_REGISTERED_PATIENT_PROFILES } from './Types';
import { GET_REGISTERED_PSYCHOLOGIST_PROFILES } from './Types';
import { GET_PSYCHOLOGIST_PROFILES } from './Types';
import { GET_MOTIVATIONAL_SPEAKER_PROFILES } from './Types';
import { GET_MOTIVATIONAL_WRITER_PROFILES } from './Types';
import { GET_HEALTH_GYM_INSTRUCTOR_PROFILES } from './Types';

// Get Registered Patient Profiles

export const getRegisteredPatientProfiles = (psychologistId) => dispatch => {

  axios
  .get(`https://desolate-wave-36898.herokuapp.com/getPatientList/${psychologistId}`)
  .then(res => 

    dispatch({

      type: GET_REGISTERED_PATIENT_PROFILES,
      payload: res.data
  
    })
  
   )
  
   .catch(err => 
  
      dispatch({
  
          type: GET_REGISTERED_PATIENT_PROFILES,
          payload: {}
  
      })
  
   );
  
   };

   // Get Registered Psychologist Profiles

export const getRegisteredPsychologistProfiles = (patientId) => dispatch => {

  axios
  .get(`https://desolate-wave-36898.herokuapp.com/getPsychologistList/${patientId}`)
  .then(res => 

    dispatch({

      type: GET_REGISTERED_PSYCHOLOGIST_PROFILES,
      payload: res.data
  
    })
  
   )
  
   .catch(err => 
  
      dispatch({
  
          type: GET_REGISTERED_PSYCHOLOGIST_PROFILES,
          payload: {}
  
      })
  
   );
  
   };


// Get Psychologist Profiles

export const getPsychologistProfiles = () => dispatch => {

    axios
    .get('https://desolate-wave-36898.herokuapp.com/getAccount/Psychologists')
    .then(res => 

       // console.log(res.data)


      dispatch({

        type: GET_PSYCHOLOGIST_PROFILES,
        payload: res.data
    
      })
    
     )
    
     .catch(err => 
    
        dispatch({
    
            type: GET_PSYCHOLOGIST_PROFILES,
            payload: {}
    
        })
    
     );
    
     };

     // Get Motivational Speaker Profiles

      export const getMotivationalSpeakersProfiles = () => dispatch => {

      axios
      .get('https://desolate-wave-36898.herokuapp.com/getAccount/Speakers')
      .then(res =>   
  
        dispatch({
  
          type: GET_MOTIVATIONAL_SPEAKER_PROFILES,
          payload: res.data
      
        })
      
       )
      
       .catch(err => 
      
          dispatch({
      
              type: GET_MOTIVATIONAL_SPEAKER_PROFILES,
              payload: {}
      
          })
      
       );
      
       };

       // Get Motivational Writer Profiles

       export const getMotivationalWritersProfiles = () => dispatch => {

        axios
        .get('https://desolate-wave-36898.herokuapp.com/getAccount/Writers')
        .then(res =>   
    
          dispatch({
    
            type: GET_MOTIVATIONAL_WRITER_PROFILES,
            payload: res.data
        
          })
        
         )
        
         .catch(err => 
        
            dispatch({
        
                type: GET_MOTIVATIONAL_WRITER_PROFILES,
                payload: {}
        
            })
        
         );
        
         };

         // Get Health/Gym Instructor Profiles

         export const getHealthGymInstructorsProfiles = () => dispatch => {

          axios
          .get('https://desolate-wave-36898.herokuapp.com/getAccount/Instructors')
          .then(res =>   
      
            dispatch({
      
              type: GET_HEALTH_GYM_INSTRUCTOR_PROFILES,
              payload: res.data
          
            })
          
           )
          
           .catch(err => 
          
              dispatch({
          
                  type: GET_HEALTH_GYM_INSTRUCTOR_PROFILES,
                  payload: {}
          
              })
          
           );
          
           };

  

