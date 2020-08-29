import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPsychologistSessions } from "../../Actions/sessionActions";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import PsychologistSessionItem from './PsychologistSessionItem';

class sessions extends Component {

    componentDidMount() {

        const psychologistId = this.props.auth.user._id;
        this.props.getPsychologistSessions(psychologistId);
    
      }

    render() {

        const sessions = this.props.sessions;

        console.log(sessions);

        // let sessionId;
        // let sessionDateFinal;
        // let sessionTimingFinal;
        // let sessionType;
        // let sessionAmount;
        // let patientName;
        // let patientEmail;

        let sessionItems;

        if (sessions) {
            sessionItems = sessions.map((session) => (
              <PsychologistSessionItem key={session.id} session={session} />
            ));
          } else {
            sessionItems = <h4>No Sessions Found...</h4>;
          }

        //   if (sessions) {


        //     sessionItems = sessions.map((session) => (
        //       <PsychologistSessionItem key={session.id} session={session} />
        //     ));
        //   } else {
        //     sessionItems = <h4>No Sessions Found...</h4>;
        //   }

        // if(sessions) {

        //  //   sessionItems = sessions.map((session) => (

        //     sessions.forEach((session) => {


        //     if(session.paymentId.serviceType === "Text Chat") {

        //         var date1 = new Date(session.paymentId.sessionDate)

        //         var days = 1;

        //         date1.setDate(date1.getDate() + days)

        //         console.log(date1);

        //         var day = date1.getDate();

        //         console.log(day);

        //         var day1 = day.toString();

        //         console.log(day1.length)

        //         var month = date1.getMonth()+1

        //         console.log(month);

        //         var month1 = month.toString();

        //         console.log(month1);

        //         var finalDay = '';
        //         var finalMonth = '';

        //         {day1.length === 1 ? 
                
        //         finalDay = '0' + day1
            
        //         : 
            
        //         finalDay = day1 }

        //         {month1.length === 1 ? 
                
        //         finalMonth = '0' + month1
                
        //         : 
                
        //         finalMonth = month1 }

        //         var finalYear = date1.getFullYear();

        //         console.log(finalYear);

        //         var sessionValidityDate = finalYear + '-' + finalMonth + '-' + finalDay

        //         console.log(sessionValidityDate); 

        //         console.log(SessionDate);

        //         console.log(finalDatee);

        //         if(sessionValidityDate >= finalDatee) {

        //             console.log(session);

                    // sessionItems = session.map((session) => (
                    //            <PsychologistSessionItem key={session.id} session={session} />
                    //    ));

                      // sessionItems =  <PsychologistSessionItem key={session.id} session={session} /> 

                    //   sessionItems = session.forEach((session) => {

                    //         <PsychologistSessionItem key={session.id} session={session} />

                    //   });

                    //   console.log(sessionItems);

                        //   } else {
                        //     sessionItems = <h4>No Sessions Found...</h4>;
                        //   }

                    

                    // sessionId = session._id;
                    // sessionDateFinal = session.paymentId.sessionDate;
                    // sessionTimingFinal = session.paymentId.sessionTiming;
                    // sessionType = session.paymentId.serviceType;
                    // sessionAmount = session.paymentId.amount;
                    // patientName = session.patientId.name;
                    // patientEmail = session.patientId.email;
            
                    // console.log(session);

                // }

        //     }
        // });
      // }

    //   else {
    //     sessionItems = <h4>No Sessions Found...</h4>;
    //   }

    //     if (sessions) {
    //         sessions.forEach((session) => {
    //           if (

                
    //             session.paymentId.sessionDate === SessionDate && session.paymentId.serviceType === "Video Chat"
    //           ) {

    //             console.log(session);
    //         }
    //     });
    //   }
  
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

                  {sessionItems}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

sessions.propTypes = {
    getPsychologistSessions: PropTypes.func.isRequired,
    session: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    sessions: state.session.psychologistSessions,
    auth: state.auth
  });

  
  
  export default connect(mapStateToProps, { getPsychologistSessions })(
    withRouter(sessions)
  );
  