import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../../../Common/Spinner';
import { getPatientPaymentRequests } from '../../../../../Actions/adminActions/approvepatientpaymentActions';
import ApprovePatientPaymentsFeedRequest from '../ApprovePatientPaymentsRequests/ApprovePatientPaymentsFeedRequest';

class ApprovePatientPaymentsRequests extends Component {

    componentDidMount() {

        this.props.getPatientPaymentRequests();

    }
  render() {

    const { paymentrequests, loading } = this.props.paymentrequest;

    console.log(paymentrequests);

    console.log(this.props.paymentrequest);

    let paymentContent;
    
    if(paymentrequests === null || loading) {

        paymentContent = <Spinner />

    } else {

        paymentContent = <ApprovePatientPaymentsFeedRequest paymentrequests = {paymentrequests} />

    }

    return (
      <div className = "feed">

          <div className = "container">

              <div className = "row">

                  <div className = "col-md-12">
                   
                   {paymentContent}

                  </div>

              </div>
          </div>
        
      </div>
    )
  }
}

ApprovePatientPaymentsRequests.propTypes = {

    getPatientPaymentRequests: PropTypes.func.isRequired,    
    paymentrequest: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

paymentrequest: state.paymentrequest

});

export default connect(mapStateToProps, { getPatientPaymentRequests })(ApprovePatientPaymentsRequests);
