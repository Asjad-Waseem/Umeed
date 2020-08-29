import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProgressReports } from "../../../Actions/progressReportActions";
import { withRouter } from "react-router-dom";

class ProgressReportItem extends Component {
  render() {

    const { progressreport } = this.props;

    console.log(progressreport);

    const _id = progressreport._id;

    return (
        <div>

      <div className="card card-body bg-light mb-3 mx-auto" style = {{maxWidth: '35rem'}}>

        <div className="column">
        <p style = {{color: "Black"}}>Patient Name: {this.props.auth.user.name}</p>
            
        {progressreport.psychologistId ? 

        <p style = {{color: "Black"}}>Psychologist Name: {progressreport.psychologistId.name}</p>

        : null}

        {progressreport.conditionImproved ?

        <p>

<label style = {{color: "Black"}}>Condition Improved: {progressreport.conditionImproved}</label>

<br></br>

        <input type="range" value = {progressreport.conditionImproved} min = "0" max = "10"/>

        </p>
        : null}

        {progressreport.reportDate ? 

        <p style = {{color: "Black"}}>Report Date: {progressreport.reportDate}</p>
         
        : null}

        {progressreport.reportTiming ? 
        
        <p style = {{color: "Black"}}>Report Timing: {progressreport.reportTiming}</p>

        : null}
        
        <Link
         to={`/ProgressReportPatient/${_id}`}
         className="btn btn-success"
         >
         View Full Progress Report
         </Link>
          
         <div className="col-lg-6 col-md-4 col-8">
           
         </div>
         </div>

      </div>

      </div>
    );
  }
}

ProgressReportItem.propTypes = {
    progressReport: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
  });
  
export default connect(mapStateToProps)(ProgressReportItem);

