import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMotivationalVideoComment } from '../../Actions/motivationalvideoActions';
import classnames from 'classnames';

const initialState = {

  motivationalvideoComment: '',
  MotivationalVideoCommentError: '',
  errors: {}

}

class MotivationalVideoCommentForm extends Component {

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

      let MotivationalVideoCommentError= '';
      
            if (!this.state.motivationalvideoComment) {
              MotivationalVideoCommentError = 'Please write something to post your Comment';
            }

            if ( MotivationalVideoCommentError) {

              this.setState({ MotivationalVideoCommentError});
  
              return false;
  
            }
            
        return true;

  }

    onSubmit(e) {

      e.preventDefault();

      const isValid = this.validate();

      const { user } = this.props.auth;
      
      const { videoId } = this.props;

      console.log(videoId);
      
      const _id = this.props.auth.user._id

      const comment = {

        comment: this.state.motivationalvideoComment

      };

    if(isValid){
    
      // clear form

      this.setState({motivationalvideoComment: ''});

      this.props.addMotivationalVideoComment(videoId, _id, comment);
      
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

                      'is-invalid': this.state.MotivationalVideoCommentError

                     
                    })}    
                    style = {{height: '130px'}}
                    placeholder="Reply to Post"
                    name = "motivationalvideoComment"
                    value = {this.state.motivationalvideoComment}
                    onChange = {this.onChange}
                    ></textarea>
                  <div style={{color: "Red"}}>{this.state.MotivationalVideoCommentError}</div>
                  </div>
                  <button type="submit" className="btn btn-success">Submit</button>
                </form>

                </div>
                </div>
                </div>

    );
  }
}

MotivationalVideoCommentForm.propTypes = {

addMotivationalVideoComment: PropTypes.func.isRequired,
videoId: PropTypes.string.isRequired,
auth: PropTypes.object.isRequired,
errors: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

auth: state.auth,  
errors: state.errors

});

export default connect(mapStateToProps, { addMotivationalVideoComment })(MotivationalVideoCommentForm);
