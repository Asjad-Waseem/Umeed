 import { GET_ERRORS, SET_CURRENT_USER } from './Types';
 import { TEST_DISPATCH } from './Types';
 import axios from 'axios';
 import setAuthToken from '../Utils/setAuthToken';
 import jwt_decode from 'jwt-decode';
import store from '../store';
import { GET_PROFILES, PROFILE_LOADING } from './Types';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import { MAKE_PAYMENT_REQUEST } from './Types';

//Register User

export const registerUser = (newUser, history) => dispatch => {

  if(newUser.userRole === "Patient") {

    alert("Congratulations! Your account has been created successfully");

  }

  else {

    alert("Your account approval request has been received. Kindly wait for Admin's Verification");

  }

       axios.post('https://desolate-wave-36898.herokuapp.com/signup', newUser)

            .then(res => history.push('/login'))
            .catch(err => 

                dispatch({

                    type: GET_ERRORS,
                    payload: err.response.data

                })
            );
        
};

    // Login user - Get user token
 export const loginUser = (userData, history) => dispatch => {

    // const DATA= [];

     axios.post("https://desolate-wave-36898.herokuapp.com/login", userData)

     .then(res => {

       // console.log(res.data);

        dispatch(TEST_DISPATCH(res.data));

    });

    function TEST_DISPATCH (value) {

       // console.log(value);

        return{

            type: "TEST_DISPATCH",
            payload: value

        }

    };

   // const DATA = res.data;
   
       // history.push('/Dashboard');

        // Save to local storage

      // const { token } = res.data;

        // Set token to local storage

      // localStorage.setItem('jwtToken', token);

        // Set token to Auth header

       // setAuthToken(token);

        // Decode token to get user data

       // const decoded = jwt_decode(token);
        
        // Set current user

        // dispatch(setCurrentUser(decoded));

       // dispatch(TEST_DISPATCH(DATA));

     // })

      // .catch(err =>
        
       // dispatch({

         //   type: GET_ERRORS,
           // payload: null
           // payload: err.response.data
           // payload: err.response

        // })

        // );

    };

    // Set logged in user

   // export const setCurrentUser = (decoded) => {

     //   return{

       //     type: SET_CURRENT_USER,
         //   payload: decoded

       // };
        
   // };
        
    // Log user out

   // export const logoutUser = () => dispatch => {

   export const logoutUser = history => dispatch => {

    // history.push('/Login');

    window.location.href = '/Login';

   }
      
    // Remove token from localStorage

   // localStorage.removeItem('jwtToken');

    // Remove auth header for future requests

   // setAuthtoken(false);

    // Set Current User to {} which will set isAuthenticated to false

   // dispatch(setCurrentUser({}));

   // }

   // Edit Account Info

   export const updateAccountDetails = (updateAccountInfo, history) => dispatch => {

    alert(JSON.stringify(updateAccountInfo, null, 2));

    console.log(updateAccountInfo)

   }

      // dispatch(GET_PROFILES(res.data));

   // });

     // function GET_PROFILES (value) {

     // console.log(value);

     // return{

       // type: "GET_PROFILES",
      // payload: value


   // }

   // }; 
     
     // dispatch({

       // type: GET_PROFILES,
       // payload: res.data
    
    // })

    // })

    // .catch(err => 

     // dispatch({
  
        // type: GET_PROFILES,
         // payload: null
  
     // })
  
  // );

   // }

   // Make a Payment Request

export const makepaymentRequest = (newPayment, psychologistId) => dispatch => {

  //  alert(JSON.stringify(newPayment, null, 2)); 
  // alert(newPayment.paymentMethod)
  // alert(psychologistId);
  // alert(newPayment.sessionDate);
  // alert(newPayment.patientId);
  // alert(newPayment.accountTitle);
  // alert(newPayment.accountNo);
  // alert(newPayment.serviceType);
  // alert(newPayment.amount);
  // alert(newPayment.paymentDate);
  // alert(newPayment.paymentTime);
  // alert(newPayment.sessionDate);
  // alert(newPayment.sessionTiming);
  // alert(newPayment.paymentScreenShotProof);
  //   console.log(profileID);

  //  console.log(newPayment.paymentScreenShotProof);

   axios.post(`https://desolate-wave-36898.herokuapp.com/makePayment/${psychologistId}`, newPayment)

        .then(res => 

        dispatch({

         type: MAKE_PAYMENT_REQUEST,
         payload: res.data

        })
        )
        // .catch(err => 

        //     dispatch({

        //         type: GET_ERRORS,
        //         payload: err.response.data

        //     })
       // );
   
};

