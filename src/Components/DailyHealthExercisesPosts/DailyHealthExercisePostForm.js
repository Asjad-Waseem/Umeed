import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitDailyHealthExerciseBlogPost } from '../../Actions/dailyhealthexercisepostActions';
import classnames from 'classnames';

const initialState = {

  dailyhealthexercisepostText: '',
  dailyhealthexercisepostTitle: '',
  DailyHealthExercisePostError: '',
  DailyHealthExerciseTitleError: '',
  approvalStatus: 'pending',
  errors: {}

}

class DailyHealthExercisePostForm extends Component {

    constructor(props) {

        super(props);

        this.state = initialState;

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentWillReceiveProps(newProps) {

    if(newProps.errors) {

      this.setState({ errors: newProps.errors });

    }

    }

    onChange(e) {

      this.setState({ [e.target.name] : e.target.value });

    }

    validate = () => {

      let DailyHealthExercisePostError= '';
      let DailyHealthExerciseTitleError= '';
      
            if (!this.state.dailyhealthexercisepostText) {
              DailyHealthExercisePostError = 'Please write something to submit your Daily Health Exercise Post Request';
            }

            else if (this.state.dailyhealthexercisepostText.split(' ').length<300 || this.state.dailyhealthexercisepostText.split(' ').length>2000){

              DailyHealthExercisePostError = "Your Daily Health Exercise Post should be from 300 to 2000 words";

            }

            if (!this.state.dailyhealthexercisepostTitle) {
              DailyHealthExerciseTitleError = 'Please write a suitable Title for your Daily Health Exercise Post';
            }

            else if (this.state.dailyhealthexercisepostTitle.split(' ').length>10){

              DailyHealthExerciseTitleError = "Your Daily Health Exercise Title should not be more than 10 words";

            }

            if ( DailyHealthExerciseTitleError || DailyHealthExercisePostError) {

              this.setState({ DailyHealthExerciseTitleError, DailyHealthExercisePostError});
  
              return false;
  
            }
            
        return true;

  }

    onSubmit(e) {

      e.preventDefault();

      const isValid = this.validate();

      const { user } = this.props.auth;

      const _id = this.props.auth.user._id;

      const newDailyHealthExercisePost = {

        title: this.state.dailyhealthexercisepostTitle,
        content: this.state.dailyhealthexercisepostText,
        status: this.state.approvalStatus

      };

    if(isValid){
    
      // clear form

      this.setState({dailyhealthexercisepostTitle: ''});
      this.setState({dailyhealthexercisepostText: ''});
      this.setState({DailyHealthExerciseTitleError: ''});
      this.setState({DailyHealthExercisePostError: ''});

      this.props.submitDailyHealthExerciseBlogPost(newDailyHealthExercisePost, _id);
      
      }

    }   

  render() {

    const { errors } = this.state;

    return (

      <div class="post-form mb-3">

      <h1 className = "text-dark" style = {{textAlign: 'center'}}>Daily Health Exercise Post</h1>
      <h4 className = "text-dark" style = {{textAlign: 'center'}}>Submit a new Daily Health Exercise Post Request</h4>
      <br></br>
      <div class="card card-info">
      <div class="card-header bg-success text-white">
      Daily Health Exercise Post Request Form
      </div>
      <div class="card-body">
        
      <form onSubmit = {this.onSubmit}> 
                  <div className="form-group">
                    <input
                    type = "dailyhealthexercisepostTitle"
                    className={classnames('form-control form-control-sm', {

                      'is-invalid': this.state.DailyHealthExerciseTitleError

                     
                  })}
                  placeholder="Write Your Daily Health Exercise Title Here"
                  name="dailyhealthexercisepostTitle"
                  value={this.state.dailyhealthexercisepostTitle}
                  onChange= {this.onChange}
                  error = {errors.dailyhealthexercisepostTitle}
                  />
                  <div style={{color: "Red"}}>{this.state.DailyHealthExerciseTitleError}</div>

                  <br></br>

                  <textarea 
                     className={classnames('form-control form-control-lg', {

                      'is-invalid': this.state.DailyHealthExercisePostError

                     
                    })}    
                    style = {{height: '130px'}}
                    placeholder="Submit a Daily Health Exercise Post Request"
                    name = "dailyhealthexercisepostText"
                    value = {this.state.dailyhealthexercisepostText}
                    onChange = {this.onChange}
                    error = {errors.dailyhealthexercisepostText}
                    ></textarea>
                  <div style={{color: "Red"}}>{this.state.DailyHealthExercisePostError}</div>
                  </div>
                  <button type="submit" className="btn btn-success">Submit</button>
                </form>

                </div>
                </div>
                </div>

    );
  }
}

DailyHealthExercisePostForm.propTypes = {

submitDailyHealthExerciseBlogPost: PropTypes.func.isRequired,
auth: PropTypes.object.isRequired,
errors: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

auth: state.auth,  
errors: state.errors

});

export default connect(mapStateToProps, { submitDailyHealthExerciseBlogPost })(DailyHealthExercisePostForm);
