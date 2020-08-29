import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ApprovePatientPaymentItemRequest from './ApprovePatientPaymentItemRequest';

class ApprovePatientPaymentsFeedRequest extends Component {

    render() {

     const { paymentrequests } = this.props; 

    console.log(paymentrequests);

     return paymentrequests.map( paymentrequest => <ApprovePatientPaymentItemRequest key = {paymentrequest._id} paymentrequest = {paymentrequest} /> )
   
  }
}

ApprovePatientPaymentsFeedRequest.propTypes = {

    paymentrequests: PropTypes.array.isRequired

}

export default ApprovePatientPaymentsFeedRequest;
