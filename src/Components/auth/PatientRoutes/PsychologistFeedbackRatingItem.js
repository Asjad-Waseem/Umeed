import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPsychologistFeedback } from "../../../Actions/psychologistFeedbackActions";
import { withRouter } from "react-router-dom";
import { Rate } from 'antd';

class PsychologistFeedbackRatingItem extends Component {
    
  render() {

    const { psychologistfeedback } = this.props;

    console.log(psychologistfeedback);

    const _id = psychologistfeedback._id;

    return (
      <div className = "container">

      <div className="card card-body bg-light mb-3 mx-auto" style = {{maxWidth: '35rem'}}>

        <div className="column">
        <p style = {{color: "Black"}}>Patient Name: {psychologistfeedback.patientId.name} </p>
            
        <p style = {{color: "Black"}}>Feedback: {psychologistfeedback.feedback}</p>

        <p style = {{color: "Black"}}>Feedback Date: {psychologistfeedback.feedbackDate}</p>

        <p style = {{color: "Black"}}>Feedback Time: {psychologistfeedback.feedbackTiming}</p>

        <Rate allowHalf defaultValue={psychologistfeedback.rating}/>    
          
         <div className="col-lg-6 col-md-4 col-8">
           
         </div>
         </div>

      </div>

      </div>
    );
  }
}

PsychologistFeedbackRatingItem.propTypes = {
    psychologistfeedback: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
  });
  
export default connect(mapStateToProps)(PsychologistFeedbackRatingItem);

