import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitAProgressReport } from '../../../Actions/progressReportActions';

const initialState = {

    patientId: '',
    observedConditionBeforeSession: '',
    observedConditionBeforeSessionError: '',
    observedConditionAfterSession: '',
    observedConditionAfterSessionError: '',
    conditionImproved: '',
    conditionImprovedError: '',
    suggestions: '',
    suggestionsError: '',
    errors: {}
   
}

class ProgressReportForm extends Component {

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

        let observedConditionBeforeSessionError = '';
        let observedConditionAfterSessionError = '';
        let conditionImprovedError = '';
        let suggestionsError = '';
       
          if (!this.state.observedConditionBeforeSession) {
            observedConditionBeforeSessionError = 'This field is mandatory';
          } else if (
            this.state.observedConditionBeforeSession.length < 50 || this.state.observedConditionBeforeSession.length > 1000
          ) {
            observedConditionBeforeSessionError = 'Observed condition before session must be between 50 to 1000 characters';
          }

          if (!this.state.observedConditionAfterSession) {
            observedConditionAfterSessionError = 'This field is mandatory';
          } else if (
            this.state.observedConditionAfterSession.length < 50 || this.state.observedConditionAfterSession.length > 1000
          ) {
            observedConditionAfterSessionError = 'Observed condition after session must be between 50 to 1000 characters';
          }

          if (!this.state.conditionImproved) {
            conditionImprovedError = 'This field is mandatory';
          } 

          if (!this.state.suggestions) {
            suggestionsError = 'This field is mandatory';
          } else if (
            this.state.suggestions.length < 50 || this.state.suggestions.length > 1000
          ) {
            suggestionsError = 'Suggestion must be between 50 to 1000 characters';
          }

              if ( observedConditionBeforeSessionError || 
                   observedConditionAfterSessionError || 
                   conditionImprovedError || 
                   suggestionsError ) {

                this.setState({ observedConditionBeforeSessionError, 
                                observedConditionAfterSessionError, 
                                conditionImprovedError, 
                                suggestionsError });
    
                return false;
    
              }
              
          return true;

    }
  
    onSubmit(e){

        e.preventDefault();

        const isValid = this.validate();

        var date = new Date();

        let reportDate = date.getFullYear()+'-'+ 0+ (date.getMonth()+1)+'-'+date.getDate();

        let reportTiming = date.getHours() + ':' + (date.getMinutes()); 

        let patientId =  this.props.match.params._id;

        const newReport = {

           PsychologistId: this.props.auth.user._id,
           observedConditionBeforeSession: this.state.observedConditionBeforeSession,
           observedConditionAfterSession: this.state.observedConditionAfterSession,
           conditionImproved: this.state.conditionImproved,
           suggestions: this.state.suggestions,
           reportDate: reportDate,
           reportTiming: reportTiming

        };

        if(isValid){

            // clear form
    
            this.setState = initialState;

            // alert(newReport.PsychologistId);

            // alert(newReport.reportDate)

            // alert(newReport.reportTiming);

            // alert(JSON.stringify(newReport));

            this.props.submitAProgressReport(newReport, patientId);
            
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

                  <h1 className="display-4 text-center text-light">Progress Report</h1>

                  <p className="lead text-center">Fill up the Progress Report details for the selected Patient</p>
                 
                  <form noValidate onSubmit = {this.onSubmit} className="col-md-8 m-auto" style = {{backgroundColor: "White"}}> 

                      <br></br>
                      <div className="form-group">
                      <input type="text" 
                      className={classnames('form-control form-control-sm', {

                        'is-invalid': this.state.observedConditionBeforeSessionError

                       
                    })}      
                    
                      style = {{height: '90px'}}                 
                      placeholder="Condition Observed Before Session" 
                      name="observedConditionBeforeSession" 
                      value={this.state.observedConditionBeforeSession}
                      onChange={this.onChange}
                       />
                           
                      <div style={{color: "Red"}} >{this.state.observedConditionBeforeSessionError}</div>

                    </div>

                    <div className="form-group">
                      <input type="text" 
                      className={classnames('form-control form-control-sm', {

                        'is-invalid': this.state.observedConditionAfterSessionError

                       
                    })}   

                      style = {{height: '90px'}}                                   
                      placeholder="Condition Observed After Session" 
                      name="observedConditionAfterSession"
                      value={this.state.observedConditionAfterSession}
                      onChange={this.onChange}
                       />
                    
                      <div style={{color: "Red"}}>{this.state.observedConditionAfterSessionError}</div>

                    </div>

                    <label style = {{color: "Black"}}>Select a score (0-10) for condition improvement for the Patient</label>

                    <div className="form-group">
                    <input type="range" id="conditionImproved" min="0" max="10"
                       className={classnames('form-control form-control-sm', {

                        'is-invalid': this.state.conditionImprovedError

                       
                    })}

                       placeholder="Rate condition improved on a scale of 10" 
                       name="conditionImproved"
                       value={this.state.conditionImproved}
                       onChange={this.onChange}
                        />

                      <p style = {{color: "Black"}}>Score: {this.state.conditionImproved}</p>

                      <div style={{color: "Red"}}>{this.state.conditionImprovedError}</div>

                    </div>

                    <div className="form-group">
                      <input type="text"
                       className={classnames('form-control form-control-sm', {

                        'is-invalid': this.state.suggestionsError

                       
                    })}   
                  
                       style = {{height: '90px'}}                                    
                       placeholder="Please write any suggesstions/recommendation for the Patient to follow"
                       name="suggestions"
                       value={this.state.suggestions}
                       onChange={this.onChange}
                        />

                       <div style={{color: "Red"}}>{this.state.suggestionsError}</div>

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

ProgressReportForm.propTypes = {

  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  progressReport: PropTypes.object.isRequired

}
const mapStateToProps = (state) => ({

  auth: state.auth,
  errors: state.errors,
  progressReport: state.progressReport

});

export default connect(mapStateToProps, {submitAProgressReport})(withRouter(ProgressReportForm));