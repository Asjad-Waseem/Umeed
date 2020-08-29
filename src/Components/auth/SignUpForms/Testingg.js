import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Testingg extends Component {

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
                <br></br>
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

    )
  }
}

export default Testingg;
