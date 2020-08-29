import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTopRatedPsychologistProfiles } from '../../Actions/topratedpsychologistActions';
import TopRatedProfileItem from "./TopRatedProfileItem";

class TopRatedPsychologists extends Component {

    componentDidMount () {

        this.props.getTopRatedPsychologistProfiles();

    }

  render() {

    const { profiles, loading } = this.props.toprated;

    let profileItems;

    if (profiles) {
      profileItems = profiles.map((profiles) => (
        <TopRatedProfileItem key={profiles.id} profiles={profiles} />
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
                    Top Rated Psychologist Profiles
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

TopRatedPsychologists.propTypes = {

    getTopRatedPsychologistProfiles: PropTypes.func.isRequired,    
    toprated: PropTypes.object.isRequired
    
}

const mapStateToProps = state => ({

toprated: state.toprated

});

export default connect(mapStateToProps, { getTopRatedPsychologistProfiles })(TopRatedPsychologists);
