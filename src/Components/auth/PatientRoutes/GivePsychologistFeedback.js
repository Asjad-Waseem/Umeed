import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { givePsychologistFeedback } from '../../../Actions/psychologistFeedbackActions';
import { Rate } from 'antd'; 

const initialState = {

    patientId: '',
    rating: '',
    ratingError: '',
    feedback: '',
    feedbackError: '',
    errors: {}
   
}

class GivePsychologistFeedback extends Component {

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

        var date = new Date();
        let currentDate = date.getFullYear()+'-'+ 0+ (date.getMonth()+1)+'-'+date.getDate();

        let ratingError = '';
        let feedbackError = '';
        
         if(!this.state.rating) {

            ratingError = "Kindly rate the Psychologist out of 5 star ratings based on your experience";

         }

         if(!this.state.feedback) {

            feedbackError = "Kindly write some feedback against the Psychologist";

         }

         else if (this.state.feedback.length > 100) {

            feedbackError = "Your feedback should be no more than 100 characters";

         }

              if ( ratingError || 
                   feedbackError ) {

                this.setState({ ratingError, 
                                feedbackError });
    
                return false;
    
              }
              
          return true;

    }
  
    onSubmit(e){

        e.preventDefault();

        const isValid = this.validate();

        var date = new Date();

        let feedbackDate = date.getFullYear()+'-'+ 0+ (date.getMonth()+1)+'-'+date.getDate();

        let feedbackTiming = date.getHours() + ':' + (date.getMinutes()); 

        let psychologistId =  this.props.match.params._id;

        const newFeedback = {

           patientId: this.props.auth.user._id,
           rating: this.state.rating,
           feedback: this.state.feedback,
           feedbackDate: feedbackDate,
           feedbackTiming: feedbackTiming

        };

        if(isValid){

            // clear form
    
          //  this.setState = initialState;

          this.setState({rating: ''});
          this.setState({feedback: ''});

            // alert(newReport.PsychologistId);

            // alert(newReport.reportDate)

            // alert(newReport.reportTiming);

            // alert(JSON.stringify(newReport));

            this.props.givePsychologistFeedback(psychologistId, newFeedback);
            
            }

        }

  render() {

  //  const { errors } = this.state;

    return (

          <div className="landing" style = {{marginRight: '0px', marginLeft: '0px', height: '350vh'}}>
          <div className="dark-overlay landing-inner text-light">
             
             <div className="register">
             <div className="container">
               <div className="row">
                 <div className="col-md-8 m-auto">

                  <h1 className="display-4 text-center text-light">Psychologist Feedback</h1>

                  <p className="lead text-center">Kindly fill up the following details for the selected Psychologist</p>
                 
                  <form noValidate onSubmit = {this.onSubmit} className="col-md-8 m-auto" style = {{backgroundColor: "White"}}> 

                      <br></br>


                      <label style = {{color: "Black"}}>Select a score (0-10) for condition improvement for the Patient</label>

                      <div className="form-group">
                      <input type="range" id="rating" min="0" max="5"
                       className={classnames('form-control form-control-sm', {

                       'is-invalid': this.state.ratingError

   
                       })}

                       placeholder="Rate Psychologist on a scale of 10" 
                       name="rating"
                       value={this.state.rating}
                       onChange={this.onChange}
                       />

                       <p style = {{color: "Black"}}>Rating: {this.state.rating}</p>

                       <div style={{color: "Red"}} >{this.state.ratingError}</div>

                       </div>

                      <div className="form-group">
                      <input type="text" 
                       className={classnames('form-control form-control-sm', {

                        'is-invalid': this.state.feedbackError

                       
                    })}      
                    
                      style = {{height: '90px'}}                 
                      placeholder="Feedback" 
                      name="feedback" 
                      value={this.state.feedback}
                      onChange={this.onChange}
                       />
                           
                      <div style={{color: "Red"}} >{this.state.feedbackError}</div>

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

GivePsychologistFeedback.propTypes = {

  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  psychologistfeedback: PropTypes.object.isRequired

}
const mapStateToProps = (state) => ({

  auth: state.auth,
  errors: state.errors,
  psychologistfeedback: state.psychologistfeedback

});

export default connect(mapStateToProps, {givePsychologistFeedback})(withRouter(GivePsychologistFeedback));