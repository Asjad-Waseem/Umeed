import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import isEmpty from "../../Validation/is-empty";
import MediaQuery from "react-responsive";

class SuccessStoryItem extends Component {
  render() {
    const { successstories } = this.props;

    console.log(successstories);

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <MediaQuery maxDeviceWidth={600}>
            <div className="col-2">
              {successstories.personImage ? (
                <img
                  className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
                  src={successstories.personImage}
                  alt="No Image"
                  style={{ borderRadius: "50%", height: "32px", width: "32px" }}
                />
              ) : (
                <img
                  className="rounded-circle"
                  src={require("../Layout/Avatar.png")}
                  alt="No Image"
                />
              )}
            </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth={601} maxDeviceWidth={768}>
            <div className="col-2">
              {successstories.personImage ? (
                <img
                  className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
                  src={successstories.personImage}
                  alt="No Image"
                  style={{ borderRadius: "50%", height: "50px", width: "50px" }}
                />
              ) : (
                <img
                  className="rounded-circle"
                  src={require("../Layout/Avatar.png")}
                  alt="No Image"
                />
              )}
            </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth={769} maxDeviceWidth={900}>
            <div className="col-2">
              {successstories.personImage ? (
                <img
                  className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
                  src={successstories.personImage}
                  alt="No Image"
                  style={{ borderRadius: "50%", height: "75px", width: "75px" }}
                />
              ) : (
                <img
                  className="rounded-circle"
                  src={require("../Layout/Avatar.png")}
                  alt="No Image"
                />
              )}
            </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth={900} maxDeviceWidth={1024}>
            <div className="col-2">
              {successstories.personImage ? (
                <img
                  className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
                  src={successstories.personImage}
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
                  src={require("../Layout/Avatar.png")}
                  alt="No Image"
                />
              )}
            </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth={1025}>
            <div className="col-2">
              {successstories.personImage ? (
                <img
                  className="img-responsive"
                  src={successstories.personImage}
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
                  src={require("../Layout/Avatar.png")}
                  alt="No Image"
                />
              )}
            </div>
          </MediaQuery>

          <div className="col-lg-6 col-md-4 col-8">

              {successstories.name ?

            <h3>{successstories.name}</h3>

            : null}

            <p className="text-dark">
               {successstories.successStory}
            </p>

          </div>
        </div>
      </div>
    );
  }
}

SuccessStoryItem.propTypes = {
  successStory: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({  
  errors: state.errors,
});

export default connect(mapStateToProps)(SuccessStoryItem);
