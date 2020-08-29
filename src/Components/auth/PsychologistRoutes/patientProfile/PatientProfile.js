import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRegisteredPatientProfiles } from "../../../../Actions/profileActions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

class PatientProfile extends Component {
  componentDidMount() {

    const psychologistId = this.props.auth.user._id;
    this.props.getRegisteredPatientProfiles(psychologistId);

  }

  render() {
    const { profiles, loading } = this.props.profile;

    let patientId;
    let personImage;
    let profileName;
    let profileGender;
    let profileEmail;
    let profileRole;
    let profileAge;

    console.log(profiles);
    if (profiles) {
      profiles.forEach((profile) => {
        if (profile._id === this.props.match.params.PatientProfileId) {

          patientId = profile._id;
          personImage = profile.personImage;
          profileName = profile.name;
          profileGender = profile.gender;
          profileEmail = profile.email;
          profileRole = profile.userRole;
          profileAge = profile.age;

        }
      });
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Link to="/PatientProfiles" className="btn btn-light mb-3">
              Back to Registered Patient Profiles
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-success text-white mb-3">
              <div className="row">
                <MediaQuery maxDeviceWidth={600}>
                  <div
                    className="col-4 col-md-3 m-auto"
                    style={{ textAlign: "center" }}
                  >
                    {personImage ? (
                      <img
                        className="rounded-circle"
                        src={personImage}
                        alt="No Image"
                        style={{ height: "100px", width: "100px" }}
                      />
                    ) : (
                      <img
                        className="rounded-circle"
                        src={require("../../../Layout/Avatar.png")}
                        alt="No Image"
                      />
                    )}
                  </div>
                </MediaQuery>

                <MediaQuery minDeviceWidth={601} maxDeviceWidth={900}>
                  <div
                    className="col-4 col-md-3 m-auto"
                    style={{ textAlign: "center" }}
                  >
                    {personImage ? (
                      <img
                        className="rounded-circle"
                        src={personImage}
                        alt="No Image"
                        style={{ height: "150px", width: "150px" }}
                      />
                    ) : (
                      <img
                        className="rounded-circle"
                        src={require("../../../Layout/Avatar.png")}
                        alt="No Image"
                      />
                    )}
                  </div>
                </MediaQuery>

                <MediaQuery minDeviceWidth={900} maxDeviceWidth={1024}>
                  <div
                    className="col-4 col-md-3 m-auto"
                    style={{ textAlign: "center" }}
                  >
                    {personImage ? (
                      <img
                        className="rounded-circle"
                        src={personImage}
                        alt="No Image"
                        style={{ height: "200px", width: "200px" }}
                      />
                    ) : (
                      <img
                        className="rounded-circle"
                        src={require("../../../Layout/Avatar.png")}
                        alt="No Image"
                      />
                    )}
                  </div>
                </MediaQuery>

                <MediaQuery minDeviceWidth={1025} maxDeviceWidth={1920}>
                  <div
                    className="col-4 col-md-3 m-auto"
                    style={{ textAlign: "center" }}
                  >
                    {personImage ? (
                      <img
                        className="rounded-circle"
                        src={personImage}
                        alt="No Image"
                        style={{ height: "250px", width: "250px" }}
                      />
                    ) : (
                      <img
                        className="rounded-circle"
                        src={require("../../../Layout/Avatar.png")}
                        alt="No Image"
                      />
                    )}
                  </div>
                </MediaQuery>

                <MediaQuery minDeviceWidth={1920} maxDeviceWidth={2560}>
                  <div
                    className="col-4 col-md-3 m-auto"
                    style={{ textAlign: "center" }}
                  >
                    {personImage ? (
                      <img
                        className="rounded-circle"
                        src={personImage}
                        alt="No Image"
                        style={{ height: "300px", width: "300px" }}
                      />
                    ) : (
                      <img
                        className="rounded-circle"
                        src={require("../../../Layout/Avatar.png")}
                        alt="No Image"
                      />
                    )}
                  </div>
                </MediaQuery>

              <MediaQuery minDeviceWidth={2560}>
                <div
                  className="col-4 col-md-3 m-auto"
                  style={{ textAlign: "center" }}
                >
                  {personImage ? (
                    <img
                      className="rounded-circle"
                      src={personImage}
                      alt="No Image"
                      style={{ height: "350px", width: "350px" }}
                    />
                  ) : (
                    <img
                      className="rounded-circle"
                      src={require("../../../Layout/Avatar.png")}
                      alt="No Image"
                    />
                  )}
                </div>
              </MediaQuery>

              </div>

              <div className="text-center">
                <h1 className="display-4 text-center text-light">
                  {profileName}
                </h1>
                <p className="lead text-center">
                  {profileRole === "Patient" ? "Patient" : null}
                </p>

                <Link
                to={`/ProgressReport/${patientId}`}
                className="btn btn-success ml-1" 
                style = {{borderColor: "White"}}
                >

                Submit a Progress Report

                </Link>
                
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-light mb-3 text-center">
              <h3 className="text-center text-success">Account Details</h3>
              <p className="lead">Full Name: {profileName}</p>

              {this.props.auth.user.userRole === "admin" ?

              <p className="lead">Email: {profileEmail}</p>

              : null}

              <p className="lead">Age: {profileAge}</p>

              <p className="lead">
                Gender: {profileGender === 0 ? "Male" : "Female"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PatientProfile.propTypes = {
  getRegisteredPatientProfiles: PropTypes.func.isRequired,
  patientprofiles: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.patientprofiles,
  auth: state.auth
});

export default connect(mapStateToProps, { getRegisteredPatientProfiles })(
  withRouter(PatientProfile)
);
