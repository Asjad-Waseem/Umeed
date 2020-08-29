import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProgressReports } from "../../../Actions/progressReportActions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

class ProgressReportIndividual extends Component {

  componentDidMount() {

    const patientId = this.props.auth.user._id;
    this.props.getProgressReports(patientId);

  }

  render() {
    const { progressreports }  = this.props.progressreport;

    console.log(progressreports);

    let reportId;
    let reportDate;
    let reportTime;
    let patientName;
    let patientImage;
    let psychologistImage;
    let psychologistName;
    let conditionImproved;
    let observedConditionBeforeSession;
    let observedConditionAfterSession;
    let suggesstions;

    console.log(progressreports);

    if (progressreports) {
      progressreports.forEach((progressreport) => {
        if (
          progressreport._id === this.props.match.params._id
        ) {
          
          reportId = progressreport._id;
          reportDate = progressreport.reportDate;
          reportTime = progressreport.reportTiming;
          patientName = this.props.auth.user.name;
          patientImage = this.props.auth.user.personImage;
          psychologistImage = progressreport.psychologistId.personImage;
          psychologistName = progressreport.psychologistId.name;
          conditionImproved = progressreport.conditionImproved;
          observedConditionBeforeSession = progressreport.observedConditionBeforeSession;
          observedConditionAfterSession = progressreport.observedConditionAfterSession;
          suggesstions = progressreport.suggesstions;
        
        }
      });
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Link
              to="/ProgressReportPatient"
              className="btn btn-light mb-3"
            >
              Back to Progress Reports

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
                    {patientImage ? (
                      <img
                        className="rounded-circle"
                        src={patientImage}
                        alt="No Image"
                        style={{ height: "100px", width: "100px" }}
                      />
                    ) : (
                      <img
                        className="rounded-circle"
                        src={require("../../Layout/Avatar.png")}
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
                    {patientImage ? (
                      <img
                        className="rounded-circle"
                        src={patientImage}
                        alt="No Image"
                        style={{ height: "150px", width: "150px" }}
                      />
                    ) : (
                      <img
                        className="rounded-circle"
                        src={require("../../Layout/Avatar.png")}
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
                    {patientImage ? (
                      <img
                        className="rounded-circle"
                        src={patientImage}
                        alt="No Image"
                        style={{ height: "200px", width: "200px" }}
                      />
                    ) : (
                      <img
                        className="rounded-circle"
                        src={require("../../Layout/Avatar.png")}
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
                    {patientImage ? (
                      <img
                        className="rounded-circle"
                        src={patientImage}
                        alt="No Image"
                        style={{ height: "250px", width: "250px" }}
                      />
                    ) : (
                      <img
                        className="rounded-circle"
                        src={require("../../Layout/Avatar.png")}
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
                    {patientImage ? (
                      <img
                        className="rounded-circle"
                        src={patientImage}
                        alt="No Image"
                        style={{ height: "300px", width: "300px" }}
                      />
                    ) : (
                      <img
                        className="rounded-circle"
                        src={require("../../Layout/Avatar.png")}
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
                    {patientImage ? (
                      <img
                        className="rounded-circle"
                        src={patientImage}
                        alt="No Image"
                        style={{ height: "350px", width: "350px" }}
                      />
                    ) : (
                      <img
                        className="rounded-circle"
                        src={require("../../Layout/Avatar.png")}
                        alt="No Image"
                      />
                    )}
                  </div>
                </MediaQuery>
              </div>

              <div className="text-center">
                <h1 className="display-4 text-center text-light">
                  {patientName}
                </h1>

                <p className="lead text-center">

                   Report Date: {reportDate}

                </p>

                    <p className = "lead text-center">Report Time: {reportTime}</p>

                    <p className = "lead text-center">Psychologist Name: {psychologistName}</p>

                    <label className = "lead text-light" style = {{color: "Black"}}>Condition Improved: {conditionImproved}/10</label>

                    <br></br>

<input type="range" value = {conditionImproved} min = "0" max = "10"/>

              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-light mb-3 text-center">
              <h3 className="text-center text-success">Observed Condition Before Session</h3>

              <p className="lead" style = {{whiteSpace: 'pre-line'}}> {observedConditionBeforeSession} </p>

              <p className="lead"></p>

            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-light mb-3 text-center">
              <h3 className="text-center text-success">Observed Condition After Session</h3>

              <p className="lead" style = {{whiteSpace: 'pre-line'}}> {observedConditionAfterSession} </p>

              <p className="lead"></p>

            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-light mb-3 text-center">
              <h3 className="text-center text-success">Suggesstions</h3>

              <p className="lead" style = {{whiteSpace: 'pre-line'}}> {suggesstions} </p>

              <p className="lead"></p>

            </div>
          </div>
        </div>

      </div>
    );
  }
}

ProgressReportIndividual.propTypes = {
  getProgressReports: PropTypes.func.isRequired,
  progressReport: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  progressreport: state.progressReport,
  auth: state.auth
});

export default connect(mapStateToProps, { getProgressReports })(
  withRouter(ProgressReportIndividual)
);
