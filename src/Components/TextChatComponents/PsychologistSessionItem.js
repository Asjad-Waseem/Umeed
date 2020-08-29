import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPsychologistSessions } from "../../Actions/sessionActions";
import { withRouter } from "react-router-dom";

class PsychologistSessionItem extends Component {
  render() {

    const { session } = this.props;

    console.log(session);

    var date = new Date();

    let SessionDate = date.getFullYear()+'-'+ (date.getMonth()+1)+'-'+date.getDate();

    var dayy = date.getDate().toString().length;

    var monthh = (date.getMonth()+1).toString().length;

    var yearr = date.getFullYear();

    var finalDayy = '';
    var finalMonthh = '';

    {dayy === 1 ? 
    
    finalDayy = '0' + date.getDate()

    : 

    finalDayy = date.getDate() }

    {monthh === 1 ? 
    
    finalMonthh = '0' + (date.getMonth()+1)

    : 

    finalMonthh = date.getMonth()+1 }

    var finalDatee = yearr + "-" + finalMonthh + '-' + finalDayy;

    console.log(finalDatee);

    let SessionTiming = date.getHours() + ':' + (date.getMinutes()); 

    var date1 = new Date(session.paymentId.sessionDate)

    var days = 1;

    date1.setDate(date1.getDate() + days)

    console.log(date1);

    var day = date1.getDate();

    console.log(day);

    var day1 = day.toString();

    console.log(day1.length)

    var month = date1.getMonth()+1

    console.log(month);

    var month1 = month.toString();

    console.log(month1);

    var finalDay = '';
    var finalMonth = '';

    {day1.length === 1 ? 
    
    finalDay = '0' + day1

    : 

    finalDay = day1 }

    {month1.length === 1 ? 
    
    finalMonth = '0' + month1
    
    : 
    
    finalMonth = month1 }

    var finalYear = date1.getFullYear();

    console.log(finalYear);

    var sessionValidityDate = finalYear + '-' + finalMonth + '-' + finalDay

    console.log(sessionValidityDate); 

    console.log(SessionDate);

    console.log(finalDatee);

    // if(sessionValidityDate >= finalDatee) {

    //     console.log(session);

    return (
        <div>
        {sessionValidityDate >=  finalDatee && session.paymentId.serviceType === "Text Chat" ?

      <div className="card card-body bg-light mb-3 mx-auto" style = {{maxWidth: '35rem'}}>

        <div className="column">
        <p style = {{color: "Black"}}>Session Status: {session.sessionStatus}</p>
        <p style = {{color: "Black"}}>Session Type: {session.paymentId.serviceType}</p>
        <p style = {{color: "Black"}}>Session Date: {session.paymentId.sessionDate}</p>
        <p style = {{color: "Black"}}>Session Time: {session.paymentId.sessionTiming}</p>
        <p style = {{color: "Black"}}>Session Validity Date: {sessionValidityDate}</p>
        <p style = {{color: "Black"}}>Patient Name: {session.patientId.name}</p>
        <h6 style = {{color: "Black"}}>Email required to connect with the Patient: {session.patientId.email}</h6>

        <Link
         to={'/loginChat'}
         className="btn btn-success"
         >
         Text Chat
         </Link>
          
         <div className="col-lg-6 col-md-4 col-8">
           
         </div>
         </div>

      </div>

      : session.paymentId.sessionDate = finalDatee && session.paymentId.serviceType === "Video Chat" ?

      <div className="card card-body bg-light mb-3 mx-auto" style = {{maxWidth: '35rem'}}>

      <div className="column">
     
      <p style = {{color: "Black"}}>Session Status: {session.sessionStatus}</p>
      <p style = {{color: "Black"}}>Session Type: {session.paymentId.serviceType}</p>
      <p style = {{color: "Black"}}>Session Date: {session.paymentId.sessionDate}</p>
      <p style = {{color: "Black"}}>Session Time: {session.paymentId.sessionTiming}</p>
      <p style = {{color: "Black"}}>Session Validity Date: {sessionValidityDate}</p>
      <p style = {{color: "Black"}}>Patient Name: {session.patientId.name}</p>
      <h6 style = {{color: "Black"}}>Click on the Video Chat button below to get redirected to your scheduled Zoom Video Chat Session with the Patient 

      <br></br>
      <br></br>

      {session.meetingDetails ? 

      <a className="text-white p-2" href={session.meetingDetails}>
        
      <i>

      <button className="btn btn-success" style = {{marginLeft: '-9px'}}>

        Video Chat

      </button>

      </i>

      </a>

     : null}

      </h6>

        <div className="col-lg-6 col-md-4 col-8">
         
        </div>
      </div>

    </div>

    : null}

      </div>
    );
  }
}

PsychologistSessionItem.propTypes = {
    session: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
  });
  
export default connect(mapStateToProps)(PsychologistSessionItem);

