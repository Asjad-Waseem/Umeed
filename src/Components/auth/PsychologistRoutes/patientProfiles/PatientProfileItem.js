import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

class PatientProfileItem extends Component {
  render() {
    const { profiles } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <MediaQuery maxDeviceWidth={600}>
            <div className="col-2">
              {profiles.personImage ? (
                <img
                  className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
                  src={profiles.personImage}
                  alt="No Image"
                  style={{ borderRadius: "50%", height: "32px", width: "32px" }}
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

          <MediaQuery minDeviceWidth={600} maxDeviceWidth={768}>
            <div className="col-2">
              {profiles.personImage ? (
                <img
                  className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
                  src={profiles.personImage}
                  alt="No Image"
                  style={{ borderRadius: "50%", height: "50px", width: "50px" }}
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

          <MediaQuery minDeviceWidth={769} maxDeviceWidth={900}>
            <div className="col-2">
              {profiles.personImage ? (
                <img
                  className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
                  src={profiles.personImage}
                  alt="No Image"
                  style={{ borderRadius: "50%", height: "75px", width: "75px" }}
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
            <div className="col-2">
              {profiles.personImage ? (
                <img
                  className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
                  src={profiles.personImage}
                  alt="No Image"
                  style={{
                    borderRadius: "50%",
                    height: "100px",
                    width: "100px",
                  }}
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

          <MediaQuery minDeviceWidth={1025}>
            <div className="col-2">
              {profiles.personImage ? (
                <img
                  className="img-responsive"
                  src={profiles.personImage}
                  alt="No Image"
                  style={{
                    borderRadius: "50%",
                    height: "150px",
                    width: "150px",
                  }}
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

          <div className="col-lg-6 col-md-4 col-8">
            <h3>{profiles.name}</h3>
            <h5>{(profiles.gender = "0" ? "Male" : "Female")}</h5>

            <p className="text-dark">Age: {profiles.age}</p>

            <Link
              to={`/PatientProfile/${profiles._id}`}
              className="btn btn-success"
            >

              View Profile

            </Link>

            <Link
            to={`/ProgressReport/${profiles._id}`}
            className="btn btn-success ml-1"
            >

            Submit a Progress Report

            </Link>

          </div>
        </div>
      </div>
    );
  }
}

PatientProfileItem.propTypes = {
  patientprofiles: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps)(PatientProfileItem);