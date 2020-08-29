import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPsychologistProfiles } from "../../Actions/profileActions";
import { withRouter } from "react-router-dom";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import {
  selectTextChatSession,
  selectVideoChatSession,
  checkAvailableSlots,
} from "../../Actions/paymentActions";
import MediaQuery from "react-responsive";

let finalTimings = [];
let bookedSlots = [];

const initialState = {

  sessionDate: '',
  sessionDateError:'',
  isActive: false,
  PsychologistId:'',
  Day: '',
  slotBooked: '',

}

class PsychologistProfile extends Component {

  constructor(){

    super();

  this.state = initialState;

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

}

  handleShow = ()=>{

    this.setState({
        isActive: true
    })

   }

   handleHide = () =>{

    this.setState({
        isActive: false
    })

    }

    onChange(e){

      this.setState({[e.target.name]: e.target.value});

  }

  validate = () => {

    var date = new Date();
    
    let currentDate = date.getFullYear()+'-'+ 0+ (date.getMonth()+1)+'-'+0+date.getDate();

    let sessionDateError= '';
   
    if (!this.state.sessionDate) {
        sessionDateError = 'Please select a date to check the available slots';
      } else if (this.state.sessionDate < currentDate

      ) {

      sessionDateError = "Date selected must not be lesser than the current date"
            
      }

          if ( sessionDateError ) {

            this.setState({ sessionDateError });

            return false;

          }
          
      return true;

}

    onSubmit(e){

    e.preventDefault();

    const isValid = this.validate();

    const PsychologistId =  this.state.PsychologistId;

    console.log(PsychologistId);

    const day = new Date(this.state.sessionDate);
    const day1 = day.getDay();
    // Sunday - Saturday : 0 - 6

     console.log(day1);
     
     if(day1 === 0) {

      this.state.Day = "Sunday"

     }

     else if(day1 === 1) {

      this.state.Day = "Monday"

     }

     else if(day1 === 2) {

      this.state.Day = 'Tuesday'

     }

     else if(day1 === 3) {

      this.state.Day = "Wednesday"

     }

     else if(day1 === 4) {

      this.state.Day = "Thursday"

     }

     else if(day1 === 5){

      this.state.Day = "Friday"

     }

     else if(day1 === 6){

      this.state.Day = "Saturday"

     }

     console.log(this.state.Day);
    
    const Data = {
      
      sessionDate: this.state.sessionDate,
      day: this.state.Day

    }

    console.log(Data.Day);

    console.log(Data.sessionDate);

    if(isValid){

        // clear form

       this.setState = initialState;

       this.props.checkAvailableSlots(Data, PsychologistId);

    }

  }

  componentDidMount() {
    this.props.getPsychologistProfiles();
  }

  bookATextChatSession = () => {
    this.props.selectTextChatSession();
  };

 
  bookSlot0 = (profileID, serviceType, sessionDate, sb = "0") => {

    profileID = this.state.PsychologistId;

    sessionDate = this.state.sessionDate;
    
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);

  };

  bookSlot1 = (profileID, serviceType, sessionDate, sb = "1") => {

    profileID = this.state.PsychologistId;
  
    sessionDate = this.state.sessionDate;
     
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
  
  };

  bookSlot2 = (profileID, serviceType, sessionDate, sb = "2") => {

    profileID = this.state.PsychologistId;
    
    sessionDate = this.state.sessionDate;
      
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
    
  };

  bookSlot3 = (profileID, serviceType, sessionDate, sb = "3") => {

    profileID = this.state.PsychologistId;
      
    sessionDate = this.state.sessionDate;
              
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
      
  };

  bookSlot4 = (profileID, serviceType, sessionDate, sb = "4") => {

    profileID = this.state.PsychologistId;
        
    sessionDate = this.state.sessionDate;
           
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
        
  };

  bookSlot5 = (profileID, serviceType, sessionDate, sb = "5") => {

    profileID = this.state.PsychologistId;
          
    sessionDate = this.state.sessionDate;
                      
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
          
  };

  bookSlot6 = (profileID, serviceType, sessionDate, sb = "6") => {

    profileID = this.state.PsychologistId;
            
    sessionDate = this.state.sessionDate;
            
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
            
  };

  bookSlot7 = (profileID, serviceType, sessionDate, sb = "7") => {

    profileID = this.state.PsychologistId;
              
    sessionDate = this.state.sessionDate;
              
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
              
  };

  bookSlot8 = (profileID, serviceType, sessionDate, sb = "8") => {

    profileID = this.state.PsychologistId;
                
    sessionDate = this.state.sessionDate;
                
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                
  };

    bookSlot9 = (profileID, serviceType, sessionDate, sb = "9") => {

    profileID = this.state.PsychologistId;
                  
    sessionDate = this.state.sessionDate;
                  
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                  
  };

  bookSlot10 = (profileID, serviceType, sessionDate, sb = "10") => {

    profileID = this.state.PsychologistId;
                    
    sessionDate = this.state.sessionDate;
                        
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                    
  };

  bookSlot11 = (profileID, serviceType, sessionDate, sb = "11") => {

    profileID = this.state.PsychologistId;
                      
    sessionDate = this.state.sessionDate;
                      
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                      
  };

  bookSlot12 = (profileID, serviceType, sessionDate, sb = "12") => {

    profileID = this.state.PsychologistId;
                        
    sessionDate = this.state.sessionDate;
                        
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                        
  };

  bookSlot13 = (profileID, serviceType, sessionDate, sb = "13") => {

    profileID = this.state.PsychologistId;
                          
    sessionDate = this.state.sessionDate;                      

    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                          
  };

  bookSlot14 = (profileID, serviceType, sessionDate, sb = "14") => {

    profileID = this.state.PsychologistId;
                            
    sessionDate = this.state.sessionDate;                        

    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                            
  };

  bookSlot15 = (profileID, serviceType, sessionDate, sb = "15") => {

    profileID = this.state.PsychologistId;
                              
    sessionDate = this.state.sessionDate;

    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                              
  };

  bookSlot16 = (profileID, serviceType, sessionDate, sb = "16") => {

    profileID = this.state.PsychologistId;
                                
    sessionDate = this.state.sessionDate;
                                
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                                
  };

  bookSlot17 = (profileID, serviceType, sessionDate, sb = "17") => {

    profileID = this.state.PsychologistId;
                                  
    sessionDate = this.state.sessionDate;
                                  
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                                  
  };

  bookSlot18 = (profileID, serviceType, sessionDate, sb = "18") => {

    profileID = this.state.PsychologistId;
                                    
    sessionDate = this.state.sessionDate;
                                    
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                                    
  };

  bookSlot19 = (profileID, serviceType, sessionDate, sb = "19") => {

    profileID = this.state.PsychologistId;
                                      
    sessionDate = this.state.sessionDate;
                                    
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                                      
  };

  bookSlot20 = (profileID, serviceType, sessionDate, sb = "20") => {

    profileID = this.state.PsychologistId;
                                        
    sessionDate = this.state.sessionDate;
                                      
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                                        
  };

  bookSlot21 = (profileID, serviceType, sessionDate, sb = "21") => {

    profileID = this.state.PsychologistId;
                                          
    sessionDate = this.state.sessionDate;
                                          
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                                          
  };

  bookSlot22 = (profileID, serviceType, sessionDate, sb = "22") => {

    profileID = this.state.PsychologistId;
                                            
    sessionDate = this.state.sessionDate;
                                            
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                                            
  };

  bookSlot23 = (profileID, serviceType, sessionDate, sb = "23") => {

    profileID = this.state.PsychologistId;
                                              
    sessionDate = this.state.sessionDate;
                                              
    this.props.selectVideoChatSession(profileID, serviceType, sessionDate, sb);
                                              
  };

  render() {

    console.log(this.state.sessionDate);

    const sb = '';

    const { profiles, loading } = this.props.profile;

    let profileID;
    let personImage;
    let profileName;
    let profileGender;
    let profileEmail;
    let profileRole;
    let profileAge;
    let profileRating;

    let areaOfSpeciality;

    let weekdaysTimingFrom;
    let weekdaysTimingTill;

    let weekdaysTimingFromConvertor;
    let weekdaysTimingFromConvertorPM0;
    let weekdaysTimingFromConvertorPM1;

    let weekdaysTimingTillConvertor;
    let weekdaysTimingTillConvertorPM0;
    let weekdaysTimingTillConvertorPM1;

    let weekendTimingFrom;
    let weekendTimingTill;

    let weekendTimingFromConvertor;
    let weekendTimingFromConvertorPM0;
    let weekendTimingFromConvertorPM1;

    let weekendTimingTillConvertor;
    let weekendTimingTillConvertorPM0;
    let weekendTimingTillConvertorPM1;

    let currentWorkPlace;
    let currentlyWorkingFrom;
    let currentWorkPlacePosition;
    let currentJobDescription;

    let workPlace1;
    let workPlace1Position;
    let workedFrom1;
    let workedTill1;
    let workDescription1;

    let institute1Name;
    let session1From;
    let session1Till;
    let degree1Title;
    let degree1;

    let institute2Name;
    let session2From;
    let session2Till;
    let degree2Title;
    let degree2;

    let institute3Name;
    let session3From;
    let session3Till;
    let degree3Title;
    let degree3;

    console.log(profiles);
    if (profiles) {
      profiles.forEach((profile) => {
        if (profile._id === this.props.match.params.PsychologistProfileId) {
          profileID = profile._id;
          personImage = profile.personImage;
          profileName = profile.name;
          profileGender = profile.gender;
          profileEmail = profile.email;
          profileRole = profile.userRole;
          profileAge = profile.age;
          profileRating = profile.psychologistRatings;

          areaOfSpeciality = profile.areaOfSpeciality;

          weekdaysTimingFrom = profile.weekdaysTimingFrom;
          weekdaysTimingTill = profile.weekdaysTimingTill;

          weekdaysTimingFromConvertor = profile.weekdaysTimingFrom.slice(0, 2);
          weekdaysTimingFromConvertorPM0 =
            profile.weekdaysTimingFrom.slice(0, 2) - 12;
          weekdaysTimingFromConvertorPM1 =
            weekdaysTimingFromConvertorPM0 +
            ":" +
            profile.weekdaysTimingFrom.slice(3, 5) +
            " " +
            "PM";

          weekdaysTimingTillConvertor = profile.weekdaysTimingTill.slice(0, 2);
          weekdaysTimingTillConvertorPM0 =
            profile.weekdaysTimingTill.slice(0, 2) - 12;
          weekdaysTimingTillConvertorPM1 =
            weekdaysTimingTillConvertorPM0 +
            ":" +
            profile.weekdaysTimingTill.slice(3, 5) +
            " " +
            "PM";

          weekendTimingFrom = profile.weekendTimingFrom;
          weekendTimingTill = profile.weekendTimingTill;

          weekendTimingFromConvertor = profile.weekendTimingFrom.slice(0, 2);
          weekendTimingFromConvertorPM0 =
            profile.weekendTimingFrom.slice(0, 2) - 12;
          weekendTimingFromConvertorPM1 =
            weekendTimingFromConvertorPM0 +
            ":" +
            profile.weekendTimingFrom.slice(3, 5) +
            " " +
            "PM";

          weekendTimingTillConvertor = profile.weekendTimingTill.slice(0, 2);
          weekendTimingTillConvertorPM0 =
            profile.weekendTimingTill.slice(0, 2) - 12;
          weekendTimingTillConvertorPM1 =
            weekendTimingTillConvertorPM0 +
            ":" +
            profile.weekendTimingTill.slice(3, 5) +
            " " +
            "PM";

          currentWorkPlace = profile.currentWorkPlace;
          currentlyWorkingFrom = profile.currentlyWorkingFrom;
          currentWorkPlacePosition = profile.currentWorkPlacePosition;
          currentJobDescription = profile.currentJobDescription;

          workPlace1 = profile.workPlace1;
          workPlace1Position = profile.workPlace1Position;
          workedFrom1 = profile.workedFrom1;
          workedTill1 = profile.workedTill1;
          workDescription1 = profile.workDescription1;

          institute1Name = profile.institute1Name;
          session1From = profile.session1From;
          session1Till = profile.session1Till;
          degree1Title = profile.degree1Title;
          degree1 = profile.degree1;

          institute2Name = profile.institute2Name;
          session2From = profile.session2From;
          session2Till = profile.session2Till;
          degree2Title = profile.degree2Title;
          degree2 = profile.degree2;

          institute3Name = profile.institute3Name;
          session3From = profile.session3From;
          session3Till = profile.session3Till;
          degree3Title = profile.degree3Title;
          degree3 = profile.degree3;
        }
      });

    var initialArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    var tf = weekdaysTimingFrom.slice(0,2);
    var tt = weekdaysTimingTill.slice(0,2);
    let weekdaysAvailableTimings = [];

    var tf1 = weekendTimingFrom.slice(0,2);
    var tt1 = weekendTimingTill.slice(0,2);
    let weekendAvailableTimings = [];

    var i;

  for (i = tf; i <= tt; i++) {

    weekdaysAvailableTimings.push(initialArray[i] + "");

  }

  console.log(weekdaysAvailableTimings);

  for (i = tf1; i <= tt1; i++) {

    weekendAvailableTimings.push(initialArray[i] + "");

  }

  console.log(weekendAvailableTimings);

  console.log(finalTimings);

  console.log(this.props.slots);

  if(this.props.slots) {

  bookedSlots = this.props.slots.alreadyBookedSlots

  var Dayy = this.props.slots.Day;

  console.log(Dayy);

  console.log(bookedSlots);

  if(Dayy === "Saturday" || Dayy === "Sunday") {

  finalTimings = weekendAvailableTimings;

  }

  else {

    finalTimings = weekdaysAvailableTimings;
    
  }

  console.log(finalTimings);

  }

  finalTimings = finalTimings.filter((item) => !bookedSlots.includes(item));

  console.log(finalTimings);

  }

  this.state.PsychologistId = profileID;

  console.log(this.state.PsychologistId);

  console.log(profileID);

  console.log(this.state.sessionDate);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Link to="/PsychologistProfiles" className="btn btn-light mb-3">
              Back to Psychologist Profiles
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-success text-white mb-3">
              <div className="row"style = {{textAlign: 'center'}}>
                <MediaQuery maxDeviceWidth={600}>
                  <div
                    className="col-4 col-md-3 m-auto"
                    style={{ textAlign: "center" }}
                  >
                  
                    {personImage ? (

                      <img
                        className="rounded-circle"
                        src={personImage}
                        alt="No Image"
                        style={{ height: "100px", width: "100px" }}
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

                <MediaQuery minDeviceWidth={601} maxDeviceWidth={900}>
                  <div
                    className="col-4 col-md-3 m-auto"
                    style={{ textAlign: "center" }}
                  >
                    {personImage ? (
                      <img
                        className="rounded-circle"
                        src={personImage}
                        alt="No Image"
                        style={{ height: "150px", width: "150px" }}
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
                  <div
                    className="col-4 col-md-3 m-auto"
                    style={{ textAlign: "center" }}
                  >
                    {personImage ? (
                      <img
                        className="rounded-circle"
                        src={personImage}
                        alt="No Image"
                        style={{ height: "200px", width: "200px" }}
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

                <MediaQuery minDeviceWidth={1025} maxDeviceWidth={1920}>
                  <div
                    className="col-4 col-md-3 m-auto"
                    style={{ textAlign: "center" }}
                  >
                    {personImage ? (
                      <img
                        className="rounded-circle"
                        src={personImage}
                        alt="No Image"
                        style={{ height: "250px", width: "250px"}}
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

                <MediaQuery minDeviceWidth={1920} maxDeviceWidth={2560}>
                  <div
                    className="col-4 col-md-3 m-auto"
                    style={{ textAlign: "center" }}
                  >
                    {personImage ? (
                      <img
                        className="rounded-circle"
                        src={personImage}
                        alt="No Image"
                        style={{ height: "300px", width: "300px" }}
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

              <MediaQuery minDeviceWidth={2560}>
                <div
                  className="col-4 col-md-3 m-auto"
                  style={{ textAlign: "center" }}
                >
                  {personImage ? (
                    <img
                      className="rounded-circle"
                      src={personImage}
                      alt="No Image"
                      style={{ height: "350px", width: "350px" }}
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

              </div>

              <div className="text-center">
                <h1 className="display-4 text-center text-light">
                  Dr. {profileName}
                </h1>
                <p className="lead text-center">{profileRole}</p>
                <p className="lead text-center">
                  Area of Speciality: {areaOfSpeciality}
                </p>
                <Rate disabled defaultValue={profileRating} />
                <br></br>
                <br></br>
                <Link
                  to={`/MakeAPayment/TextChat/${profileID}`}
                  className="btn btn-light mb-3"
                  onClick={this.bookATextChatSession}
                >
                  Book a Text Chat Session
                </Link>
                <t></t>
                <Link
                  className="btn btn-light mb-3"
                  onClick = {this.handleShow}
                  style={{ marginLeft: "5px" }}
                >
                  Book a Video Chat Session
                </Link>

                <br></br>

                <Link
                  to = {`PsychologistFeedbackRatings/${profileID}`}
                  className="btn btn-light mb-3"
                  style={{ marginLeft: "5px" }}
                >
                  Check Patient Feedback Ratings

                </Link>

              </div>
            </div>
          </div>
        </div>

        {this.state.isActive ? 

        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-light mb-3 text-center">
              <h3 className="text-center text-success">Available Slots</h3>
              <p className="lead" style={{ color: "Green" }}>
                Please select a date to check the available slots
              </p>
              <form onSubmit = {this.onSubmit}>
              <p className="lead">
                <input 
                 type = "date"
                 className =  {"is-invalid" ?  this.state.sessionDateError : null}
   
                 value = {this.state.sessionDate}
                 name = "sessionDate"
                 placeholder = "Select a date to check for the available slots"
                 onChange = {this.onChange}
                />
                <div style={{color: "Red"}}>{this.state.sessionDateError}</div>
              </p>

              <button type="submit" className="btn btn-success">Check</button>

              </form>   

              <br></br>  

              {finalTimings.includes("0") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot0()}> 12:00 AM</button> </Link>
              : null} 

              {finalTimings.includes("1") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot1()}>01:00 AM</button> </Link>
              : null} 

              {finalTimings.includes("2") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot2()}>02:00 AM</button> </Link>
              : null} 

              {finalTimings.includes("3") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot3()}>03:00 AM</button> </Link>
              : null} 

              {finalTimings.includes("4") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot4()}>04:00 AM</button> </Link>
              : null} 

              {finalTimings.includes("5") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot5()}>05:00 AM</button> </Link>
              : null} 

              {finalTimings.includes("6") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot6()}>06:00 AM</button> </Link>
              : null} 
   
              {finalTimings.includes("7") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot7()}>07:00 AM</button> </Link>
              : null} 

              {finalTimings.includes("8") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot8()}>08:00 AM</button> </Link>
              : null} 

              {finalTimings.includes("9") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot9()}>09:00 AM</button> </Link>
              : null} 

              {finalTimings.includes("10") ? 

              <Link to={`/MakeAPayment/${profileID}`}style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot10(sb)}>10:00 AM</button> </Link>
              : null} 

              {finalTimings.includes("11") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot11(sb)}>11:00 AM</button> </Link>
              : null} 

              {finalTimings.includes("12") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot12()}>12:00 PM</button> </Link>
              : null} 

              {finalTimings.includes("13") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot13()}>01:00 PM</button> </Link>
              : null} 

              {finalTimings.includes("14") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot14()}>02:00 PM</button></Link>
              : null} 

              {finalTimings.includes("15") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot15()}>03:00 PM</button> </Link>
              : null} 

              {finalTimings.includes("16") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot16()}>04:00 PM</button> </Link>
              : null} 

              {finalTimings.includes("17") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot17()}>05:00 PM</button> </Link>
              : null} 

              {finalTimings.includes("18") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot18()}>06:00 PM</button> </Link>
              : null} 

              {finalTimings.includes("19") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot19()}>07:00 PM</button> </Link>
              : null} 

              {finalTimings.includes("20") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot20()}>08:00 PM</button> </Link>
              : null} 

              {finalTimings.includes("21") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot21()}>09:00 PM</button> </Link>
              : null} 

              {finalTimings.includes("22") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot22()}>10:00 PM</button> </Link>
              : null} 

              {finalTimings.includes("23") ? 

              <Link to={`/MakeAPayment/${profileID}`} style = {{color: "Black"}}>

              <button type="submit" className = "col-md-2 m-auto" style = {{textAlign: 'center'}} value = {sb} onClick = {() => this.bookSlot23()}>11:00 PM</button> </Link>
               : null} 

            </div>
          </div>
        </div>

        : null}

        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-light mb-3 text-center">
              <h3 className="text-center text-success">Available Timings</h3>
              <p className="lead" style={{ color: "Green" }}>
                Weekdays
              </p>
             <p className="lead">
                {weekdaysTimingFromConvertor < 12
                  ? weekdaysTimingFrom + " " + "AM" + " "
                  : weekdaysTimingFromConvertor === "12"
                  ? weekdaysTimingFrom + " " + "PM"
                  : weekdaysTimingFromConvertor > 12
                  ? weekdaysTimingFromConvertorPM1
                  : "N/A"}
                -
                {weekdaysTimingTillConvertor < 12
                  ? weekdaysTimingTill + " " + "AM"
                  : weekdaysTimingTillConvertor === "12"
                  ? weekdaysTimingTill + " " + "PM"
                  : weekdaysTimingTillConvertor > 12
                  ? " " + weekdaysTimingTillConvertorPM1
                  : "N/A"}
              </p>
              <p className="lead" style={{ color: "Green" }}>
                Weekend
              </p>
              <p className="lead">
                {weekendTimingFromConvertor < 12
                  ? weekendTimingFrom + " " + "AM" + " "
                  : weekendTimingFromConvertor === "12"
                  ? weekendTimingFrom + " " + "PM"
                  : weekendTimingFromConvertor > 12
                  ? weekendTimingFromConvertorPM1
                  : "N/A"}
                -
                {weekendTimingTillConvertor < 12
                  ? weekendTimingTill + " " + "AM"
                  : weekendTimingTillConvertor === "12"
                  ? weekendTimingFrom + " " + "PM"
                  : weekendTimingTillConvertor > 12
                  ? " " + weekendTimingTillConvertorPM1
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-light mb-3 text-center">
              <h3 className="text-center text-success">Account Details</h3>
              <p className="lead">Full Name: Dr. {profileName}</p>

              <p className="lead">Age: {profileAge}</p>

              <p className="lead">
                Gender: {profileGender === 0 ? "Male" : "Female"}
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {currentWorkPlace ? (
            <div className="col-md-6">
              <h3 className="text-center text-success">
                {currentWorkPlace ? "Current Job" : null}
              </h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <h4>{currentWorkPlace ? currentWorkPlace : null}</h4>
                  <p>
                    {currentlyWorkingFrom
                      ? currentlyWorkingFrom + " " + "-" + " " + "Ongoing"
                      : null}
                  </p>
                  <p>
                    <strong>
                      {currentWorkPlacePosition ? "Job Role:" : null}{" "}
                    </strong>
                    {currentWorkPlacePosition ? currentWorkPlacePosition : null}
                  </p>
                  <p>
                    <p>
                      <strong>
                        {currentJobDescription ? "Job Description:" : null}{" "}
                      </strong>
                      {currentJobDescription
                        ? " " + currentJobDescription
                        : null}
                    </p>
                  </p>
                </li>
              </ul>
            </div>
          ) : null}

          {workPlace1 ? (
            <div className="col-md-6">
              <h3 className="text-center text-success">
                {workPlace1 ? "Experience" : null}
              </h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <h4>{workPlace1 ? workPlace1 : null}</h4>
                  <p>
                    {workedFrom1 ? workedFrom1 + " " + "-" + " " : null}{" "}
                    {workedTill1 ? workedTill1 : null}
                  </p>
                  <p>
                    <strong>{workPlace1Position ? "Job Role:" : null}</strong>{" "}
                    {workPlace1Position}
                  </p>
                  <p>
                    <strong>
                      {workDescription1 ? "Job Description:" : null}
                    </strong>
                    {workDescription1 ? " " + workDescription1 : null}
                  </p>
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        {institute1Name ? (
          <div className="col-md-6">
            <h3 className="text-center text-success">Qualifications</h3>
            <ul className="list-group">
              <li className="list-group-item">
                <h4>{institute1Name}</h4>
                <p>
                  {session1From + " " + "-"} {session1Till}
                </p>
                <p>
                  <strong>Degree: </strong>
                  {degree1Title}
                </p>

                <h4>{institute2Name ? institute2Name : null}</h4>
                <p>
                  {session2From ? session2From + " " + "-" : null}{" "}
                  {session2Till ? session2Till : null}
                </p>
                <p>
                  <strong>{degree2Title ? "Degree" : null} </strong>
                  {degree2Title ? degree2Title : null}
                </p>

                <h4>{institute3Name ? institute3Name : null}</h4>
                <p>
                  {session3From ? session3From + " " + "-" : null}{" "}
                  {session3Till ? session3Till : null}
                </p>
                <p>
                  <strong>{degree3Title ? "Degree:" : null} </strong>
                  {degree3Title ? degree3Title : null}
                </p>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

PsychologistProfile.propTypes = {
  getPsychologistProfiles: PropTypes.func.isRequired,
  selectTextChatSession: PropTypes.func.isRequired,
  selectVideoChatSession: PropTypes.func.isRequired,
  psychologistprofiles: PropTypes.object.isRequired,
  payment: PropTypes.object.isRequired,
  checkAvailableSlots: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.psychologistprofiles,
  slots: state.payment.bookedSlots
});

export default connect(mapStateToProps, {
  getPsychologistProfiles,
  selectTextChatSession,
  selectVideoChatSession,
  checkAvailableSlots
})(withRouter(PsychologistProfile));
