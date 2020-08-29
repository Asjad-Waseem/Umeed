import axios from 'axios';
import { GET_PENDING_PSYCHOLOGIST_PROFILES } from '../../Actions/Types';
import { GET_PENDING_MOTIVATIONAL_SPEAKER_PROFILES } from '../../Actions/Types';
import { GET_PENDING_MOTIVATIONAL_WRITER_PROFILES } from '../../Actions/Types';
import { GET_PENDING_HEALTH_GYM_INSTRUCTOR_PROFILES } from '../../Actions/Types';
import { APPROVE_PROFILE } from '../../Actions/Types';
import { DELETE_PROFILE_APPROVAL_REQUEST } from '../../Actions/Types';
import { GET_ERRORS, CLEAR_ERRORS } from '../../Actions/Types';

// Get Pending Psychologist Profiles

export const getPendingPsychologistProfiles = () => dispatch => {

    axios
    .get('https://desolate-wave-36898.herokuapp.com/pendingAccounts/Psychologists')
    .then(res => 

       // console.log(res.data)

      dispatch({

        type: GET_PENDING_PSYCHOLOGIST_PROFILES,
        payload: res.data
    
      })
    
     )
    
     .catch(err => 
    
        dispatch({
    
            type: GET_PENDING_PSYCHOLOGIST_PROFILES,
            payload: {}
    
        })
    
     );
    
     };

     // Get Pending Motivational Speaker Profiles

      export const getPendingMotivationalSpeakerProfiles = () => dispatch => {

      axios
      .get('https://desolate-wave-36898.herokuapp.com/pendingAccounts/Speakers')
      .then(res =>   
  
        dispatch({
  
          type: GET_PENDING_MOTIVATIONAL_SPEAKER_PROFILES,
          payload: res.data
      
        })
      
       )
      
       .catch(err => 
      
          dispatch({
      
              type: GET_PENDING_MOTIVATIONAL_SPEAKER_PROFILES,
              payload: {}
      
          })
      
       );
      
       };

       // Get Pending Motivational Writer Profiles

       export const getPendingMotivationalWriterProfiles = () => dispatch => {

        axios
        .get('https://desolate-wave-36898.herokuapp.com/pendingAccounts/Writers')
        .then(res =>   
    
          dispatch({
    
            type: GET_PENDING_MOTIVATIONAL_WRITER_PROFILES,
            payload: res.data
        
          })
        
         )
        
         .catch(err => 
        
            dispatch({
        
                type: GET_PENDING_MOTIVATIONAL_WRITER_PROFILES,
                payload: {}
        
            })
        
         );
        
         };

         // Get Pending Health/Gym Instructor Profiles

         export const getPendingHealthGymInstructorsProfiles = () => dispatch => {

          axios
          .get('https://desolate-wave-36898.herokuapp.com/pendingAccounts/Instructors')
          .then(res =>   
      
            dispatch({
      
              type: GET_PENDING_HEALTH_GYM_INSTRUCTOR_PROFILES,
              payload: res.data
          
            })
          
           )
          
           .catch(err => 
          
              dispatch({
          
                  type: GET_PENDING_HEALTH_GYM_INSTRUCTOR_PROFILES,
                  payload: {}
          
              })
          
           );
          
           };

// Approve a Profile Approval Request

export const approveProfile = (_id) => dispatch => {

    dispatch(clearErrors());

    alert("Account approval request has been approved")
  
  axios
  .put(`https://desolate-wave-36898.herokuapp.com/pendingAccounts/${_id}`)

  .then( res =>
 
  dispatch({
 
     type: APPROVE_PROFILE,
     payload: res.data
 
  })
  )
 
  .catch (err => 
 
  dispatch({
 
     type: GET_ERRORS,
     payload: null
 
  })
  );
 
  };

// Delete Profile Approval Request

export const deleteProfileApprovalRequest = _id => dispatch => {

   alert("Account approval request has been deleted")

    axios
    .delete(`https://desolate-wave-36898.herokuapp.com/pendingAccounts/${_id}`)

    .then(res => 
    
    dispatch({
    
       type: DELETE_PROFILE_APPROVAL_REQUEST,
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
 
// Clear Errors

export const clearErrors = () => {

    return {
 
       type: CLEAR_ERRORS
 
    };
 };

  

