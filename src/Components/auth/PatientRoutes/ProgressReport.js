import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProgressReports } from "../../../Actions/progressReportActions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import ProgressReportItem from './ProgressReportItem';

class ProgressReport extends Component {

    componentDidMount() {

        const patientId = this.props.auth.user._id;
        this.props.getProgressReports(patientId);
    
      }

    render() {

        const progressreports = this.props.progressreports;

        console.log(progressreports);

        let ProgressReportItems;

        if (progressreports) {
            ProgressReportItems = progressreports.map((progressreport) => (
              <ProgressReportItem key={progressreport.id} progressreport={progressreport} />
            ));
          } else {
            ProgressReportItems = <h4>No Progress Reports Found...</h4>;
          }

    return (
        <div
        className="landing"
        style={{ marginRight: "0px", marginLeft: "0px", height: "2000vh"}}
        >
        <div className="dark-overlay Landing-inner text-light">
          <div className="profiles">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1 className="display-4 text-center text-light">

                    Progress Reports

                  </h1>

                  <p className="lead text-center">
                    You have the following progress reports
                  </p>

                  {ProgressReportItems}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ProgressReport.propTypes = {
    getProgressReports: PropTypes.func.isRequired,
    progressReport: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    progressreports: state.progressReport.progressreports,
    auth: state.auth
  });

  export default connect(mapStateToProps, { getProgressReports })(
    withRouter(ProgressReport)
  );
  