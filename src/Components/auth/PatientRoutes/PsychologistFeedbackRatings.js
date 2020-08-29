import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPsychologistFeedback } from "../../../Actions/psychologistFeedbackActions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PsychologistFeedbackRatingItem from './PsychologistFeedbackRatingItem';

class PsychologistFeedbackRatings extends Component {

    componentDidMount() {

        const psychologistId = this.props.match.params._id;

        this.props.getPsychologistFeedback(psychologistId);
    
      }

    render() {

        const psychologistfeedbacks = this.props.psychologistfeedbacks;

        console.log(psychologistfeedbacks);

        let PsychologistFeedbackRatingItems;

        if (psychologistfeedbacks) {
            PsychologistFeedbackRatingItems = psychologistfeedbacks.map((psychologistfeedback) => (
              <PsychologistFeedbackRatingItem key={psychologistfeedback.id} psychologistfeedback={psychologistfeedback} />
            ));
          } else {
            PsychologistFeedbackRatingItems = <h4>No Feedback/Ratings found...</h4>;
          }

    return (
        <div
        className="landing"
        style={{ marginRight: "0px", marginLeft: "0px", height: "3000vh"}}
        >
        <div className="dark-overlay Landing-inner text-light">
          <div className="profiles">
            <div className="container">
              <div className="row">
                <div className="col-md-12">

                  <h1 className="display-4 text-center text-light">

                    Feedback/Ratings

                  </h1>

                  <p className="lead text-center">
                    The Patients have given the following feedback/ratings against the selected Psychologist
                  </p>

                  {PsychologistFeedbackRatingItems}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

PsychologistFeedbackRatings.propTypes = {
    getPsychologistFeedback: PropTypes.func.isRequired,
    psychologistfeedback: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    psychologistfeedbacks: state.psychologistfeedback.psychologistfeedbacks,
    auth: state.auth
  });

  export default connect(mapStateToProps, { getPsychologistFeedback })(
    withRouter(PsychologistFeedbackRatings)
  );
  