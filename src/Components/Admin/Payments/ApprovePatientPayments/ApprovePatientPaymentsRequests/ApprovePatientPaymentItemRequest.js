import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { approvePatientPaymentRequest } from '../../../../../Actions/adminActions/approvepatientpaymentActions';
import { deletePatientPaymentRequest } from '../../../../../Actions/adminActions/approvepatientpaymentActions';
import MediaQuery from 'react-responsive';

class ApprovePatientPaymentItemRequest extends Component {

  onDeleteClick(_id) {

  this.props.deletePatientPaymentRequest(_id);
  
}

onApproveClick(_id) {

  const meetingDetails = {

    meetingDetails : ''

  } 

    this.props.approvePatientPaymentRequest(_id, meetingDetails);

}

    render() {

      const { paymentrequest, auth } = this.props;

    return (

      <div className="card card-body mb-3">
              <div className="row">
                <div className="col-md-2">

                <MediaQuery maxDeviceWidth={600}>
                <div className="col-2">
                <img
                  className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
                  src={paymentrequest.paymentScreenShotProof}
                  alt="No Image"
                  style={{ borderRadius: "50%", height: "32px", width: "32px" }}
                />
                </div>
                </MediaQuery>

                <MediaQuery minDeviceWidth={601} maxDeviceWidth={768}>
                <div className="col-2">
                <img
                  className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
                  src={paymentrequest.paymentScreenShotProof}
                  alt="No Image"
                  style={{ borderRadius: "50%", height: "50px", width: "50px" }}
                />  
                </div>
                </MediaQuery>

                <MediaQuery minDeviceWidth={769} maxDeviceWidth={900}>
                <div className="col-2">
                <img
                  className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
                  src={paymentrequest.paymentScreenShotProof}
                  alt="No Image"
                  style={{ borderRadius: "50%", height: "75px", width: "75px" }}
                />
                </div>
                </MediaQuery>

                <MediaQuery minDeviceWidth={900} maxDeviceWidth={1024}>
                <div className="col-2">
                <img
                  className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
                  src={paymentrequest.paymentScreenShotProof}
                  alt="No Image"
                  style={{
                    borderRadius: "50%",
                    height: "100px",
                    width: "100px",
                  }}
                />
                </div>
                </MediaQuery>

                <MediaQuery minDeviceWidth={1025}>
                <div className="col-2">
                <img
                  className="img-responsive"
                  src={paymentrequest.paymentScreenShotProof}
                  alt="No Image"
                  style={{
                    borderRadius: "50%",
                    height: "150px",
                    width: "150px",
                  }}
                />    
                </div>
                </MediaQuery>

                </div>

                <div className="col-md-10">

                  <h4>

                  Payment Method: {paymentrequest.paymentMethod} 
                  
                  </h4>

                  <p className="lead"> Payment Date: {paymentrequest.paymentDate} </p>

                  <p className="lead"> Payment Time: {paymentrequest.paymentTime} </p>

                  <p className="lead"> Amount: Pkr. {paymentrequest.amount} /- </p>

                  <Link to = {`/ApprovePatientPayments/${paymentrequest._id}`}>View Complete Transaction Details </Link> 

                  <button onClick = {this.onApproveClick.bind(this, paymentrequest._id)} type="button" className="btn btn-success mr-1">
 
                  Approve

                  </button>
           
                  <button onClick = {this.onDeleteClick.bind(this, paymentrequest._id)}type="button" className="btn btn-danger mr-1">

                  <img
                  className = "rounded-circle"
                  src = {require("../../../../../Images/deletebutton.png")} 
                  alt = " "
                  style = {{ width: '25px', marginRight: '0px', height: '25px', borderRadius: '50%' }} />
                  
                  </button>

                </div>
              </div>
            </div>

    )
  }
}

ApprovePatientPaymentItemRequest.propTypes = {

    approvePatientPaymentRequest: PropTypes.func.isRequired,
    deletePatientPaymentRequest: PropTypes.func.isRequired,
    paymentrequest: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

auth: state.auth

});

export default connect(mapStateToProps, { approvePatientPaymentRequest, deletePatientPaymentRequest })(ApprovePatientPaymentItemRequest);
