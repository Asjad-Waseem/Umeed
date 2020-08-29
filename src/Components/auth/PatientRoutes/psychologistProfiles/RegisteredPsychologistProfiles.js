import React, { Component } from "react";
import { getRegisteredPsychologistProfiles } from "../../../../Actions/profileActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RegisteredPsychologistProfileItem from "./RegisteredPsychologistProfileItem";
// import Spinner from '../Common/Spinner';

class RegisteredPsychologistProfiles extends Component {

  componentDidMount() {

    const patientId = this.props.auth.user._id;

    this.props.getRegisteredPsychologistProfiles(patientId);
  
  }

  render() {
    const { profiles, loading } = this.props.profiles;

    console.log(profiles);

    let profileItems;

    if (profiles) {
      profileItems = profiles.map((profiles) => (
        <RegisteredPsychologistProfileItem key={profiles.id} profiles={profiles} />
      ));
    } else {
      profileItems = <h4>No Profiles Found...</h4>;
    }

    return (
      <div
        className="landing"
        style={{ marginRight: "0px", marginLeft: "0px", height: "550vh" }}
      >
        <div className="dark-overlay Landing-inner text-light">
          <div className="profiles">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="display-4 text-center text-light">
                   Registered Psychologist Profiles
                  </h1>

                  <p className="lead text-center">
                    You have availed services from the following Psychologists
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

RegisteredPsychologistProfiles.propTypes = {
  getRegisteredPsychologistProfiles: PropTypes.func.isRequired,
  registeredPsychologists: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profiles: state.registeredPsychologists,
  auth: state.auth
});

export default connect(mapStateToProps, { getRegisteredPsychologistProfiles })(
  withRouter(RegisteredPsychologistProfiles)
);
