import React, { Component } from "react";
import { getMotivationalWritersProfiles } from "../../Actions/profileActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MotivationalWriterProfileItem from "./MotivationalWriterProfileItem";
// import Spinner from '../Common/Spinner';

class MotivationalWriterProfiles extends Component {
  componentDidMount() {
    this.props.getMotivationalWritersProfiles();
  }

  render() {
    const { profiles, loading } = this.props.profiles;

    console.log(profiles);

    let profileItems;

    if (profiles) {
      console.log(profiles);

      profileItems = profiles.map((profiles) => (
        <MotivationalWriterProfileItem key={profiles.id} profiles={profiles} />
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
                    Motivational Writer Profiles
                  </h1>

                  <p className="lead text-center">
                    We have a whole wide range of Professional and Expert
                    Motivational Writers
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

MotivationalWriterProfiles.propTypes = {
  getMotivationalWritersProfiles: PropTypes.func.isRequired,
  motivationalwriterprofiles: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.motivationalwriterprofiles,
});

export default connect(mapStateToProps, { getMotivationalWritersProfiles })(
  withRouter(MotivationalWriterProfiles)
);
