import React, { Component } from "react";
import { getMotivationalSpeakersProfiles } from "../../Actions/profileActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MotivationalSpeakerProfileItem from "./MotivationalSpeakerProfileItem";
// import Spinner from '../Common/Spinner';

class MotivationalSpeakerProfiles extends Component {
  componentDidMount() {
    this.props.getMotivationalSpeakersProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profiles;

    console.log(profiles);

    let profileItems;

    if (profiles) {
      profileItems = profiles.map((profiles) => (
        <MotivationalSpeakerProfileItem key={profiles.id} profiles={profiles} />
      ));
    } else {
      profileItems = <h4>No Profiles Found...</h4>;
    }

    return (
      <div
        className="landing"
        style={{ marginRight: "0px", marginLeft: "0px" }}
      >
        <div className="dark-overlay Landing-inner text-light">
          <div className="profiles">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="display-4 text-center text-light">
                    Motivational Speaker Profiles
                  </h1>

                  <p className="lead text-center">
                    We have a whole wide range of Professional and Expert
                    Motivational Speakers
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

MotivationalSpeakerProfiles.propTypes = {
  getMotivationalSpeakersProfiles: PropTypes.func.isRequired,
  motivationalspeakerprofiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.motivationalspeakerprofiles,
});

export default connect(mapStateToProps, { getMotivationalSpeakersProfiles })(
  withRouter(MotivationalSpeakerProfiles)
);
