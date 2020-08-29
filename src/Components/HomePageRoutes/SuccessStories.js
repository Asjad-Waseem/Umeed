import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSuccessStories } from '../../Actions/successStoryActions';
import SuccessStoryItem from "./SuccessStoryItem";

class SuccessStories extends Component {

    componentDidMount () {

        this.props.getSuccessStories();

    }

  render() {

    const { successstories } = this.props.successStory;

    let profileItems;

    if (successstories) {
      profileItems = successstories.map((successstories) => (
        <SuccessStoryItem key={successstories.id} successstories={successstories} />
      ));
    } else {
      profileItems = <h4>No Success Stories Found...</h4>;
    }

    return (
      <div
        className="landing"
        style={{ marginRight: "0px", marginLeft: "0px", height: "350vh" }}
      >
        <div className="dark-overlay Landing-inner text-light">
          <div className="profiles">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="display-4 text-center text-light">
                    Success Stories
                  </h1>

                  <p className="lead text-center">
                    Check out the success stories of our registered Patients
                  </p>

                  {profileItems}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SuccessStories.propTypes = {

    getSuccessStories: PropTypes.func.isRequired,    
    successStory: PropTypes.object.isRequired
    
}

const mapStateToProps = state => ({

successStory: state.successStory

});

export default connect(mapStateToProps, { getSuccessStories })(SuccessStories);

