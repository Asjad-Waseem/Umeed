import React, { Component } from "react";
import { getHealthGymInstructorsProfiles } from "../../Actions/profileActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import HealthGymInstructorProfileItem from "./HealthGymInstructorProfileItem";
// import Spinner from '../Common/Spinner';

class HealthGymInstructorProfiles extends Component {
  componentDidMount() {
    this.props.getHealthGymInstructorsProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profiles;

    console.log(profiles);

    let profileItems;

    if (profiles) {
      profileItems = profiles.map((profiles) => (
        <HealthGymInstructorProfileItem key={profiles.id} profiles={profiles} />
      ));
    } else {
      profileItems = <h4>No Profiles Found...</h4>;
    }

    return (
      <div
        className="landing"
        style={{ marginRight: "0px", marginLeft: "0px", height: "200vh" }}
      >
        <div className="dark-overlay Landing-inner text-light">
          <div className="profiles">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="display-4 text-center text-light">
                    Health/Gym Instructor Profiles
                  </h1>

                  <p className="lead text-center">
                    We have a whole wide range of Professional and Expert
                    Health/Gym Instructors
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

HealthGymInstructorProfiles.propTypes = {
  getHealthGymInstructorsProfiles: PropTypes.func.isRequired,
  healthgyminstructorprofiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.healthgyminstructorprofiles,
});

export default connect(mapStateToProps, { getHealthGymInstructorsProfiles })(
  withRouter(HealthGymInstructorProfiles)
);
