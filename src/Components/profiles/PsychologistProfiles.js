import React, { Component } from "react";
import { getPsychologistProfiles } from "../../Actions/profileActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PsychologistProfileItem from "./PsychologistProfileItem";
// import Spinner from '../Common/Spinner';

class PsychologistProfiles extends Component {
  componentDidMount() {
    this.props.getPsychologistProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profiles;

    console.log(profiles);

    let profileItems;

    if (profiles) {
      profileItems = profiles.map((profiles) => (
        <PsychologistProfileItem key={profiles.id} profiles={profiles} />
      ));
    } else {
      profileItems = <h4>No Profiles Found...</h4>;
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
                    Psychologist Profiles
                  </h1>

                  <p className="lead text-center">
                    We have a whole wide range of Professional and Expert
                    Psychologists
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

PsychologistProfiles.propTypes = {
  getPsychologistProfiles: PropTypes.func.isRequired,
  psychologistprofiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.psychologistprofiles,
});

export default connect(mapStateToProps, { getPsychologistProfiles })(
  withRouter(PsychologistProfiles)
);
