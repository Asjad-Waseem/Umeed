import React, { Component } from "react";
import { getRegisteredPatientProfiles } from "../../../../Actions/profileActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PatientProfileItem from "./PatientProfileItem";
// import Spinner from '../Common/Spinner';

class PatientProfiles extends Component {

  componentDidMount() {

    const psychologistId = this.props.auth.user._id;

    this.props.getRegisteredPatientProfiles(psychologistId);
  
  }

  render() {
    const { profiles, loading } = this.props.profiles;

    // console.log(p);

    // const id = '';

    // const uniqueData = new Set()

    // const Array4 = ['123']
    
    // const Array5 = ['123']    

    // const Array6 = ['123']
    
    // const Array7 = ['123'] 

    // const Array2 = [Array4, Array5]

    // const Array3 = [Array6, Array7]

    // const Array1 = [Array2, Array3]


    // console.log(Array1);

    // const uniqueData = new Set()
    // profiles.forEach( profiles => uniqueData.add( profiles.patientId ) )

    console.log(profiles);

    // if(profiles) {

    //  // p = profiles.filter((profiles.id) => array.indexOf(val) == id);

    // }

    let profileItems;

    if (profiles) {
      profileItems = profiles.map((profiles) => (
        <PatientProfileItem key={profiles.id} profiles={profiles} />
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
                    Registered Patient Profiles
                  </h1>

                  <p className="lead text-center">
                    You have provided services to the following Patients
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

PatientProfiles.propTypes = {
  getRegisterdPatientProfiles: PropTypes.func.isRequired,
  patientprofiles: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profiles: state.patientprofiles,
  auth: state.auth
});

export default connect(mapStateToProps, { getRegisteredPatientProfiles })(
  withRouter(PatientProfiles)
);
