import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitArticleBlogPosts } from '../../Actions/articleblogpostActions';
import classnames from 'classnames';

const initialState = {

  articleblogpostText: '',
  articleblogpostTitle: '',
  ArticleBlogPostError: '',
  ArticleBlogTitleError: '',
  approvalStatus: 'pending',
  errors: {}

}

class ArticleBlogPostForm extends Component {

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

      let ArticleBlogPostError= '';
      let ArticleBlogTitleError= '';
      
            if (!this.state.articleblogpostText) {
              ArticleBlogPostError = 'Please write something to submit your Motivational Article/Blog Post Request';
            }

            else if (this.state.articleblogpostText.split(' ').length<300 || this.state.articleblogpostText.split(' ').length>2000){

              ArticleBlogPostError = "Your Article/Blog should be from 300 to 2000 words";

            }

            if (!this.state.articleblogpostTitle) {
              ArticleBlogTitleError = 'Please write a suitable Title for your Article/Blog';
            }

            else if (this.state.articleblogpostTitle.split(' ').length>10){

              ArticleBlogTitleError = "Your Article/Blog Title should not be more than 10 words";

            }

            if ( ArticleBlogTitleError || ArticleBlogPostError) {

              this.setState({ ArticleBlogTitleError, ArticleBlogPostError});
  
              return false;
  
            }
            
        return true;

  }

    onSubmit(e) {

      e.preventDefault();

      const isValid = this.validate();

      const { user } = this.props.auth;
      
      const _id = this.props.auth.user._id

      const newArticleBlogPost = {

        title: this.state.articleblogpostTitle,
        content: this.state.articleblogpostText,
        status: "pending"

        // articleblogpostTitle: this.state.articleblogpostTitle,
       // articleblogpostText: this.state.articleblogpostText,
       // submittedBy: user.name,
       // approvalStatus: this.state.approvalStatus

      };

    if(isValid){
    
      // clear form

      this.setState({articleblogpostTitle: ''});
      this.setState({articleblogpostText: ''});
      this.setState({ArticleBlogTitleError: ''});
      this.setState({ArticleBlogPostError: ''});

      this.props.submitArticleBlogPosts(newArticleBlogPost, _id);
      
      }

    }   

  render() {

    const { errors } = this.state;

    return (

      <div class="post-form mb-3">

      <h1 className = "text-dark" style = {{textAlign: 'center'}}>Motivational Article/Blog Post</h1>
      <h4 className = "text-dark" style = {{textAlign: 'center'}}>Submit a new Motivational Article/Blog Post Request</h4>
      <br></br>
      <div class="card card-info">
      <div class="card-header bg-success text-white">
      Motivational Article/Blog Post Request Form
      </div>
      <div class="card-body">
        
      <form onSubmit = {this.onSubmit}> 
                  <div className="form-group">
                    <input
                    type = "articleblogpostTitle"
                    className={classnames('form-control form-control-sm', {

                      'is-invalid': this.state.ArticleBlogTitleError

                     
                  })}
                  placeholder="Write Your Motivational Article/Blog Title Here"
                  name="articleblogpostTitle"
                  value={this.state.articleblogpostTitle}
                  onChange= {this.onChange}
                  error = {errors.articleblogpostTitle}
                  />
                  <div style={{color: "Red"}}>{this.state.ArticleBlogTitleError}</div>

                  <br></br>

                  <textarea 
                     className={classnames('form-control form-control-lg', {

                      'is-invalid': this.state.ArticleBlogPostError

                     
                    })}    
                    style = {{height: '130px'}}
                    placeholder="Submit an Article/Blog Post Request"
                    name = "articleblogpostText"
                    value = {this.state.articleblogpostText}
                    onChange = {this.onChange}
                    error = {errors.articleblogpostText}
                    ></textarea>
                  <div style={{color: "Red"}}>{this.state.ArticleBlogPostError}</div>
                  </div>
                  <button type="submit" className="btn btn-success">Submit</button>
                </form>

                </div>
                </div>
                </div>

    );
  }
}

ArticleBlogPostForm.propTypes = {

submitArticleBlogPosts: PropTypes.func.isRequired,
auth: PropTypes.object.isRequired,
errors: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

auth: state.auth,  
errors: state.errors

});

export default connect(mapStateToProps, { submitArticleBlogPosts })(ArticleBlogPostForm);
