import axios from 'axios';
import { REGISTER_COMPLAINT_QUERY, GET_ERRORS } from './Types';

// Register A New Complaint/Query

export const registerComplaintQuery = (newComplaintQuery, _id) => dispatch => {

    // alert(JSON.stringify(newComplaintQuery, null, 2)); 

    console.log(_id);

axios
.post(`https://desolate-wave-36898.herokuapp.com/complaints/${_id}`, newComplaintQuery)

.then(res => 

dispatch({

   type: REGISTER_COMPLAINT_QUERY,
   payload: res.data

})
)

.catch (err => 

dispatch({

   type: GET_ERRORS,
   payload: err.response.data

})
);

 };