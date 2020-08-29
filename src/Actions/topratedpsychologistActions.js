import axios from 'axios';
import { GET_TOP_RATED_PROFILES } from './Types';

// Get Top Rated Psychologist Profiles

export const getTopRatedPsychologistProfiles = () => dispatch => {

  axios
  .get('https://desolate-wave-36898.herokuapp.com/feedback/psychologists/topRated')
  .then(res => 

    dispatch({

      type: GET_TOP_RATED_PROFILES,
      payload: res.data
  
    })
  
   )
  
   .catch(err => 
  
      dispatch({
  
          type: GET_TOP_RATED_PROFILES,
          payload: {}
  
      })
  
   );
  
   };


  

