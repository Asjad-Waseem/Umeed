import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPendingPsychologistProfiles, approveProfile, deleteProfileApprovalRequest } from '../../../../../Actions/adminActions/profileapprovalActions';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ApprovePsychologistProfile extends Component {

 componentDidMount() {

   this.props.getPendingPsychologistProfiles();

  }

  onDeleteClick(profileID) {

   this.props.deleteProfileApprovalRequest(profileID);
    
  }
  
  onApproveClick(profileID) {

   this.props.approveProfile(profileID);

  }

  render() {
   
    const { profiles, loading } = this.props.profile;

    let _id;
    let personImage;
    let profileName;
    let profileGender;
    let profileEmail;
    let profileRole;
    let profileAge;
    
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
     if(profiles){
       profiles.forEach((profile)=>{
     if(profile._id === this.props.match.params.PendingPsychologistProfileId){

      _id = profile._id
      personImage = profile.personImage
      profileName = profile.name
      profileGender = profile.gender
      profileEmail = profile.email
      profileRole = profile.userRole
      profileAge = profile.age

      areaOfSpeciality = profile.areaOfSpeciality

      weekdaysTimingFrom = profile.weekdaysTimingFrom
      weekdaysTimingTill = profile.weekdaysTimingTill

      weekdaysTimingFromConvertor = profile.weekdaysTimingFrom.slice(0,2)
      weekdaysTimingFromConvertorPM0 = profile.weekdaysTimingFrom.slice(0,2) - 12
      weekdaysTimingFromConvertorPM1 = weekdaysTimingFromConvertorPM0 + ':' + profile.weekdaysTimingFrom.slice(3,5) + ' ' + 'PM'

      weekdaysTimingTillConvertor = profile.weekdaysTimingTill.slice(0,2)
      weekdaysTimingTillConvertorPM0 = profile.weekdaysTimingTill.slice(0,2) - 12
      weekdaysTimingTillConvertorPM1 = weekdaysTimingTillConvertorPM0 + ':' + profile.weekdaysTimingTill.slice(3,5) + ' ' + 'PM'

      weekendTimingFrom = profile.weekendTimingFrom
      weekendTimingTill = profile.weekendTimingTill

      weekendTimingFromConvertor = profile.weekendTimingFrom.slice(0,2)
      weekendTimingFromConvertorPM0 = profile.weekendTimingFrom.slice(0,2) - 12
      weekendTimingFromConvertorPM1 = weekendTimingFromConvertorPM0 + ':' + profile.weekendTimingFrom.slice(3,5) + ' ' + 'PM'

      weekendTimingTillConvertor = profile.weekendTimingTill.slice(0,2)
      weekendTimingTillConvertorPM0 = profile.weekendTimingTill.slice(0,2) - 12
      weekendTimingTillConvertorPM1 = weekendTimingTillConvertorPM0 + ':' + profile.weekendTimingTill.slice(3,5) + ' ' + 'PM'

      currentWorkPlace = profile.currentWorkPlace
      currentlyWorkingFrom = profile.currentlyWorkingFrom
      currentWorkPlacePosition =  profile.currentWorkPlacePosition
      currentJobDescription = profile.currentJobDescription

      workPlace1 = profile.workPlace1
      workPlace1Position = profile.workPlace1Position
      workedFrom1 = profile.workedFrom1
      workedTill1 =  profile.workedTill1
      workDescription1 = profile.workDescription1
      
      institute1Name = profile.institute1Name
      session1From = profile.session1From
      session1Till = profile.session1Till
      degree1Title = profile.degree1Title
      degree1 = profile.degree1

      institute2Name = profile.institute2Name
      session2From = profile.session2From
      session2Till = profile.session2Till
      degree2Title = profile.degree2Title
      degree2 = profile.degree2

      institute3Name = profile.institute3Name
      session3From = profile.session3From
      session3Till = profile.session3Till
      degree3Title = profile.degree3Title
      degree3 = profile.degree3

     }

    })

  }

     return (

        <div className = "container">

        <div className = "row">
        <div className = "col-md-6">
        <Link to = '/PendingPsychologistProfiles' className = "btn btn-light mb-3">
        Back to Psychologist Profiles
        </Link>
        </div>
        </div>

        <div className = "row">
        <div className = "col-md-12">
        <div className="card card-body bg-success text-white mb-3">
          <div className="row">
            <div className="col-4 col-md-3 m-auto">
            
            {personImage ? 
            <img
            className = "rounded-circle"
            src = {personImage} 
            alt = "No Image" />
          
            :
            <img
            className = "rounded-circle"
            src = {require("../../../../Layout/Avatar.png")} 
            alt = "No Image" />
          }
          
            </div>
          </div>
          <div className="text-center">
            <h1 className="display-4 text-center text-light">Dr. {profileName}</h1>
            <p className="lead text-center">{profileRole}</p>
            <p className = "lead text-center">Area of Speciality: {areaOfSpeciality}</p>

            <button onClick = {this.onApproveClick.bind(this, _id)} type="button" className="btn btn-success mr-1"
          
            style = {{borderColor: 'White'}}>

            Approve

            </button>

            <button onClick = {this.onDeleteClick.bind(this, _id)}type="button" className="btn btn-danger mr-1">

            <img
            className = "rounded-circle"
            src = {require("../../../../../Images/deletebutton.png")} 
            alt = " "
            style = {{ width: '25px', marginRight: '0px', height: '25px', borderRadius: '50%' }} />

            </button>
           
           </div>
           </div>
           </div>
           </div>
        
        <div className = "row">
          <div className = "col-md-12">
            <div className = "card card-body bg-light mb-3 text-center">
              <h3 className = "text-center text-success">Available Timings</h3>
              <p className = "lead" style = {{color: 'Green'}}>
                Weekdays
              </p>
      <p className = "lead">{weekdaysTimingFromConvertor < 12 ? weekdaysTimingFrom + ' ' + 'AM' + ' ' : weekdaysTimingFromConvertor === '12' ? weekdaysTimingFrom + ' ' + 'PM' : weekdaysTimingFromConvertor > 12 ? weekdaysTimingFromConvertorPM1: 'N/A'}
                            -
                            {weekdaysTimingTillConvertor < 12 ? weekdaysTimingTill + ' ' + 'AM' : weekdaysTimingTillConvertor === '12' ? weekdaysTimingTill + ' ' + 'PM' : weekdaysTimingTillConvertor > 12 ? ' ' + weekdaysTimingTillConvertorPM1: 'N/A'}</p>
              <p className = "lead" style = {{color: 'Green'}}>
                Weekend
              </p>
      <p className = "lead">{weekendTimingFromConvertor < 12 ? weekendTimingFrom + ' ' + 'AM' + ' ' : weekendTimingFromConvertor === '12' ? weekendTimingFrom + ' ' + 'PM' : weekendTimingFromConvertor > 12 ? weekendTimingFromConvertorPM1: 'N/A'}
                            -
                            {weekendTimingTillConvertor < 12 ? weekendTimingTill + ' ' + 'AM' : weekendTimingTillConvertor === '12' ? weekendTimingFrom + ' ' + 'PM' : weekendTimingTillConvertor > 12 ? ' ' + weekendTimingTillConvertorPM1: 'N/A'}</p>
            </div>
          </div>
        </div>
        
        <div className="row">
        <div className="col-md-12">
        <div className="card card-body bg-light mb-3 text-center">
          <h3 className="text-center text-success">Account Details</h3>
          <p className="lead">
        
            Full Name: Dr. {profileName}
        
          </p>
        
          <p className = "lead">
        
           Age: {profileAge}
        
          </p>
        
          <p className = "lead">
        
           Gender: {profileGender === 0 ? "Male" : "Female"}
        
          </p>
        
          </div>
          </div>
          </div>
        
          <div className="row">

            {currentWorkPlace ? 
        
          <div className="col-md-6">
                      <h3 className="text-center text-success">{currentWorkPlace ? 'Current Job' : null}</h3>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <h4>{currentWorkPlace ? currentWorkPlace : null}</h4>
                          <p>{currentlyWorkingFrom ? currentlyWorkingFrom + ' ' + '-' + ' ' + 'Ongoing' : null}</p>
                          <p>
                            <strong>{currentWorkPlacePosition ? 'Job Role:' : null} </strong>{currentWorkPlacePosition ? currentWorkPlacePosition : null}</p>
                          <p>
                            <p>
                              <strong>{currentJobDescription ? 'Job Description:' : null} </strong>{currentJobDescription ? ' ' + currentJobDescription : null}</p>
                              </p>
                        </li>
                      </ul>
                    </div>

                    : null}

                    {workPlace1 ? 
                    <div className="col-md-6">
                      <h3 className="text-center text-success">{workPlace1 ? 'Experience' : null}</h3>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <h4>{workPlace1 ? workPlace1 : null}</h4>
                          <p>{workedFrom1 ? workedFrom1 + ' ' + '-' + ' ' : null} {workedTill1 ? workedTill1 : null}</p>
                          <p>
                            <strong>{workPlace1Position ? 'Job Role:' : null}</strong> {workPlace1Position}
                          </p>
                          <p>
                            <strong>{workDescription1 ? 'Job Description:' : null}</strong>{workDescription1 ? ' ' + workDescription1 : null}</p>
                        </li>
    
                      </ul>
                    </div> 

                    : null}
                    </div>

                    {institute1Name ? 
                    <div className="col-md-6">
                      <h3 className="text-center text-success">Qualifications</h3>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <h4>{institute1Name}</h4>
                          <p>{session1From + ' ' + '-'} {session1Till}</p>
                          <p>
                            <strong>Degree: </strong>{degree1Title}</p>

                            {degree1 ?
                            <img src = {degree1}
                            alt = "N/A"
                            />

                            : null}

                            <h4>{institute2Name ? institute2Name : null}</h4>
                          <p>{session2From ? session2From + ' ' + '-' : null} {session2Till ? session2Till : null}</p>
                          <p>
                            <strong>{degree2Title ? 'Degree': null} </strong>{degree2Title ? degree2Title : null}</p>

                            {degree2 ?
                            <img src = {degree2}
                            alt = "N/A"
                            />

                            : null}

                            <h4>{institute3Name ? institute3Name : null}</h4>
                          <p>{session3From ? session3From + ' ' + '-' : null} {session3Till ? session3Till : null}</p>
                          <p>
                            <strong>{degree3Title ? 'Degree:' : null} </strong>{degree3Title ? degree3Title : null}</p>
                            
                            {degree3 ?
                            <img src = {degree3}
                            alt = "N/A"
                            />

                            : null}
                        
                        </li>
                      </ul>
                    </div>

                    : null}
                  </div>
        
      )

     }

    }
      
ApprovePsychologistProfile.propTypes = {

   getPendingPsychologistProfiles: PropTypes.func.isRequired,
   approveprofiles: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

profile: state.approveprofiles

});

export default connect(mapStateToProps, {getPendingPsychologistProfiles, approveProfile, deleteProfileApprovalRequest})(withRouter(ApprovePsychologistProfile));
