import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPendingMotivationalSpeakerProfiles, approveProfile, deleteProfileApprovalRequest } from '../../../../../Actions/adminActions/profileapprovalActions';
import { withRouter } from 'react-router-dom';
import LanguageIcon from '@material-ui/icons/Language';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Link } from 'react-router-dom';

class ApproveMotivationalSpeakerProfile extends Component {

 componentDidMount() {

   this.props.getPendingMotivationalSpeakerProfiles();

  }

  onDeleteClick(profileID) {

   this.props.deleteProfileApprovalRequest(profileID);
    
  }
  
  onApproveClick(profileID) {

   this.props.approveProfile(profileID);

  }

  render() {
   
   const { profiles, loading } = this.props.profile;

   console.log(profiles);

   let _id;
   let personImage;
   let profileName;
   let profileGender;
   let profileEmail;
   let profileRole;
   let profileAge;

   let portfolioLink;
   let youtubeLink;
   let twitterLink;
   let instagramLink;
   let facebookLink;
   let linkedInLink;

    console.log(profiles);
    if(profiles){
      profiles.forEach((profile)=>{
    if(profile._id === this.props.match.params.PendingMotivationalSpeakerProfileId){

     _id = profile._id
     personImage = profile.personImage
     profileName = profile.name
     profileGender = profile.gender
     profileEmail = profile.email
     profileRole = profile.userRole
     profileAge = profile.age

     if (profile.portfolioLink) {

      portfolioLink = profile.portfolioLink
     
    }

    else {

      portfolioLink = null
    }

    if (profile.youtubeLink) {

      youtubeLink = profile.youtubeLink
     
    }

    else {

      youtubeLink = null
    }

    if (profile.twitterLink) {

      twitterLink = profile.twitterLink
     
    }

    else {

      twitterLink = null
    }

    if (profile.facebookLink) {

      facebookLink = profile.facebookLink
     
    }

    else {

      facebookLink = null
    }

    if (profile.instagramLink) {

      instagramLink = profile.instagramLink
     
    }

    else {

      instagramLink = null
    }

    if (profile.linkedInLink) {

      linkedInLink = profile.linkedInLink
     
    }

    else {

      linkedInLink = null
    }

    }

   })

 }

     return (

      <div className = "container">

      <div className = "row">
      <div className = "col-md-6">
      <Link to = '/PendingMotivationalSpeakerProfiles' className = "btn btn-light mb-3">
      Back to Pending Motivational Speaker Profiles
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
          <h1 className="display-4 text-center text-light">{profileName}</h1>
          <p className="lead text-center">{profileRole === "GymInstructor" ? "Health/Gym Instructor" : null}</p>
          <p>

            {portfolioLink ? 
            <a className="text-white p-2" href={portfolioLink}>
              <i> <LanguageIcon /> </i>
            </a>

            : null}

            {youtubeLink ?
            <a className="text-white p-2" href={youtubeLink}>
              <i> <YouTubeIcon /> </i>
            </a>

            : null}

            {twitterLink ?
            <a className="text-white p-2" href={twitterLink}>
              <i> <TwitterIcon /> </i>
            </a>

            : null}

            {facebookLink ?
            <a className="text-white p-2" href={facebookLink}>
              <i> <FacebookIcon /> </i>
            </a>

            : null}

            {linkedInLink ?
            <a className="text-white p-2" href={linkedInLink}>
              <i> <LinkedInIcon /> </i>
            </a>

            : null}

            {instagramLink ?
            <a className="text-white p-2" href={instagramLink}>
              <i> <InstagramIcon /> </i>
            </a>

            : null}

          </p>

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
  
      <div className="row">
    <div className="col-md-12">
      <div className="card card-body bg-light mb-3 text-center">
        <h3 className="text-center text-success">Account Details</h3>
        <p className="lead">
  
          Full Name: {profileName}
  
        </p>
  
        <p className = "lead">
  
         Age: {profileAge}
  
        </p>
  
        <p className = "lead">
  
         Gender: {profileGender === 0 ? "Male" : "Feamle"}
        </p>
  
      </div>
    </div>
  </div>
  </div>  
  
     )

    }

   }

ApproveMotivationalSpeakerProfile.propTypes = {

   getPendingMotivationalSpeakerProfiles: PropTypes.func.isRequired,
   approveprofiles: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

profile: state.approveprofiles

});

export default connect(mapStateToProps, {getPendingMotivationalSpeakerProfiles, approveProfile, deleteProfileApprovalRequest})(withRouter(ApproveMotivationalSpeakerProfile));
