import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { submitMotivationalVideo } from '../../Actions/motivationalvideoActions';
import classnames from 'classnames';

const initialState = {

  title: '',
  titleError: '',
  url: '',
  urlError: '',
  status: 'pending',
  errors: {}

}

class MotivationalVideoPostForm extends Component {

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

      let titleError= '';
      let urlError= '';
      
            if (!this.state.title) {
              titleError = 'Please write a title for your Motivational Video';
            }

            else if (this.state.title.length<10 || this.state.title.length>50){

              titleError = "Your Article/Blog should be from 10 to 50 Characters";

            }

            if (!this.state.url) {
              urlError = 'Please upload a video to submit';
            }

            if ( titleError || urlError) {

              this.setState({ titleError, urlError});
  
              return false;
  
            }
            
        return true;

  }

    onSubmit(e) {

      e.preventDefault();

      const isValid = this.validate();

      const { user } = this.props.auth;
      
      const _id = this.props.auth.user._id

      const newMotivationalVideoPostRequest = {

        title: this.state.title,
        url: this.state.url,
        status: "pending"

      };

    if(isValid){
    
      // clear form

      this.setState({title: ''});
      this.setState({url: ''});
      this.setState({titleError: ''});
      this.setState({urlError: ''});

      this.props.submitMotivationalVideo(newMotivationalVideoPostRequest, _id);
      
      }

    }   

    uploadVideo = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'asjad123')
        this.setState({ loading: true })
        const res = await fetch(
          '	https://api.cloudinary.com/v1_1/dzxm2eveo/video/upload',
          {
            method: 'POST',
            body: data
          }
        )
        const file = await res.json()
        // console.log(file)
        this.setState({
          url: file.secure_url,
          loading: false
        })
    
        console.log(this.state.url)
      }
      
  render() {

    const { errors } = this.state;

    return (

      <div className = "container">

      <div class="post-form mb-3">

      <h1 className = "text-dark" style = {{textAlign: 'center'}}>Motivational Video Upload</h1>
      <h4 className = "text-dark" style = {{textAlign: 'center'}}>Submit a new Motivational Video Upload Request</h4>
      <br></br>
      <div class="card card-info">
      <div class="card-header bg-success text-white">
      Motivational Video Upload Request Form
      </div>
      <div class="card-body">
        
      <form onSubmit = {this.onSubmit}> 
                  <div className="form-group">
                    <input
                    type = "title"
                    className={classnames('form-control form-control-sm', {

                      'is-invalid': this.state.titleError

                     
                  })}
                  placeholder="Write Your Motivational Video Title Here"
                  name="title"
                  value={this.state.title}
                  onChange= {this.onChange}
                  error = {errors.title}
                  />
                  <div style={{color: "Red"}}>{this.state.titleError}</div>

                  <br></br>

                  <div className = "form-group">

                  <input type="file" 
                  className='form-control form-control-sm'
                  placeholder="Motivational Video"
                  name="file" 
                  onChange={this.uploadVideo}
                  error = {errors.url}
                  />

                  </div>

                  <div style={{color: "Red"}}>{this.state.urlError}</div>
  
                  </div>
                  <button type="submit" className="btn btn-success">Submit</button>
                </form>

                </div>
                </div>
                </div>
                </div>

    );
  }
}

MotivationalVideoPostForm.propTypes = {

submitMotivationalVideo: PropTypes.func.isRequired,
auth: PropTypes.object.isRequired,
errors: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

auth: state.auth,  
errors: state.errors

});

export default connect(mapStateToProps, { submitMotivationalVideo })(MotivationalVideoPostForm);
