import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPatientPaymentRequests } from '../../../../../Actions/adminActions/approvepatientpaymentActions';
import { withRouter } from 'react-router-dom';
import { approvePatientPaymentRequest } from '../../../../../Actions/adminActions/approvepatientpaymentActions';
import { deletePatientPaymentRequest } from '../../../../../Actions/adminActions/approvepatientpaymentActions';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import classnames from 'classnames';

const initialState = {

  meetingDetails: '',
  paymentId: '',
  serviceType: '',
  meetingDetailsError: ''

}

class ApprovePatientPaymentRequestComponent extends Component {

  constructor(){

    super();

  this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

}

onChange(e){

  this.setState({[e.target.name]: e.target.value});

}


 componentDidMount() {

   this.props.getPatientPaymentRequests();

  }

  onDeleteClick(_id) {

    this.props.deletePatientPaymentRequest(_id);
    
  }
  
  onApproveClick(_id) {

    let meetingDetails;

    if(this.state.serviceType === "Text Chat") {

       meetingDetails = {

        meetingDetails: ''

      }

    }

    else {

        meetingDetails = {

        meetingDetails : this.state.meetingDetails

      }
    }

    this.props.approvePatientPaymentRequest(_id, meetingDetails);

  }

  validate = () => {

   let meetingDetailsError = '';

   if(!this.state.meetingDetails) {

    meetingDetailsError = "Enter the Zoom Meeting Details"

   }
          if ( meetingDetailsError ) {

            this.setState({ meetingDetailsError });

            return false;

          }
          
      return true;

}

onSubmit(e){

    e.preventDefault();

    const isValid = this.validate();

    const paymentId = this.state.paymentId

    alert(paymentId);

    console.log(paymentId);

    const meetingDetails = {
      
     meetingDetails: this.state.meetingDetails

    }

    if(isValid){

        // clear form

        this.setState = initialState;

        alert(meetingDetails.meetingDetails);

        this.props.approvePatientPaymentRequest(paymentId, meetingDetails);
        
        }

    }
  
  render() {

    console.log(this.props.paymentrequest);

    const { paymentrequests, loading } = this.props.paymentrequest;

    const { auth } = this.props;
   
  console.log(paymentrequests);

   let payment_id;
   let paymentMethod;
   let amount;
   let serviceType;
   let screenshotProof;
   let accountTitle;
   let accountNo;
   let paymentDate;
   let paymentTiming;
   let sessionDate;
   let sessionTiming;
  
    console.log(paymentrequests);
    if(paymentrequests){
      paymentrequests.forEach((paymentrequest)=>{

    if(paymentrequest._id === this.props.match.params._id){

     payment_id = paymentrequest._id
     paymentMethod = paymentrequest.paymentMethod
     amount = paymentrequest.amount
     serviceType = paymentrequest.serviceType
     screenshotProof = paymentrequest.paymentScreenShotProof
     accountTitle = paymentrequest.accountTitle
     accountNo = paymentrequest.accountNo
     paymentDate = paymentrequest.paymentDate
     paymentTiming = paymentrequest.paymentTime
     sessionDate = paymentrequest.sessionDate
     sessionTiming = paymentrequest.sessionTiming
   
    }

   })

 }

 this.state.paymentId = payment_id;

 console.log(this.state.paymentId);

 this.state.serviceType = serviceType;

 console.log(serviceType);

     return (

             <div className="container">

             <div className="row">
             <div className="col-md-6">

              <Link to = '/ApprovePatientPayments' className = "btn btn-light mb-3">

                Back to Payment Approval Requests

              </Link>

              </div>
              </div>

              <div className="row">
              <div className="col-md-12">
              <div className="card card-body bg-success text-white mb-3">

              <div className="row">

              <MediaQuery maxDeviceWidth = {600}>
              <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
              <img
              className = "rounded-circle"
              src = {screenshotProof} 
              alt = "No Image"
              style = {{height: '100px', width: '100px'}}

              />
    
              </div>
              </MediaQuery>

              <MediaQuery minDeviceWidth = {601} maxDeviceWidth = {900}>
              <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
              <img
              className = "rounded-circle"
              src = {screenshotProof} 
              alt = "No Image"
              style = {{height: '150px', width: '150px'}}

              />
          
              </div>
              </MediaQuery>

              <MediaQuery minDeviceWidth = {900} maxDeviceWidth = {1024}>
              <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
              <img
              className = "rounded-circle"
              src = {screenshotProof} 
              alt = "No Image"
              style = {{height: '200px', width: '200px'}}

              />
          
              </div>
              </MediaQuery>

              <MediaQuery minDeviceWidth = {1025} maxDeviceWidth = {1920}>
              <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
              <img
              className = "rounded-circle"
              src = {screenshotProof} 
              alt = "No Image"
              style = {{height: '250px', width: '250px'}}

              />
          
              </div>
              </MediaQuery>

              <MediaQuery minDeviceWidth = {1920} maxDeviceWidth = {2560}>
              <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
              <img
              className = "rounded-circle"
              src = {screenshotProof} 
              alt = "No Image"
              style = {{height: '300px', width: '300px'}}

              />
          
              </div>
              </MediaQuery>

              <MediaQuery minDeviceWidth = {2560}>
              <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
              <img
              className = "rounded-circle"
              src = {screenshotProof} 
              alt = "No Image"
              style = {{height: '350px', width: '350px'}}

              />
          
             </div>
             </MediaQuery>

             </div>

             <div className="text-center">

             <p className="text-center text-light"> Payment Id: {payment_id} </p>

             <p className="lead text-center"></p>

             <p className = "lead text-center"></p>

             <button onClick = {this.onDeleteClick.bind(this, payment_id)}type="button" className="btn btn-danger mr-1" style = {{borderColor: "White"}}>

             <img
             className = "rounded-circle"
             src = {require("../../../../../Images/deletebutton.png")} 
             alt = " "
             style = {{ width: '25px', marginRight: '0px', height: '25px', borderRadius: '50%' }} />

            </button>

            <br></br>
            <br></br>

            {serviceType === "Video Chat" ? 

            <form noValidate onSubmit = {this.onSubmit} className="col-md-8 m-auto" style = {{backgroundColor: "White"}}> 

            <input type="text" 
            className={classnames('form-control form-control-sm', {

            'is-invalid': this.state.meetingDetailsError

 
             })}      
                  
             style = {{height: '90px'}}                 
             placeholder="Enter the Zoom Meeting Details Here" 
             name="meetingDetails" 
             value={this.state.meetingDetails}
             onChange={this.onChange}
             
             />

             <div style={{color: "Red"}} >{this.state.meetingDetailsError}</div>

             <input type="submit" className="btn btn-success mr-1" value = "Approve" style = {{borderColor: "White"}}/>

             </form>

             : 

             <input type="submit" className="btn btn-success mr-1" value = "Approve" style = {{borderColor: "White"}}/>

             }
             
             </div>
             </div>
             </div>
             </div>

             <div className="row">
             <div className="col-md-12">
             <div className="card card-body bg-light mb-3 text-center">
             <h3 className="text-center text-success">Payment Details</h3>

             <p className="lead">

             Payment Method: {paymentMethod} 
       
             </p>
 
             <p className="lead"> Account Title: {accountTitle} </p>
             <p className="lead"> Account No: {accountNo} </p>
             <p className="lead"> Amount: Pkr. {amount} /- </p>
             <p className="lead"> Payment Date: {paymentDate} </p>
             <p className="lead"> Payment Timing: {paymentTiming} </p>

             </div>
             </div>
             </div>

             <div className="row">
             <div className="col-md-12">
             <div className="card card-body bg-light mb-3 text-center">
             <h3 className="text-center text-success">Session Details</h3>

             <p className="lead">
          
             Session Type: {serviceType} 
       
             </p>
 
             <p className="lead"> Session Date: {sessionDate} </p>
             <p className="lead"> Session Time: {sessionTiming} </p>

             </div>
             </div>
             </div>

             </div>

     )

    }

   }

ApprovePatientPaymentRequestComponent.propTypes = {

   getPatientPaymentRequests: PropTypes.func.isRequired,
   paymentrequest: PropTypes.object.isRequired,
   auth: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

paymentrequest: state.paymentrequest,
auth: state.auth

});

export default connect(mapStateToProps, { getPatientPaymentRequests, deletePatientPaymentRequest, approvePatientPaymentRequest })(withRouter(ApprovePatientPaymentRequestComponent));
