import React, {Component} from 'react';
import '../SignUpForms/SignUpForms.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { makepaymentRequest } from '../../../Actions/AuthActions';

const initialState = {

    paymentMethod: '',
    accountTitle: '',
    accountNo: '',
    serviceType: '',
    amount: '',
    paymentDate: '',
    paymentTime: '',
    paymentScreenShotProof: '',
    sessionDate: '',
    sessionTiming: '',
    errors: {},
    paymentMethodError: '',
    accountTitleError: '',
    accountNoError: '',
    amountError: '',
    paymentDateError: '',
    paymentTimeError: '',
    paymentScreenShotProofError: '',

}

class Payment extends Component{

  constructor(){

    super();

  this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

}

onChange(e){

    this.setState({[e.target.name]: e.target.value});

}

    validate = () => {

        let paymentMethodError= '';
        let accountTitleError= '';
        let accountNoError= '';
        let amountError= '';
        let paymentDateError= '';
        let paymentTimeError= '';
        let paymentScreenShotProofError = '';
      
        var date = new Date();

      //  var date = new Date();

        let CD = date.getFullYear()+'-'+ (date.getMonth()+1)+'-'+date.getDate();

    var dayy = date.getDate().toString().length;

    var monthh = (date.getMonth()+1).toString().length;

    var yearr = date.getFullYear();

    var finalDayy = '';
    var finalMonthh = '';

    {dayy === 1 ? 
    
    finalDayy = '0' + date.getDate()

    : 

    finalDayy = date.getDate() }

    {monthh === 1 ? 
    
    finalMonthh = '0' + (date.getMonth()+1)

    : 

    finalMonthh = date.getMonth() +1}

    let currentDate = yearr + "-" + finalMonthh + '-' + finalDayy;

    console.log(currentDate);
    
     // let currentDate = date.getFullYear()+'-'+ 0+ (date.getMonth()+1)+'-'+0+date.getDate();

        if (!this.state.paymentMethod) {
            paymentMethodError = 'This field is mandatory';
          } 

          if (!this.state.accountTitle) {
            accountTitleError = 'This field is mandatory';
          } else if (
            !/^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i.test(this.state.name)
            ) {
                accountTitleError = 'Invalid Account Title (Your Account Title should only have letters)';
          }      

          if (!this.state.accountNo) {
            accountNoError = 'This field is mandatory';
          }  

          if (!this.state.amount) {
            amountError = 'This field is mandatory';
            } else if (
              this.state.amount != 500 && this.state.amount !=1000
            ) {
             amountError = "Your entered Amount must be 500 for a text chat session, and 1000 for a video chat session"
              }
          if (!this.state.paymentDate) {
            paymentDateError = 'This field is mandatory';
            } else if (
              this.state.paymentDate > currentDate  
            ) {

            paymentDateError = "You must add a date for the payment which you have made today or earlier"
            }

          if (!this.state.paymentTime) {
            paymentTimeError = 'This field is mandatory';
            } 

          if(!this.state.paymentScreenShotProof) {
            paymentScreenShotProofError = "This field is mandatory";
              }

              if ( paymentMethodError || accountTitleError || accountNoError || amountError || paymentDateError || paymentTimeError || paymentScreenShotProofError) {

                this.setState({ paymentMethodError, accountTitleError, accountNoError, amountError, paymentDateError, paymentTimeError, paymentScreenShotProofError});
    
                return false;
    
              }
              
          return true;

    }
  
    onSubmit(e){

        e.preventDefault();

        const isValid = this.validate();

        const psychologistId = this.props.match.params.profileID;

        const newPayment = {
           
           paymentMethod: this.state.paymentMethod,
           accountTitle: this.state.accountTitle,
           accountNo: this.state.accountNo,
           serviceType: this.props.sessionDetails.serviceType,
           amount: this.state.amount,
           paymentDate: this.state.paymentDate,
           paymentTime: this.state.paymentTime,
           sessionDate: this.props.sessionDetails.sessionDate,
           sessionTiming: this.props.sessionDetails.sb,
           paymentScreenShotProof: this.state.paymentScreenShotProof,
           patientId: this.props.auth.user._id,
           paymentStatus: "pending"

        };

        if(isValid){

            // clear form
    
            this.setState = initialState;

            this.props.makepaymentRequest(newPayment, psychologistId);

            alert('Payment Request Submitted Successfuly. Kindly wait for Admins Verification');
            
            }

        }

        uploadImage = async e => {
          const files = e.target.files
          const data = new FormData()
          data.append('file', files[0])
          data.append('upload_preset', 'asjad123')
          this.setState({ loading: true })
          const res = await fetch(
            '	https://api.cloudinary.com/v1_1/dzxm2eveo/image/upload',
            {
              method: 'POST',
              body: data
            }
          )
          const file = await res.json()
          // console.log(file)
          this.setState({
            paymentScreenShotProof: file.secure_url,
            loading: false
          })
        }
   
    render(){

        const { errors } = this.state;

        return (

            <div className="landing" style = {{marginRight: '0px', marginLeft: '0px', height: '250vh'}}>
            <div className="dark-overlay landing-inner text-light">
             
             <div className="register">
             <div className="container">
               <div className="row">
                 <div className="col-md-8 m-auto">

                  <h1 className="display-4 text-center text-light">Make a Payment</h1>

                  <p className="lead text-center">Fill up the Payment form below to avail our paid Text Chat or Video Chat Services</p>
                 
                  <form noValidate onSubmit = {this.onSubmit} className="col-md-8 m-auto" style = {{backgroundColor: "White"}}> 

                    <br></br>

                    <h3>System Account Details</h3>

                    <h6>Bank Transfer: </h6>

                    <p style = {{color: 'Black'}}>Bank Name: HBL</p>      
                    <p style = {{color: 'Black'}}>Branch: Model Town, Lhr</p>
                    <p style = {{color: 'Black'}}>Account Title: Umeed</p> 
                    <p style = {{color: 'Black'}}>Account No: 12886754564632 </p>

                    <h6>JazzCash: </h6>

                    <p style = {{color: 'Black'}}>Account Title: Umeed</p> 
                    <p style = {{color: 'Black'}}>Account No: 03164035596 </p>

                    <h6>Easypaisa: </h6>

                    <p style = {{color: 'Black'}}>Account Title: Umeed</p> 
                    <p style = {{color: 'Black'}}>Account No: 03164035596 </p>

                    <h3>Transaction Details</h3>

                      <div className="form-group">
                    <label style= {{color: "Black"}}>Select a payment method</label>
                    <div className="form-group">
                    <div className="form-check form-check-inline">
                    <input className="form-check-input"
                     type="radio"
                     name="paymentMethod"
                     id="Bank Transfer"
                     value="Bank Transfer"
                     checked={this.state.paymentMethod === "Bank Transfer"}
                     onChange={this.onChange}
                     />
                    <label className="form-check-label" for="Bank Transfer" style={{color: "Black"}}>Bank Transfer</label>
                    </div>

                    <div className="form-check form-check-inline">
                    <input className="form-check-input"
                     type="radio"
                     name="paymentMethod"
                     id="Jazzcash"
                     value="Jazzcash"
                     checked={this.state.paymentMethod === "Jazzcash"}
                     onChange={this.onChange}
                     />
                    <label class="form-check-label" for="Female" style={{color: "Black"}}>JazzCash</label>
                    </div>

                    <div className="form-check form-check-inline">
                    <input className="form-check-input"
                     type="radio"
                     name="paymentMethod"
                     id="Easypaisa"
                     value="Easypaisa"
                     checked={this.state.paymentMethod === "Easypaisa"}
                     onChange={this.onChange}
                     />
                    <label class="form-check-label" for="Easypaisa" style={{color: "Black"}}>Easypaisa</label>
                    </div>

                    <div style={{color: "Red"}}>{this.state.paymentMethodError}</div>

                    </div>

                    </div>

                      <div className="form-group">
                      <input type="text" 
                      className={classnames('form-control form-control-sm', {

                        'is-invalid': this.state.accountTitleError

                       
                    })}                      
                      placeholder="Account Title" 
                      name="accountTitle" 
                      value={this.state.accountTitle}
                      onChange={this.onChange}
                       />
                           
                      <div style={{color: "Red"}} >{this.state.accountTitleError}</div>

                    </div>

                    <div className="form-group">
                      <input type="text" 
                      className={classnames('form-control form-control-sm', {

                        'is-invalid': this.state.accountNoError

                       
                    })}                       
                      placeholder="Account No" 
                      name="accountNo"
                      value={this.state.accountNo}
                      onChange={this.onChange}
                       />
                    
                      <div style={{color: "Red"}}>{this.state.accountNoError}</div>

                    </div>

                    <div className="form-group">
                      <input type="text"
                       className={classnames('form-control form-control-sm', {

                        'is-invalid': this.state.amountError

                       
                    })}                      
                       placeholder="Amount"
                       name="amount"
                       value={this.state.amount}
                       onChange={this.onChange}
                        />

                       <div style={{color: "Red"}}>{this.state.amountError}</div>

                    </div>

                    <label style = {{color: 'Black'}}>Transaction Date & Timings</label>

                    <div className="form-group">
                    <input type="date"
                    className={classnames('form-control form-control-sm', {

                   'is-invalid': this.state.paymentDateError

   
                    })}                      
                    placeholder="Payment Date"
                    name="paymentDate"
                    value={this.state.paymentDate}
                    onChange={this.onChange}
                    />

                   <div style={{color: "Red"}}>{this.state.paymentDateError}</div>

                   </div>

                   <div className="form-group">
                   <input type="time"
                   className={classnames('form-control form-control-sm', {
  
                   'is-invalid': this.state.paymentTimeError
  
         
                    })}                      
                    placeholder="Payment Time"
                    name="paymentTime"
                    value={this.state.paymentTime}
                    onChange={this.onChange}
                    />
  
                   <div style={{color: "Red"}}>{this.state.paymentTimeError}</div>
  
                   </div>

                   <label style = {{color: 'Black'}}>Session Date & Timings</label>

                   <p style ={{color: "Black"}}>Session Date: {this.props.sessionDetails.sessionDate}</p>
                   <p style ={{color: 'Black'}}>Session Timings:  
                   {this.props.sessionDetails.sb === "0" ? " 12:00 AM" : 
                    this.props.sessionDetails.sb === "1" ? " 01:00 AM" : 
                    this.props.sessionDetails.sb === "2" ? " 02:00 AM" : 
                    this.props.sessionDetails.sb === "3" ? " 03:00 AM" : 
                    this.props.sessionDetails.sb === "4" ? " 04:00 AM" : 
                    this.props.sessionDetails.sb === "5" ? " 05:00 AM" : 
                    this.props.sessionDetails.sb === "6" ? " 06:00 AM" : 
                    this.props.sessionDetails.sb === "7" ? " 07:00 AM" : 
                    this.props.sessionDetails.sb === "8" ? " 08:00 AM" : 
                    this.props.sessionDetails.sb === "9" ? " 09:00 AM" : 
                    this.props.sessionDetails.sb === "10" ? " 10:00 AM" : 
                    this.props.sessionDetails.sb === "11" ? " 11:00 AM" : 
                    this.props.sessionDetails.sb === "12" ? " 12:00 PM" : 
                    this.props.sessionDetails.sb === "13" ? " 01:00 PM" : 
                    this.props.sessionDetails.sb === "14" ? " 02:00 PM" : 
                    this.props.sessionDetails.sb === "15" ? " 03:00 PM" : 
                    this.props.sessionDetails.sb === "16" ? " 04:00 PM" : 
                    this.props.sessionDetails.sb === "17" ? " 05:00 PM" : 
                    this.props.sessionDetails.sb === "18" ? " 06:00 PM" : 
                    this.props.sessionDetails.sb === "19" ? " 07:00 PM" : 
                    this.props.sessionDetails.sb === "20" ? " 08:00 PM" : 
                    this.props.sessionDetails.sb === "21" ? " 09:00 PM" : 
                    this.props.sessionDetails.sb === "22" ? " 10:00 PM" : 
                    this.props.sessionDetails.sb === "23" ? " 11:00 PM" : null}
                    </p>
  
                    <label className = "text-dark">Attach your payment transaction screenshot proof</label>
                    
                    <div className = "form-group">

                    <input type="file" 
                    className={classnames('form-control form-control-sm', {

                      'is-invalid': this.state.paymentScreenShotProofError

                    })}

                    placeholder="Payment Transaction Screenshot Proof"
                    name="file" 
                    onChange={this.uploadImage}
                    />
                  
                   <div style = {{color: "Red"}}>{this.state.paymentScreenShotProofError}</div>

                   </div>
                   
                    <input type="submit" className="btn btn-success btn-block mt-4" />

                  </form>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        );
    }
}

Payment.propTypes = {

    makepaymentRequest: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired

}
const mapStateToProps = (state) => ({

    auth: state.auth,
    errors: state.errors,
    sessionDetails: state.payment.sessionDetails,

});

export default connect(mapStateToProps, {makepaymentRequest})(withRouter(Payment));