import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from '../../Validation/is-empty';

class Landing extends Component {

  componentDidMount(){

    if(this.props.auth.user.userRole == "Psychologist") {

      this.props.history.push('/PsychologistDashboard');

    }

    if(this.props.auth.user.userRole == "Patient") {

      this.props.history.push('/PatientDashboard');
      
    }

    if(this.props.auth.user.userRole == "GymInstructor") {

      this.props.history.push('/HealthGymInstructorDashboard');
      
    }

    if(this.props.auth.user.userRole == "MotivationalSpeaker") {

      this.props.history.push('/MotivationalSpeakerDashboard');
      
    }

    if(this.props.auth.user.userRole == "ContentWriter") {

      this.props.history.push('/MotivationalWriterDashboard');
      
    }

    if(this.props.auth.user.email == "admin@gmail.com") {

      this.props.history.push('/AdminDashboard');
      
    }

  //  if (!isEmpty(this.props.auth.user)) {
  
    //  this.props.history.push('/Dashboard');
      
   // }
  
  }

  render() {   

    return (

        <div className="landing" style = {{marginRight: '0px', marginLeft: '0px', height: '200vh'}}>
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="h3 mb-4 text-light">Your life matters</h1>
                <h2 className="h5 mb-4 text-light">You should never lose hope because we at Umeed have got all your issues covered</h2>
                <br></br>

                <h3 className="h5 mb-4 text-light">Our Counselling Services</h3>
                <p className="VideoChat">Psychological Counselling via Video Chat</p>
                <p className="TextChat">Psychological Counselling via Text Chat</p>
                <p className="MotivationalVideos">Motivational Videos</p>
                <p className="MotivationalBlogs">Motivational Articles/Blogs</p>
                <Link to="/Login" className="Login">View More</Link>
                <hr />
                <h3 className="h5 mb-4 text-light">Psychologists Available</h3>
                <p className="PsychologistsAvailable">We have a whole wide range of highly qualified and renowned Psychologists of Pakistan waiting to cater all your psychological counselling needs</p>
                <Link to="/TopRatedPsychologists" className="toprated">View Top Rated Psychologists</Link>
                <hr />
                <h3 className="h5 mb-4 text-light">Success Stories</h3>
                <p className="PsychologistsAvailable">Check out the success stories of our registered Patients</p>
                <Link to="/SuccessStories" className="successstories">View Success Stories</Link>
                <hr />
                <h3 className="h5 mb-4 text-light">Our Team</h3>
                <p>Founder Asjad Waseem</p>
                <p>Director Hafiz Waleed</p>
                <p>Director Hammad Mustafa</p>
                <br></br>
                <h3 className="h5 mb-4 text-light">Reviews</h3>
                <Link to="/MainSignUpForm" className="btn btn-lg btn-success mr-2">Sign Up</Link>
                <Link to="/Login" className="btn btn-lg btn-light">Login</Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {

auth: PropTypes.object.isRequired,

}

const mapStateToProps = (state) => ({

auth: state.auth

});

export default connect(mapStateToProps)(Landing);

