import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitASuccessStory } from '../../../Actions/successStoryActions';
import { getRegisteredPsychologistProfiles } from "../../../Actions/profileActions";
import isEmpty from '../../../Validation/is-empty';

const initialState = {

    patientId: '',
    successStory: '',
    successStoryError: '',
    successStoryDate: '',
    successStoryTiming: '',
    errors: {}
   
}

class SuccessStoriesForm extends Component {

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

        const patientId = this.props.auth.user._id;
    
        this.props.getRegisteredPsychologistProfiles(patientId);
      
    }

    validate = () => {

        var date = new Date();
        let currentDate = date.getFullYear()+'-'+ 0+ (date.getMonth()+1)+'-'+date.getDate();

        let successStoryError = '';
       
          if (!this.state.successStory) {
            successStoryError = 'This field is mandatory';
          } else if (
            this.state.successStory.length < 50 || this.state.successStory.length > 1000
          ) {
            successStoryError = 'Success Story must be between 50 to 1000 characters';
          }

              if ( successStoryError ) {

                this.setState({ successStoryError });
    
                return false;
    
              }
              
          return true;

    }
  
    onSubmit(e){

        e.preventDefault();

        const isValid = this.validate();

        var date = new Date();

        let successStoryDate = date.getFullYear()+'-'+ 0+ (date.getMonth()+1)+'-'+date.getDate();

        let successStoryTiming = date.getHours() + ':' + (date.getMinutes()); 

        let patientId =  this.props.auth.user._id;

        const newSuccessStory = {

           successStory: this.state.successStory,
           successStoryDate: successStoryDate,
           successStoryTiming: successStoryTiming

        };

        if(isValid){

            // clear form
    
            this.setState = initialState;

            alert(newSuccessStory.successStory);

            alert(newSuccessStory.successStoryDate)

            alert(newSuccessStory.successStoryTiming);

            alert(JSON.stringify(newSuccessStory));

            this.props.submitASuccessStory(newSuccessStory, patientId);
            
            }

        }

  render() {

//    const { profiles, loading } = this.props.profiles;

  //  const { errors } = this.state;

  const profiles = this.props.profiles;

    return (

          <div className="landing" style = {{marginRight: '0px', marginLeft: '0px', height: '350vh'}}>
          <div className="dark-overlay landing-inner text-light">
             
             <div className="register">
             <div className="container">
               <div className="row">

               {!isEmpty(profiles) ? 

                 <div className="col-md-8 m-auto">

                  <h1 className="display-4 text-center text-light">Success Story</h1>

                  <p className="lead text-center">Write about your success story in the space below</p>
                 
                  <form noValidate onSubmit = {this.onSubmit} className="col-md-8 m-auto" style = {{backgroundColor: "White"}}> 

                      <br></br>
                      <div className="form-group">
                      <input type="text" 
                      className={classnames('form-control form-control-sm', {

                        'is-invalid': this.state.successStoryError

                       
                    })}      
                    
                      style = {{height: '90px'}}                 
                      placeholder="Write your success story here" 
                      name="successStory" 
                      value={this.state.successStory}
                      onChange={this.onChange}
                       />
                           
                      <div style={{color: "Red"}} >{this.state.successStoryError}</div>

                    </div>

                    <input type="submit" className="btn btn-success btn-sm mb-1"/>

                  </form>

              </div>

              : <div className = "text-center"> <h3 className = "text-center text-light">You must avail services from at least one of the Psychologists to be eligible to submit a Success Story</h3> </div>}

            </div>
          </div>
          </div>
          </div>
          </div>
        );
    }
}

SuccessStoriesForm.propTypes = {

  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  successStory: PropTypes.object.isRequired,
  registeredPsychologists: PropTypes.object.isRequired

}
const mapStateToProps = (state) => ({

  auth: state.auth,
  errors: state.errors,
  successStory: state.successStory,
  profiles: state.registeredPsychologists.profiles

});

export default connect(mapStateToProps, {getRegisteredPsychologistProfiles, submitASuccessStory})(withRouter(SuccessStoriesForm));