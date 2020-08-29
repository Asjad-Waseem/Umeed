import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPatientSessions } from "../../Actions/sessionActions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import PatientSessionItem from './PatientSessionItem';

class patientSessions extends Component {

    componentDidMount() {

        const patientId = this.props.auth.user._id;
        this.props.getPatientSessions(patientId);
    
      }

    render() {

        const sessions = this.props.sessions;

        console.log(sessions);

        let PatientsessionItems;

        if (sessions) {
            PatientsessionItems = sessions.map((session) => (
              <PatientSessionItem key={session.id} session={session} />
            ));
          } else {
            PatientsessionItems = <h4>No Sessions Found...</h4>;
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

                    Active Sessions

                  </h1>

                  <p className="lead text-center">
                    You have the following active sessions
                  </p>

                  {PatientsessionItems}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

patientSessions.propTypes = {
    getPatientSessions: PropTypes.func.isRequired,
    session: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    sessions: state.session.patientSessions,
    auth: state.auth
  });

  export default connect(mapStateToProps, { getPatientSessions })(
    withRouter(patientSessions)
  );
  