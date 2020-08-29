import axios from 'axios';
import { SELECT_TEXT_CHAT_SESSION, 
         SELECT_VIDEO_CHAT_SESSION,
         CHECK_AVAILABLE_SLOTS,
         GET_ERRORS } from './Types';

// Book a Text Chat Session

export const selectTextChatSession = (serviceType = 'Text Chat') => dispatch => {

  console.log(serviceType);

   dispatch({

   type: SELECT_TEXT_CHAT_SESSION,
   payload: serviceType

   })

  };

  // Book a Video Chat Session

 export const selectVideoChatSession = (profileID, serviceType = 'Video Chat', sessionDate, sb) => dispatch => {

  const sessionDetails = {

    profileID : profileID,
    serviceType : serviceType,
    sessionDate : sessionDate,
    sb : sb

  }
   // alert(sessionDate);
  
  console.log(sb);
  console.log(sessionDate);
  console.log(serviceType);
  console.log(profileID);

  
      dispatch({
   
      type: SELECT_VIDEO_CHAT_SESSION,
      payload: sessionDetails
   
      })
   
      };

export const checkAvailableSlots = (Data, PsychologistId) => dispatch => {

  console.log(Data);

  axios
  .post(`https://desolate-wave-36898.herokuapp.com/makePayment/checkslots/${PsychologistId}`, Data)

  .then(res => 
        
  dispatch({

  type: CHECK_AVAILABLE_SLOTS,
  payload: res.data
         
  })

  )
         
  };
  