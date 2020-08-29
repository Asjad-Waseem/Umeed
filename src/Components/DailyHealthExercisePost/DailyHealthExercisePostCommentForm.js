import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addDailyHealthExerciseBlogPostComment } from '../../Actions/dailyhealthexercisepostActions';
import classnames from 'classnames';

const initialState = {

  dailyhealthexercisepostComment: '',
  DailyHealthExercisePostCommentError: '',
  errors: {}

}

class DailyHealthExercisePostCommentForm extends Component {

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

      let DailyHealthExercisePostCommentError= '';
      
            if (!this.state.dailyhealthexercisepostComment) {
              DailyHealthExercisePostCommentError = 'Please write something to post your Comment';
            }

            if ( DailyHealthExercisePostCommentError) {

              this.setState({ DailyHealthExercisePostCommentError});
  
              return false;
  
            }
            
        return true;

  }

    onSubmit(e) {

      e.preventDefault();

      const isValid = this.validate();

      const { user } = this.props.auth;
      
      const { postId } = this.props;

      console.log(postId);
      
      const _id = this.props.auth.user._id

      const comment = {

        comment: this.state.dailyhealthexercisepostComment

      };

    if(isValid){
    
      // clear form

      this.setState({dailyhealthexercisepostComment: ''});

      this.props.addDailyHealthExerciseBlogPostComment(postId, _id, comment);
      
      }

    }   

  render() {

    const { errors } = this.state;

    return (

      <div class="post-form mb-3">
      <div class="card card-info">
      <div class="card-header bg-success text-white">
      Make a Comment...
      </div>
      <div class="card-body">
        
      <form onSubmit = {this.onSubmit}> 

                  <div className="form-group">

                  <textarea 
                     className={classnames('form-control form-control-lg', {

                      'is-invalid': this.state.DailyHealthExercisePostCommentError

                     
                    })}    
                    style = {{height: '130px'}}
                    placeholder="Reply to Post"
                    name = "dailyhealthexercisepostComment"
                    value = {this.state.dailyhealthexercisepostComment}
                    onChange = {this.onChange}
                    error = {errors.dailyhealthexercisepostComment}
                    ></textarea>
                  <div style={{color: "Red"}}>{this.state.DailyHealthExercisePostCommentError}</div>
                  </div>
                  <button type="submit" className="btn btn-success">Submit</button>
                </form>

                </div>
                </div>
                </div>

    );
  }
}

DailyHealthExercisePostCommentForm.propTypes = {

addDailyHealthExerciseBlogPostComment: PropTypes.func.isRequired,
postId: PropTypes.string.isRequired,
auth: PropTypes.object.isRequired,
errors: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

auth: state.auth,  
errors: state.errors

});

export default connect(mapStateToProps, { addDailyHealthExerciseBlogPostComment })(DailyHealthExercisePostCommentForm);
