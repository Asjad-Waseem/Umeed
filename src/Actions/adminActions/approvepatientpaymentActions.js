import axios from 'axios';
import { APPROVE_PATIENT_PAYMENT_REQUEST, 
         GET_ERRORS,
         CLEAR_ERRORS, 
         GET_PATIENT_PAYMENT_REQUESTS, 
         DELETE_PATIENT_PAYMENT_REQUEST } from '../../Actions/Types';

// Approve a Patient Payment Request

export const approvePatientPaymentRequest = (paymentId, meetingDetails) => dispatch => {

   dispatch(clearErrors());

   // alert(JSON.stringify(newArticleBlogPostData, null, 2)); 
   
   // alert(newArticleBlogPostData);

   // alert(newArticleBlogPostData.title);

   alert(paymentId);

   alert(meetingDetails.meetingDetails);

 axios
 .put(`https://desolate-wave-36898.herokuapp.com/makePayment/pending/${paymentId}`, meetingDetails)
 .then(res => 

 dispatch({

    type: APPROVE_PATIENT_PAYMENT_REQUEST,
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

// GET Patient Payment Requests

export const getPatientPaymentRequests = () => dispatch => {

  axios
 .get('https://desolate-wave-36898.herokuapp.com/makePayment/pending')
 .then(res => 

 dispatch({

   type: GET_PATIENT_PAYMENT_REQUESTS,
   payload: res.data

 })
 )

 .catch (err => 

 dispatch({

   type: GET_PATIENT_PAYMENT_REQUESTS,
   payload: null

 })
 );

};

// Delete Patient Payment Request

export const deletePatientPaymentRequest = _id => dispatch => {

axios
.delete(`https://desolate-wave-36898.herokuapp.com/makePayment/pending/${_id}`)
.then(res => 

dispatch({

   type: DELETE_PATIENT_PAYMENT_REQUEST,
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