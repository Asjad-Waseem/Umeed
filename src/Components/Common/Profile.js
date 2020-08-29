import React, { Component } from 'react';
import '../../App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { updateAccountDetails } from '../../Actions/AuthActions';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LanguageIcon from '@material-ui/icons/Language';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Rate } from 'antd';
import MediaQuery from 'react-responsive';

const initialState = {

    password: '',
    contact: '',
    passwordError: '',
    contactError: '',
    Image: '',
    imageError: '',

    // Psychologist Info Edit 

    areaOfSpeciality: '',
    areaOfSpecialityError: '',

    weekdaysTimingFrom: '',
    weekdaysTimingTill: '',

    weekendTimingFrom: '',
    weekendTimingTill: '',

    currentWorkPlace: '',
    currentWorkPlaceError: '',
    currentWorkPlacePosition: '',
    currentWorkPlacePositionError: '',
    currentlyWorkingFrom: '',
    currentlyWorkingFromError: '',
    currentJobDescription: '',
    currentJobDescriptionError: '',

    workPlace1: '',
    workPlace1Error: '',
    workPlace1Position: '',
    workPlace1PositionError: '',
    workedFrom1: '',
    workedFrom1Error: '',
    workedTill1: '',
    workedTill1Error: '',
    workDescription1: '',
    workDescription1Error: '',

    institute2Name: '',
    institute2NameError: '',
    session2From: '',
    session2FromError: '',
    session2Till: '',
    session2TillError: '',
    degree2Title: '',
    degree2TitleError: '',
    
    institute3Name: '',
    institute3NameError: '',
    session3From: '',
    session3FromError: '',
    session3Till: '',
    session3TillError: '',
    degree3Title: '',
    degree3TitleError: '',

    // Motivational Writer Edit Info

    portfolioLink: '',

    twitterLink: '',

    facebookLink: '',

    linkedInLink: '',

    instagramLink: '',

    // Motivational Speaker and Health/Gym Instructor Edit Info

    youtubeLink: ''

}

class Profile extends Component {

    fileSelectedHandler = event => {

this.setState({

image: event.target.files[0]

})
    }

    fileUploadHandler = () => {

        const fd = new FormData();
        fd.append('image', this.state.image, this.state.image.name);

// Send your api axios request here

// axios.post('', fd, {

// onUploadProgress: progressEvent => {

// console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total *100) + '%')
// }
// })

// .then(res => {

// console.log(res);

// });

    }

    constructor(){

        super();

      this.state = initialState;

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e){

        this.setState({[e.target.name]: e.target.value});
    
    }

    validate = () => {

        var date = new Date();
        let currentDate = date.getFullYear()+'-'+ 0+ (date.getMonth()+1)+'-'+0+date.getDate();

        console.log(currentDate);

        let passwordError= '';
        let contactError= '';
        let imageError= '';

        // Psychologist Edit Info Errors

        let areaOfSpecialityError= '';

        let currentWorkPlaceError= '';
        let currentWorkPlacePositionError= '';
        let currentlyWorkingFromError= '';
        let currentJobDescriptionError= ''

        let workPlace1Error= '';
        let workPlace1PositionError= '';
        let workedFrom1Error= '';
        let workedTill1Error= '';
        let workDescription1Error= '';

        let institute2NameError= '';
        let session2FromError= '';
        let session2TillError= '';
        let degree2TitleError= '';

        let institute3NameError= '';
        let session3FromError= '';
        let session3TillError= '';
        let degree3TitleError= '';

           if ( 

           this.state.password && !this.state.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)
            
          ) {
            passwordError = 'Invalid password (Your password must be between 8-15 characters and must have one lowercase, one upper case, one numeric, and one special character)';
          }

          if (

           // !/^[[+92]|[0092]]-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$
          this.state.contact && !/^[+92]-[0092]-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/i.test(this.state.contact)
            
            ) {

                contactError = "Invalid contact (Your contact must be in the Standard Pakistani Contact Format, E.g. 0300-0000000)"
            }

            // Psychologist Edit Info Errors

            if (

            this.state.areaOfSpeciality && this.state.areaOfSpeciality.length > 50

            ) {

              areaOfSpecialityError = "Area of Speciality should not be more than 50 characters";
              
            }

            if (

              this.state.currentWorkPlace && this.state.currentWorkPlace.length > 50 

            ) {

              currentWorkPlaceError = "Current Work Place should not be more than 50 characters";

            }

            if (

              this.state.currentWorkPlacePosition && this.state.currentWorkPlacePosition.length> 20 

            ) {

              currentWorkPlacePositionError = "Current Work Place Position should not be more than 20 characters";

            }

            if (

               this.state.currentlyWorkingFrom > currentDate

            ) {

              currentlyWorkingFromError = "Date selected must not be greater than current date"
            
            }

            if (

              this.state.currentJobDescription && this.state.currentJobDescription.length > 300

            ) {

              currentJobDescriptionError = "Current Job Description should not be more than 300 characters";

            }

            if (

              this.state.workPlace1 && this.state.workPlace1.length > 50 

            ) {

              workPlace1Error = "Work Place should not be more than 50 characters";

            }

            if (

              this.state.workPlace1Position && this.state.workPlace1Position.length > 30 

            ) {

              workPlace1PositionError = "Work Place Position should not be more than 30 characters";

            }

            if (

              this.state.workedFrom1 > currentDate && this.state.workedFrom1 > this.state.workedTill1

           ) {

             workedFrom1Error = "Date selected must not be greater than current date and must not be greater than Worked Till Date"
           
           }

           if (

            this.state.workedTill1 > currentDate

           ) {

           workedTill1Error = "Date selected must not be greater than current date and must not be less than Worked From Date"
         
           }

            if (

              this.state.workDescription1 && this.state.workDescription1.length > 300 

            ) {

              workDescription1Error = "Work Place Description should not be more than 300 characters";

            }

            if (

              this.state.institute2Name && this.state.institute2Name.length > 50 

            ) {

              institute2NameError = "Institute Name should not be more than 50 characters";

            }

            if (

              this.state.session2From > currentDate
  
             ) {
  
             session2FromError = "Date selected must not be greater than current date and must not be less than Session Till Date"
           
             }

             if (

              this.state.session2Till > currentDate
  
             ) {
  
             session2TillError = "Date selected must not be greater than current date and must not be less than Session From Date"
           
             }

             if (

              this.state.degree2Title && this.state.degree2Title.length > 30

             ) {

              degree2TitleError = "Degree Title should not be more than 30 characters"

             }

             if (

              this.state.institute3Name && this.state.institute3Name.length > 50 

            ) {

              institute3NameError = "Institute Name should not be more than 50 characters";

            }

            if (

              this.state.session3From > currentDate
  
             ) {
  
             session3FromError = "Date selected must not be greater than current date and must not be less than Session Till Date"
           
             }

             if (

              this.state.session3Till > currentDate
  
             ) {
  
             session3TillError = "Date selected must not be greater than current date and must not be less than Session From Date"
           
             }

             if (

              this.state.degree3Title && this.state.degree3Title.length > 30

             ) {

              degree3TitleError = "Degree Title should not be more than 30 characters"
              
             }

              if ( passwordError || 
                   contactError || 
                   imageError || 
                   areaOfSpecialityError ||
                   currentWorkPlaceError ||
                   currentWorkPlacePositionError ||
                   currentlyWorkingFromError ||
                   currentJobDescriptionError ||
                   workPlace1Error ||
                   workPlace1PositionError ||
                   workedFrom1Error ||
                   workedTill1Error ||
                   workDescription1Error ||
                   institute2NameError ||
                   session2FromError ||
                   session2TillError ||
                   degree2TitleError ||
                   institute3NameError ||
                   session3FromError ||
                   session3TillError ||
                   degree3TitleError ) {

                this.setState({ passwordError,
                                contactError, 
                                imageError, 
                                areaOfSpecialityError,
                                currentWorkPlaceError,
                                currentWorkPlacePositionError,
                                currentlyWorkingFromError,
                                currentJobDescriptionError,
                                workPlace1Error,
                                workPlace1PositionError,
                                workedFrom1Error,
                                workedTill1Error,
                                workDescription1Error,
                                institute2NameError,
                                session2FromError,
                                session2TillError,
                                degree2TitleError,
                                institute3NameError,
                                session3FromError,
                                session3TillError,
                                degree3TitleError });
    
                return false;
    
              }
              
          return true;

    }

    onSubmit(e){

        e.preventDefault();

        const isValid = this.validate();

        const patientAccountInfoUpdate = {

           password: this.state.password,
           contact: this.state.contact,
           image: this.state.image

        };

        const psychologistAccountInfoUpdate = {

           password: this.state.password,
           contact: this.state.contact,
           image: this.state.image,

           areaOfSpeciality: this.state.areaOfSpeciality,

           weekdaysTimingFrom: this.state.weekdaysTimingFrom,
           weekdaysTimingTill: this.state.weekdaysTimingTill,

           weekendTimingFrom: this.state.weekendTimingFrom,
           weekendTimingTill: this.state.weekendTimingTill,

           currentWorkPlace: this.state.currentWorkPlace,
           currentWorkPlacePosition: this.state.currentWorkPlacePosition,
           currentlyWorkingFrom: this.state.currentlyWorkingFrom,
           currentJobDescription: this.state.currentJobDescription,

           workPlace1: this.state.workPlace1,
           workPlace1Position: this.state.workPlace1Position,
           workedFrom1: this.state.workedFrom1,
           workedTill1: this.state.workedTill1,
           workDescription1: this.state.workDescription1,

           institute2Name: this.state.institute2Name,
           session2From: this.state.session2From,
           session2Till: this.state.session2Till,
           degree2Title: this.state.degree2Title,

           institute3Name: this.state.institute3Name,
           session3From: this.state.session3From,
           session3Till: this.state.session3Till,
           degree3Title: this.state.degree3Title
          
        };

        const motivationalWriterProfileInfoUpdate = {

           
          password: this.state.password,
          contact: this.state.contact,
          image: this.state.image,

          portfolioLink: this.state.portfolioLink,
          twitterLink: this.state.twitterLink,
          facebookLink: this.state.facebookLink,
          linkedInLink: this.state.linkedInLink,
          instagramLink: this.state.instagramLink

        };

        const motivationalSpeakerProfileInfoUpdate = {
        
          password: this.state.password,
          contact: this.state.contact,
          image: this.state.image,

          portfolioLink: this.state.portfolioLink,
          youtubeLink: this.state.youtubeLink,
          twitterLink: this.state.twitterLink,
          facebookLink: this.state.facebookLink,
          linkedInLink: this.state.linkedInLink,
          instagramLink: this.state.instagramLink

        };

        const healthGymInstructorProfileInfoUpdate = {

          password: this.state.password,
          contact: this.state.contact,
          image: this.state.image,

          portfolioLink: this.state.portfolioLink,
          youtubeLink: this.state.youtubeLink,
          twitterLink: this.state.twitterLink,
          facebookLink: this.state.facebookLink,
          linkedInLink: this.state.linkedInLink,
          instagramLink: this.state.instagramLink

        };

        if(isValid){

            // clear form

            console.log(this.props.auth.user.userRole === "GymInstructor" ? healthGymInstructorProfileInfoUpdate.password : null);

            alert(JSON.stringify(this.props.auth.user.userRole === "Patient" ? patientAccountInfoUpdate : this.props.auth.user.userRole === "Psychologist" ? psychologistAccountInfoUpdate : this.props.auth.user.userRole === "ContentWriter" ? motivationalWriterProfileInfoUpdate : this.props.auth.user.userRole === "MotivationalSpeaker" ? motivationalSpeakerProfileInfoUpdate : this.props.auth.user.userRole === "GymInstructor" ? healthGymInstructorProfileInfoUpdate : null, 2));

            this.setState({password: ''});
    
            this.setState = initialState;

            this.props.updateAccountDetails(this.props.auth.user.userRole === "Patient" ? patientAccountInfoUpdate : this.props.auth.user.userRole === "Psychologist" ? psychologistAccountInfoUpdate : this.props.auth.user.userRole === "ContentWriter" ? motivationalWriterProfileInfoUpdate : this.props.auth.user.userRole === "MotivationalSpeaker" ? motivationalSpeakerProfileInfoUpdate : this.props.auth.user.userRole === "GymInstructor" ? healthGymInstructorProfileInfoUpdate : null);
            
            }

        }

render() {

  const MotivationalWriterDashboard = (

    <div className = "container">
    <div className = "row">
      <div className = "col-md-6">
        <Link to = '/MotivationalWriterDashboard' className = "btn btn-light mb-3">
          Back to Dashboard
        </Link>
      </div>
    </div>
    </div>
  )

  const HealthGymInstructorDashboard = (

    <div className = "container">
    <div className = "row">
      <div className = "col-md-6">
        <Link to = '/HealthGymInstructorDashboard' className = "btn btn-light mb-3">
          Back to Dashboard
        </Link>
      </div>
    </div>
    </div>
  )

  const MotivationalSpeakerDashboard = (

    <div className = "container">
    <div className = "row">
      <div className = "col-md-6">
        <Link to = '/MotivationalSpeakerDashboard' className = "btn btn-light mb-3">
          Back to Dashboard
        </Link>
      </div>
    </div>
    </div>
  )

  const PatientDashboard = (

    <div className = "container">
    <div className = "row">
      <div className = "col-md-6">
        <Link to = '/PatientDashboard' className = "btn btn-light mb-3">
          Back to Dashboard
        </Link>
      </div>
    </div>
    </div>
  )

  const PsychologistDashboard = (

    <div className = "container">
    <div className = "row">
      <div className = "col-md-6">
        <Link to = '/PsychologistDashboard' className = "btn btn-light mb-3">
          Back to Dashboard
        </Link>
      </div>
    </div>
    </div>
  )

  const MotivationalWriterProfile = (

   <div>
     <div className = "row">
       <div className = "col-md-12">
       <div className="card card-body bg-success text-white mb-3">
       <div className="row">

       <MediaQuery maxDeviceWidth = {600}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ? 
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '100px', width: '100px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {601} maxDeviceWidth = {900}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ?  
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '150px', width: '150px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {900} maxDeviceWidth = {1024}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ?  
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '200px', width: '200px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {1025} maxDeviceWidth = {1920}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ?  
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '250px', width: '250px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {1920} maxDeviceWidth = {2560}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ? 
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '300px', width: '300px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

        <MediaQuery minDeviceWidth = {2560}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ? 
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '350px', width: '350px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>
      </div>

      <div className="text-center">
        <h1 className="display-4 text-center text-light">{this.props.auth.user.name}</h1>
        <p className="lead text-center">{this.props.auth.user.userRole === 'ContentWriter' ? "Motivational Writer" : this.props.auth.user.userRole === "GymInstructor" ? "Health/Gym Instructor" : this.props.auth.user.userRole === "Patient" ? "Patient" : this.props.auth.user.userRole === "Psychologist" ? "Psychologist" : this.props.auth.user.userRole === "MotivationalSpeaker" ? "Motivational Speaker" : this.props.auth.user.userRole === "Admin" ? "Admin" : this.props.auth.user.userRole}</p>
        <p>
          {this.props.auth.user.portfolioLink ? 
          <a className="text-white p-2" href={this.props.auth.user.portfolioLink}>
            <i> <LanguageIcon /> </i>
          </a>

          : null}

          {this.props.auth.user.twitterLink ? 
          <a className="text-white p-2" href={this.props.auth.user.twitterLink}>
            <i> <TwitterIcon /> </i>
          </a>

          : null}

          {this.props.auth.user.facebookLink ?
          <a className="text-white p-2" href={this.props.auth.user.facebookLink}>
            <i> <FacebookIcon /> </i>
          </a>

          : null}

          {this.props.auth.user.linkedInLink ?
          <a className="text-white p-2" href={this.props.auth.linkedInLink}>
            <i> <LinkedInIcon /> </i>
          </a>

          : null}
          
          {this.props.auth.user.instagramLink ? 
          <a className="text-white p-2" href="#">
            <i> <InstagramIcon /> </i>
          </a>

          : null}
          
        </p>
      </div>
    </div>
    </div>
    </div>

    <div className="row">
  <div className="col-md-12">
    <div className="card card-body bg-light mb-3">
      <h3 className="text-center text-success">Account Details</h3>
      <p className="lead">

        Full Name: {this.props.auth.user.name}

      </p>

      <p className = "lead">

        Email: {this.props.auth.user.email}

      </p>

      <p className = "lead">

        Password: Request to change the password from the update account settings below

      </p>

      <p className = "lead">

       CNIC: {this.props.auth.user.cnic}

      </p>

      <p className = "lead">

       Age: {this.props.auth.user.age}

      </p>

      <p className = "lead">

       Gender: {(this.props.auth.user.gender === 0 || this.props.auth.user.gender === "Mr.") ? "Male" : "Female"}

      </p>

      <p className = "lead">

        Contact: {this.props.auth.user.contact}

      </p>

    </div>
  </div>
  </div>
  </div>

  )

  const HealthGymInstructorProfile = (

    <div>

    <div className = "row">
    <div className = "col-md-12">
    <div className="card card-body bg-success text-white mb-3">
      <div className="row">

      <MediaQuery maxDeviceWidth = {600}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ? 
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '100px', width: '100px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {601} maxDeviceWidth = {900}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ?  
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '150px', width: '150px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {900} maxDeviceWidth = {1024}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ?  
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '200px', width: '200px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {1024} maxDeviceWidth = {1920}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ?  
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '250px', width: '250px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {1920} maxDeviceWidth = {2560}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ? 
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '300px', width: '300px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

        <MediaQuery minDeviceWidth = {2560}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ? 
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '350px', width: '350px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

      </div>

      <div className="text-center">
        <h1 className="display-4 text-center text-light">{this.props.auth.user.name}</h1>
        <p className="lead text-center">{this.props.auth.user.userRole === 'ContentWriter' ? "Motivational Writer" : this.props.auth.user.userRole === "GymInstructor" ? "Health/Gym Instructor" : this.props.auth.user.userRole === "Patient" ? "Patient" : this.props.auth.user.userRole === "Psychologist" ? "Psychologist" : this.props.auth.user.userRole === "Admin" ? "Admin" : this.props.auth.user.userRole}</p>
        <p>

          {this.props.auth.user.portfolioLink ? 
          <a className="text-white p-2" href={this.props.auth.user.portfolioLink}>
            <i> <LanguageIcon /> </i>
          </a>

          : null}

          {this.props.auth.user.twitterLink ? 
          <a className="text-white p-2" href={this.props.auth.user.twitterLink}>
            <i> <TwitterIcon /> </i>
          </a>

          : null}

          {this.props.auth.user.facebookLink ? 
          <a className="text-white p-2" href={this.props.auth.user.facebookLink}>
            <i> <FacebookIcon /> </i>
          </a>

          : null}

          {this.props.auth.user.linkedInLink ? 
          <a className="text-white p-2" href={this.props.auth.user.linkedInLink}>
            <i> <LinkedInIcon /> </i>
          </a>

          : null}

          {this.props.auth.user.instagramLink ? 
          <a className="text-white p-2" href={this.props.auth.user.instagramLink}>
            <i> <InstagramIcon /> </i>
          </a>

          : null}

        </p>
      </div>
    </div>
    </div>
    </div>

    <div className="row">
  <div className="col-md-12">
    <div className="card card-body bg-light mb-3">
      <h3 className="text-center text-success">Account Details</h3>
      <p className="lead">

        Full Name: {this.props.auth.user.name}

      </p>

      <p className = "lead">

        Email: {this.props.auth.user.email}

      </p>

      <p className = "lead">

        Password: Request to change the password from the update account settings below

      </p>

      <p className = "lead">

       CNIC: {this.props.auth.user.cnic}

      </p>

      <p className = "lead">

       Age: {this.props.auth.user.age}

      </p>

      <p className = "lead">

       Gender: {(this.props.auth.user.gender === 0 || this.props.auth.user.gender === "Mr.") ? "Male" : "Female"}

      </p>

      <p className = "lead">

        Contact: {this.props.auth.user.contact}

      </p>

    </div>
  </div>
</div>
</div>

  )

  const MotivationalSpeakerProfile = (

    <div>

    <div className = "row">
    <div className = "col-md-12">
    <div className="card card-body bg-success text-white mb-3">
      <div className="row">
        
      <MediaQuery maxDeviceWidth = {600}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ? 
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '100px', width: '100px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {601} maxDeviceWidth = {900}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ?  
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '150px', width: '150px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {900} maxDeviceWidth = {1024}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ?  
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '200px', width: '200px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {1025} maxDeviceWidth = {1920}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ?  
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '250px', width: '250px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {1920} maxDeviceWidth = {2560}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ? 
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '300px', width: '300px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

        <MediaQuery minDeviceWidth = {2560}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ? 
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '350px', width: '350px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>
      </div>

      <div className="text-center">
        <h1 className="display-4 text-center text-light">{this.props.auth.user.name}</h1>
        <p className="lead text-center">{this.props.auth.user.userRole === 'ContentWriter' ? "Motivational Writer" : this.props.auth.user.userRole === "GymInstructor" ? "Health/Gym Instructor" : this.props.auth.user.userRole === "Patient" ? "Patient" : this.props.auth.user.userRole === "Psychologist" ? "Psychologist" : this.props.auth.user.userRole === "MotivationalSpeaker" ? "Motivational Speaker" : this.props.auth.user.userRole === "Admin" ? "Admin" : this.props.auth.user.userRole}</p>
        <p>
          {this.props.auth.user.portfolioLink ?
          <a className="text-white p-2" href={this.props.auth.user.portfolioLink}>
            <i> <LanguageIcon /> </i>
          </a>

          : null}

          {this.props.auth.user.youtubeLink ? 
          <a className="text-white p-2" href={this.props.auth.user.youtubeLink}>
            <i> <YouTubeIcon /> </i>
          </a>

          : null}

          {this.props.auth.user.twitterLink ? 
          <a className="text-white p-2" href={this.props.auth.user.twitterLink}>
            <i> <TwitterIcon /> </i>
          </a>

          : null}

          {this.props.auth.user.facebookLink ? 
          <a className="text-white p-2" href={this.props.auth.user.facebookLink}>
            <i> <FacebookIcon /> </i>
          </a>

          : null}

          {this.props.auth.user.linkedInLink ? 
          <a className="text-white p-2" href={this.props.auth.user.linkedInLink}>
            <i> <LinkedInIcon /> </i>
          </a>

          : null}

          {this.props.auth.user.instagramLink ? 
          <a className="text-white p-2" href={this.props.auth.user.instagramLink}>
            <i> <InstagramIcon /> </i>
          </a>

          : null}

        </p>
      </div>
    </div>
    </div>
    </div>

    <div className="row">
  <div className="col-md-12">
    <div className="card card-body bg-light mb-3">
      <h3 className="text-center text-success">Account Details</h3>
      <p className="lead">

        Full Name: {this.props.auth.user.name}

      </p>

      <p className = "lead">

        Email: {this.props.auth.user.email}

      </p>

      <p className = "lead">

        Password: Request to change the password from the update account settings below

      </p>

      <p className = "lead">

       CNIC: {this.props.auth.user.cnic}

      </p>

      <p className = "lead">

       Age: {this.props.auth.user.age}

      </p>

      <p className = "lead">

       Gender: {(this.props.auth.user.gender === 0 || this.props.auth.user.gender === "Mr.") ? "Male" : "Female"}

      </p>

      <p className = "lead">

        Contact: {this.props.auth.user.contact}

      </p>

    </div>
  </div>
</div>
</div>

  )

  const PatientProfile = (

    <div>

    <div className = "row">
    <div className = "col-md-12">
    <div className="card card-body bg-success text-white mb-3">
      <div className="row">
      <MediaQuery maxDeviceWidth = {600}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ? 
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '100px', width: '100px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {601} maxDeviceWidth = {900}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ?  
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '150px', width: '150px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {900} maxDeviceWidth = {1024}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ?  
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '200px', width: '200px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {1025} maxDeviceWidth = {1920}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ?  
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '250px', width: '250px'
          }}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {1920} maxDeviceWidth = {2560}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ? 
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '300px', width: '300px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

        <MediaQuery minDeviceWidth = {2560}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ? 
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '350px', width: '350px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>  
     
      </div>

      <div className="text-center">
        <h1 className="display-4 text-center text-light">{this.props.auth.user.name}</h1>
        <p className="lead text-center">{this.props.auth.user.userRole === 'ContentWriter' ? "Motivational Writer" : this.props.auth.user.userRole === "GymInstructor" ? "Health/Gym Instructor" : this.props.auth.user.userRole === "Patient" ? "Patient" : this.props.auth.user.userRole === "Psychologist" ? "Psychologist" : this.props.auth.user.userRole === "MotivationalSpeaker" ? "Motivational Speaker" : this.props.auth.user.userRole === "Admin" ? "Admin" : this.props.auth.user.userRole}</p>
      </div>
    </div>
    </div>
    </div>

    <div className="row">
  <div className="col-md-12">
    <div className="card card-body bg-light mb-3">
      <h3 className="text-center text-success">Account Details</h3>
      <p className="lead">

        Full Name: {this.props.auth.user.name}

      </p>

      <p className = "lead">

        Email: {this.props.auth.user.email}

      </p>

      <p className = "lead">

        Password: Request to change the password from the update account settings below

      </p>

      <p className = "lead">

       CNIC: {this.props.auth.user.cnic}

      </p>

      <p className = "lead">

       Age: {this.props.auth.user.age}

      </p>

      <p className = "lead">

       Gender: {(this.props.auth.user.gender === 0 || this.props.auth.user.gender === "Mr.") ? "Male" : "Female"}

      </p>

      <p className = "lead">

        Contact: {this.props.auth.user.contact}

      </p>

    </div>
  </div>
</div>
</div>

  )

  const PsychologistProfile = (

<div>

{this.props.auth.user.userRole === 'Psychologist' ? 

<div className = "row">
<div className = "col-md-12">
<div className="card card-body bg-success text-white mb-3">
  <div className="row">
    
    <MediaQuery maxDeviceWidth = {600}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ? 
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '100px', width: '100px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {601} maxDeviceWidth = {900}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ?  
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '150px', width: '150px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {900} maxDeviceWidth = {1024}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ?  
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '200px', width: '200px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {1024} maxDeviceWidth = {1920}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ?  
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '250px', width: '250px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          <MediaQuery minDeviceWidth = {1920} maxDeviceWidth = {2560}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ? 
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '300px', width: '300px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

        <MediaQuery minDeviceWidth = {2560}>
          <div className="col-4 col-md-3 m-auto" style = {{textAlign: 'center'}}>
          
          {this.props.auth.user.personImage ? 
          <img
          className = "rounded-circle"
          src = {this.props.auth.user.personImage} 
          alt = "No Image"
          style = {{height: '350px', width: '350px'}}

          />
          
          :

         <img
         className = "rounded-circle"
         src = {require("../Layout/Avatar.png")} 
         alt = "No Image" />
          }
          
          </div>
          </MediaQuery>

          </div>

  <div className="text-center">
    <h1 className="display-4 text-center text-light">{this.props.auth.user.name}</h1>
    <p className="lead text-center">{this.props.auth.user.userRole === 'ContentWriter' ? "Motivational Writer" : this.props.auth.user.userRole === "GymInstructor" ? "Health/Gym Instructor" : this.props.auth.user.userRole === "Patient" ? "Patient" : this.props.auth.user.userRole === "Psychologist" ? "Psychologist" : this.props.auth.user.userRole === "MotivationalSpeaker" ? "Motivational Speaker" : this.props.auth.user.userRole === "Admin" ? "Admin" : this.props.auth.user.userRole}</p>
    <p className = "lead text-center">Area of Speciality: {this.props.auth.user.areaOfSpeciality}</p>
    <Rate disabled defaultValue={2} />
  </div>
</div>
</div>
</div>

: null}

{this.props.auth.user.userRole === 'Psychologist' ? 

<div className = "row">
  <div className = "col-md-12">
    <div className = "card card-body bg-light mb-3">
      <h3 className = "text-center text-success">Available Timings</h3>
      <p className = "lead" style = {{color: 'Green'}}>
        Weekdays
      </p>
      <p className = "lead">
      {this.props.auth.user.weekdaysTimingFrom.slice(0,2) < 12 ? this.props.auth.user.weekdaysTimingFrom + ' ' + 'AM' + ' ' + '-' + ' ': this.props.auth.user.weekdaysTimingFrom.slice(0,2) === '12' ? this.props.auth.user.weekdaysTimingFrom + ' ' + 'PM' + ' ' + '-' + ' ' : this.props.auth.user.weekdaysTimingFrom.slice(0,2) > 12 ? this.props.auth.user.weekdaysTimingFrom.slice(0,2) - 12 + ':' + this.props.auth.user.weekdaysTimingFrom.slice(3,5) + ' ' + 'PM' + ' ' + '-' + ' ' : 'N/A'}
      {this.props.auth.user.weekdaysTimingTill.slice(0,2) < 12 ? this.props.auth.user.weekdaysTimingTill + ' ' + 'AM' + ' ': this.props.auth.user.weekdaysTimingTill.slice(0,2) === '12' ? this.props.auth.user.weekdaysTimingTill + ' ' + 'PM' + ' ' : this.props.auth.user.weekdaysTimingTill.slice(0,2) > 12 ? this.props.auth.user.weekdaysTimingTill.slice(0,2) - 12 + ':' + this.props.auth.user.weekdaysTimingTill.slice(3,5) + ' ' + 'PM' + ' ' : 'N/A'}</p>
      <p className = "lead" style = {{color: 'Green'}}>
        Weekend
      </p>
      <p className = "lead">
      {this.props.auth.user.weekendTimingFrom.slice(0,2) < 12 ? this.props.auth.user.weekendTimingFrom + ' ' + 'AM' + ' ' + '-' + ' ': this.props.auth.user.weekendTimingFrom.slice(0,2) === '12' ? this.props.auth.user.weekendTimingFrom + ' ' + 'PM' + ' ' + '-' + ' ' : this.props.auth.user.weekendTimingFrom.slice(0,2) > 12 ? this.props.auth.user.weekendTimingFrom.slice(0,2) - 12 + ':' + this.props.auth.user.weekendTimingFrom.slice(3,5) + ' ' + 'PM' + ' ' + '-' + ' ' : 'N/A'}
      {this.props.auth.user.weekendTimingTill.slice(0,2) < 12 ? this.props.auth.user.weekendTimingTill + ' ' + 'AM' + ' ': this.props.auth.user.weekendTimingTill.slice(0,2) === '12' ? this.props.auth.user.weekendTimingTill + ' ' + 'PM' + ' ' : this.props.auth.user.weekendTimingTill.slice(0,2) > 12 ? this.props.auth.user.weekendTimingTill.slice(0,2) - 12 + ':' + this.props.auth.user.weekendTimingTill.slice(3,5) + ' ' + 'PM' + ' ' : 'N/A'}</p>               
    </div>
  </div>
</div>

: null}

{this.props.auth.user.userRole === 'Psychologist' ? 

<div className="row">
<div className="col-md-12">
<div className="card card-body bg-light mb-3">
  <h3 className="text-center text-success">Account Details</h3>
  <p className="lead">

    Full Name: {this.props.auth.user.name}

  </p>

  <p className = "lead">

    Email: {this.props.auth.user.email}

  </p>

  <p className = "lead">

    Password: Request to change the password from the update account settings below

  </p>

  <p className = "lead">

   CNIC: {this.props.auth.user.cnic}

  </p>

  <p className = "lead">

   Age: {this.props.auth.user.age}

  </p>

  <p className = "lead">

   Gender: {(this.props.auth.user.gender === 0 || this.props.auth.user.gender === "Mr.") ? "Male" : "Female"}

  </p>

  <p className = "lead">

    Contact: {this.props.auth.user.contact}

  </p>

  </div>
  </div>
  </div>

  : null}

  <div className="row">

  {this.props.auth.user.currentWorkPlace ?

  <div className="col-md-6">

              <h3 className="text-center text-success">Current Job</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <h4>{this.props.auth.user.currentWorkPlace}</h4>
                  <p>{this.props.auth.user.currentlyWorkingFrom + ' ' + '-' + ' ' + 'Ongoing'}</p>
                  <p>
                    <strong>Job Role: </strong>{this.props.auth.user.currentWorkPlacePosition}</p>
                  <p>
                    <strong>Job Description: </strong>{this.props.auth.user.currentJobDescription}</p>
                  <p>
                      </p>
                </li>
              </ul>
            </div>

            : null}

            {this.props.auth.user.workPlace1 ?

            <div className="col-md-6">
              <h3 className="text-center text-success">Experience</h3>
              <ul className="list-group">
                <li className="list-group-item">
                  <h4>{this.props.auth.user.workPlace1}</h4>
                  <p>{this.props.auth.user.workedFrom1 + ' ' + '-'} {this.props.auth.user.workedTill1}</p>
                  <p>
                    <strong>Job Role:</strong> {this.props.auth.user.workPlace1Position}
                  </p>
                  <p>
                    <strong>Job Description:</strong> {this.props.auth.user.workDescription1}</p>
                </li>
              </ul>
            </div>

            : null}

            </div>

            {this.props.auth.user.institute1Name ? 
            <div className="col-md-6">
              <h3 className="text-center text-success">Qualifications</h3>
              <ul className="list-group">
              {this.props.auth.user.institute1Name ?
                <li className="list-group-item">
                  <h4>{this.props.auth.user.institute1Name}</h4>
                  <p>{this.props.auth.user.session1From + ' ' + '-'} {this.props.auth.user.session1Till}</p>
                  <p>
                    <strong>Degree: </strong>{this.props.auth.user.degree1Title}</p>
                </li>

                : null}

              {this.props.auth.user.institute2Name ?

                <li className="list-group-item">
                  <h4>{this.props.auth.user.institute2Name}</h4>
                  <p>{this.props.auth.user.session2From + ' ' + '-'} {this.props.auth.user.session2Till}</p>
                  <p>
                    <strong>Degree: </strong>{this.props.auth.user.degree2Title}</p>
                </li>

                : null}

              {this.props.auth.user.institute3Name ?

                <li className="list-group-item">
                  <h4>{this.props.auth.user.institute3Name}</h4>
                  <p>{this.props.auth.user.session3From + ' ' + '-'} {this.props.auth.user.session3Till}</p>
                  <p>
                    <strong>Degree: </strong>{this.props.auth.user.degree3Title}</p>
                </li>

                : null}

              </ul>
            </div>

            : null}

          </div>

  )

  const PatientProfileEdit = (

    <div className="container" style = {{textAlign: 'center'}}>
  
    <button type="button" className="btn btn-success mt-4" data-toggle="modal" data-target="#myModal">
      Edit
    </button>
  
    <div className="modal fade" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
        
          <div className="modal-header">
            <h4 className="modal-title">Edit Account Info</h4>
            
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          
          <div className="modal-body">
          <form noValidate onSubmit = {this.onSubmit} className="col-md-8 m-auto" style = {{backgroundColor: "White"}}> 
          <h3>Personal Information</h3>
          <div className="form-group">
                        <input type="password"
                         className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.passwordError
  
                         
                      })}                      
                         placeholder="Password" 
                         name="password"
                         value={this.state.password}
                         onChange={this.onChange}
                          />
  
                        <div style={{color: "Red"}}>{this.state.passwordError}</div>
  
                      </div>
  
                      <div className="form-group">
                      <input type="contact"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.contactError
  
                         
                      })}                      
                       placeholder="Contact Number"
                       name="contact"
                       value={this.state.contact}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.contactError}</div>
  
                      </div>
  
                      <div className = "form-group">
                      <input type="file" 
                      className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.imageError
  
                      })}
                      placeholder="Profile Image"
                      name="file" 
                      onChange={this.fileSelectedHandler}
                      />
  
                      <div style = {{color: "Red"}}>{this.state.imageError}</div>
  
                      </div>
  
                      <button className = "btn btn-success mt-4" onClick = {this.fileUploadHandler}>Upload</button>
                      <br></br>
                      <br></br>
                      
                      <input type="submit" className="btn btn-success mt-4" />
  
           </form> 
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
          
        </div>
      </div>
    </div>
    
  </div>

  )

  const PsychologistProfileEdit = (

    <div className="container" style = {{textAlign: 'center'}}>
  
    <button type="button" className="btn btn-success mt-4" data-toggle="modal" data-target="#myModal">
      Edit
    </button>
  
    <div className="modal fade" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
        
          <div className="modal-header">
            <h4 className="modal-title">Edit Account Info</h4>
            
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          
          <div className="modal-body">
          <form noValidate onSubmit = {this.onSubmit} className="col-md-8 m-auto" style = {{backgroundColor: "White"}}> 
          <h3>Personal Information</h3>
          <div className="form-group">
                        <input type="password"
                         className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.passwordError
  
                         
                      })}                      
                         placeholder="Password" 
                         name="password"
                         value={this.state.password}
                         onChange={this.onChange}
                          />
  
                        <div style={{color: "Red"}}>{this.state.passwordError}</div>
  
                      </div>
  
                      <div className="form-group">
                      <input type="contact"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.contactError
  
                         
                      })}                      
                       placeholder="Contact Number"
                       name="contact"
                       value={this.state.contact}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.contactError}</div>
  
                      </div>
  
                      <div className = "form-group">
                      <input type="file" 
                      className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.imageError
  
                      })}
                      placeholder="Profile Image"
                      name="file" 
                      onChange={this.fileSelectedHandler}
                      />
  
                      <div style = {{color: "Red"}}>{this.state.imageError}</div>
  
                      </div>
  
                      <button className = "btn btn-success mt-4" onClick = {this.fileUploadHandler}>Upload</button>
                      <br></br>
                      <br></br>
                      <h3>Area of Speciality</h3>
                      <div className="form-group">
                      <input type="text"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.areaOfSpecialityError
  
                         
                      })}                      
                       placeholder="Area of Speciality"
                       name="areaOfSpeciality"
                       value={this.state.areaOfSpeciality}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.areaOfSpecialityError}</div>
  
                      </div>
                       
                      <h3>Timings</h3>
                      <div className="form-group">
                        <label>Weekdays Timings From</label>
                      <input type="time"
                       className= 'form-control form-control-sm'          
                       placeholder="Weekdays Timings From"
                       name="weekdaysTimingFrom"
                       value={this.state.weekdaysTimingFrom}
                       onChange={this.onChange}
                       />
    
                      </div>

                      
                      <div className="form-group">
                        <label>Weekdays Timings Till</label>
                      <input type="time"
                       className= 'form-control form-control-sm'          
                       placeholder="Weekdays Timings Till"
                       name="weekdaysTimingTill"
                       value={this.state.weekdaysTimingTill}
                       onChange={this.onChange}
                       />
    
                      </div>

                      <div className="form-group">
                        <label>Weekend Timings From</label>
                      <input type="time"
                       className= 'form-control form-control-sm'          
                       placeholder="Weekend Timings From"
                       name="weekendTimingFrom"
                       value={this.state.weekendTimingFrom}
                       onChange={this.onChange}
                       />
    
                      </div>

                      <div className="form-group">
                        <label>Weekend Timings Till</label>
                      <input type="time"
                       className= 'form-control form-control-sm'          
                       placeholder="Weekend Timings Till"
                       name="weekendTimingTill"
                       value={this.state.weekendTimingTill}
                       onChange={this.onChange}
                       />
    
                      </div>

                      <h3>Current Job</h3>

                      <div className="form-group">
                      <input type="text"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.currentWorkPlaceError
  
                         
                      })}                      
                       placeholder="Current Work Place"
                       name="currentWorkPlace"
                       value={this.state.currentWorkPlace}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.currentWorkPlaceError}</div>
  
                      </div>

                      <div className="form-group">
                      <input type="text"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.currentWorkPlacePositionError
  
                         
                      })}                      
                       placeholder="Current Work Place Position"
                       name="currentWorkPlacePosition"
                       value={this.state.currentWorkPlacePosition}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.currentWorkPlacePositionError}</div>
  
                      </div>

                      <div className="form-group">
                        <label>Working From</label>
                      <input type="date"
                      className={classnames('form-control form-control-sm', {
  
                     'is-invalid': this.state.currentlyWorkingFromError

 
                       })}                        
                       placeholder="Working From"
                       name="currentlyWorkingFrom"
                       value={this.state.currentlyWorkingFrom}
                       onChange = {this.onChange}
                       />
                        
                       <div style={{color: "Red"}}>{this.state.currentlyWorkingFromError}</div>

                      </div>

                      <div className="form-group">
                      <input type="text"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.currentJobDescriptionError
  
                         
                      })}                      
                       placeholder="Current Job Description"
                       name="currentJobDescription"
                       value={this.state.currentJobDescription}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.currentJobDescription}</div>
  
                      </div>

                      <h3>Experience</h3>

                      <label>Work Experience</label>

                      <div className="form-group">
                      <input type="text"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.workPlace1Error
  
                         
                      })}                      
                       placeholder="Work Place"
                       name="workPlace1"
                       value={this.state.workPlace1}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.workPlace1Error}</div>
  
                      </div>

                      <div className="form-group">
                      <input type="text"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.workPlace1PositionError
  
                         
                      })}                      
                       placeholder="Position"
                       name="workPlace1Position"
                       value={this.state.workPlace1Position}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.workPlace1PositionError}</div>
  
                      </div>
         
                      <div className="form-group">
                        <label>Worked From</label>
                      <input type="date"
                      className={classnames('form-control form-control-sm', {
  
                     'is-invalid': this.state.workedFrom1Error

 
                       })}                        
                       placeholder="Worked From"
                       name="workedFrom1"
                       value={this.state.workedFrom1}
                       onChange = {this.onChange}
                       />
                        
                       <div style={{color: "Red"}}>{this.state.workedFrom1Error}</div>

                      </div>

                      <div className="form-group">
                        <label>Worked Till</label>
                      <input type="date"
                      className={classnames('form-control form-control-sm', {
  
                     'is-invalid': this.state.workedTill1Error

 
                       })}                        
                       placeholder="Worked Till"
                       name="workedTill1"
                       value={this.state.workedTill1}
                       onChange = {this.onChange}
                       />
                        
                       <div style={{color: "Red"}}>{this.state.workedTill1Error}</div>

                      </div>

                      <div className="form-group">
                      <input type="text"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.workDescription1Error
  
                         
                      })}                      
                       placeholder="Job Description"
                       name="workDescription1"
                       value={this.state.workDescription1}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.workDescription1Error}</div>
  
                      </div>

                      <h3>Education</h3>

                      <label>Add a Masters Degree</label>

                      <div className="form-group">
                      <input type="text"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.institute2NameError
  
                         
                      })}                      
                       placeholder="Institute Name"
                       name="institute2Name"
                       value={this.state.institute2Name}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.institute2NameError}</div>
  
                      </div>

                      <div className="form-group">
                        <label>Session From</label>
                      <input type="date"
                      className={classnames('form-control form-control-sm', {
  
                     'is-invalid': this.state.session2FromError

 
                       })}                        
                       placeholder="Session From"
                       name="session2From"
                       value={this.state.session2From}
                       onChange = {this.onChange}
                       />
                        
                       <div style={{color: "Red"}}>{this.state.session2FromError}</div>

                      </div>

                      <div className="form-group">
                        <label>Session Till</label>
                      <input type="date"
                      className={classnames('form-control form-control-sm', {
  
                     'is-invalid': this.state.session2TillError

 
                       })}                        
                       placeholder="Session Till"
                       name="session2Till"
                       value={this.state.session2Till}
                       onChange = {this.onChange}
                       />
                        
                       <div style={{color: "Red"}}>{this.state.session2TillError}</div>

                      </div>

                      <div className="form-group">
                      <input type="text"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.degree2TitleError
  
                         
                      })}                      
                       placeholder="Degree Title"
                       name="degree2Title"
                       value={this.state.degree2Title}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.degree2TitleError}</div>
  
                      </div>

                      <label>Add a Doctorate Degree</label>

                      <div className="form-group">
                      <input type="text"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.institute3NameError
  
                         
                      })}                      
                       placeholder="Institute Name"
                       name="institute3Name"
                       value={this.state.institute3Name}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.institute3NameError}</div>
  
                      </div>

                      <div className="form-group">
                        <label>Session From</label>
                      <input type="date"
                      className={classnames('form-control form-control-sm', {
  
                     'is-invalid': this.state.session3From

 
                       })}                        
                       placeholder="Session From"
                       name="session2From"
                       value={this.state.session3From}
                       onChange = {this.onChange}
                       />
                        
                       <div style={{color: "Red"}}>{this.state.session3FromError}</div>

                      </div>

                      <div className="form-group">
                        <label>Session Till</label>
                      <input type="date"
                      className={classnames('form-control form-control-sm', {
  
                     'is-invalid': this.state.session3Till

 
                       })}                        
                       placeholder="Session Till"
                       name="session3Till"
                       value={this.state.session3Till}
                       onChange = {this.onChange}
                       />
                        
                       <div style={{color: "Red"}}>{this.state.session3TillError}</div>

                      </div>

                      <div className="form-group">
                      <input type="text"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.degree3TitleError
  
                         
                      })}                      
                       placeholder="Degree Title"
                       name="degree3Title"
                       value={this.state.degree3Title}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.degree3TitleError}</div>
  
                      </div>

                      <input type="submit" className="btn btn-success mt-4" />
  
           </form> 
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
          
        </div>
      </div>
    </div>
    
  </div>
  
  )

  const MotivationalWriterProfileEdit = (

    <div className="container" style = {{textAlign: 'center'}}>
  
    <button type="button" className="btn btn-success mt-4" data-toggle="modal" data-target="#myModal">
      Edit
    </button>
  
    <div className="modal fade" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
        
          <div className="modal-header">
            <h4 className="modal-title">Edit Account Info</h4>
            
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          
          <div className="modal-body">
          <form noValidate onSubmit = {this.onSubmit} className="col-md-8 m-auto" style = {{backgroundColor: "White"}}> 
          <h3>Personal Information</h3>
          <div className="form-group">
                        <input type="password"
                         className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.passwordError
  
                         
                      })}                      
                         placeholder="Password" 
                         name="password"
                         value={this.state.password}
                         onChange={this.onChange}
                          />
  
                        <div style={{color: "Red"}}>{this.state.passwordError}</div>
  
                      </div>
  
                      <div className="form-group">
                      <input type="contact"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.contactError
  
                         
                      })}                      
                       placeholder="Contact Number"
                       name="contact"
                       value={this.state.contact}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.contactError}</div>
  
                      </div>
  
                      <div className = "form-group">
                      <input type="file" 
                      className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.imageError
  
                      })}
                      placeholder="Profile Image"
                      name="file" 
                      onChange={this.fileSelectedHandler}
                      />
  
                      <div style = {{color: "Red"}}>{this.state.imageError}</div>
  
                      </div>

                      <button className = "btn btn-success mt-4" onClick = {this.fileUploadHandler}>Upload</button>
                      <br></br>
                      <br></br>

                      <h3>Account Links</h3>

                      <label>Portfolio Link <LanguageIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="Portfolio Link"
                      name="portfolioLink" 
                      onChange={this.onChange}
                      />
    
                      </div>

                      <label>Twitter Link <TwitterIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="Twitter Link"
                      name="twitterLink" 
                      onChange={this.onChange}
                      />
    
                      </div>

                      <label>Facebook Link <FacebookIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="Facebook Link"
                      name="facebookLink" 
                      onChange={this.onChange}
                      />
    
                      </div>

                      <label>LinkedIn Link <LinkedInIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="LinkedIn Link"
                      name="linkedInLink" 
                      onChange={this.onChange}
                      />

                      </div>

                      <label> Instagram Link <InstagramIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="Instagram Link"
                      name="instagramLink" 
                      onChange={this.onChange}
                      />
  
                      </div>
                      
                      <input type="submit" className="btn btn-success mt-4" />
  
           </form> 
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
          
        </div>
      </div>
    </div>
    
  </div>

  )

  const MotivationalSpeakerProfileEdit = (

    <div className="container" style = {{textAlign: 'center'}}>
  
    <button type="button" className="btn btn-success mt-4" data-toggle="modal" data-target="#myModal">
      Edit
    </button>
  
    <div className="modal fade" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
        
          <div className="modal-header">
            <h4 className="modal-title">Edit Account Info</h4>
            
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          
          <div className="modal-body">
          <form noValidate onSubmit = {this.onSubmit} className="col-md-8 m-auto" style = {{backgroundColor: "White"}}> 
          <h3>Personal Information</h3>
          <div className="form-group">
                        <input type="password"
                         className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.passwordError
  
                         
                      })}                      
                         placeholder="Password" 
                         name="password"
                         value={this.state.password}
                         onChange={this.onChange}
                          />
  
                        <div style={{color: "Red"}}>{this.state.passwordError}</div>
  
                      </div>
  
                      <div className="form-group">
                      <input type="contact"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.contactError
  
                         
                      })}                      
                       placeholder="Contact Number"
                       name="contact"
                       value={this.state.contact}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.contactError}</div>
  
                      </div>
  
                      <div className = "form-group">
                      <input type="file" 
                      className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.imageError
  
                      })}
                      placeholder="Profile Image"
                      name="file" 
                      onChange={this.fileSelectedHandler}
                      />
  
                      <div style = {{color: "Red"}}>{this.state.imageError}</div>
  
                      </div>

                      <button className = "btn btn-success mt-4" onClick = {this.fileUploadHandler}>Upload</button>
                      <br></br>
                      <br></br>

                      <h3>Account Links</h3>

                      <label>Portfolio Link <LanguageIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="Portfolio Link"
                      name="portfolioLink" 
                      onChange={this.onChange}
                      />
    
                      </div>

                      <label>YouTube Link <YouTubeIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="Portfolio Link"
                      name="portfolioLink" 
                      onChange={this.onChange}
                      />

                     </div>

                      <label>Twitter Link <TwitterIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="Twitter Link"
                      name="twitterLink" 
                      onChange={this.onChange}
                      />
    
                      </div>

                      <label>Facebook Link <FacebookIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="Facebook Link"
                      name="facebookLink" 
                      onChange={this.onChange}
                      />
    
                      </div>

                      <label>LinkedIn Link <LinkedInIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="LinkedIn Link"
                      name="linkedInLink" 
                      onChange={this.onChange}
                      />

                      </div>

                      <label> Instagram Link <InstagramIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="Instagram Link"
                      name="instagramLink" 
                      onChange={this.onChange}
                      />
  
                      </div>
                      
                      <input type="submit" className="btn btn-success mt-4" />
  
           </form> 
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
          
        </div>
      </div>
    </div>
    
  </div>

  )

  const HealthGymInstructorProfileEdit = (

    <div className="container" style = {{textAlign: 'center'}}>
  
    <button type="button" className="btn btn-success mt-4" data-toggle="modal" data-target="#myModal">
      Edit
    </button>
  
    <div className="modal fade" id="myModal">
      <div className="modal-dialog">
        <div className="modal-content">
        
          <div className="modal-header">
            <h4 className="modal-title">Edit Account Info</h4>
            
            <button type="button" className="close" data-dismiss="modal">&times;</button>
          </div>
          
          <div className="modal-body">
          <form noValidate onSubmit = {this.onSubmit} className="col-md-8 m-auto" style = {{backgroundColor: "White"}}> 
          <h3>Personal Information</h3>
          <div className="form-group">
                        <input type="password"
                         className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.passwordError
  
                         
                      })}                      
                         placeholder="Password" 
                         name="password"
                         value={this.state.password}
                         onChange={this.onChange}
                          />
  
                        <div style={{color: "Red"}}>{this.state.passwordError}</div>
  
                      </div>
  
                      <div className="form-group">
                      <input type="contact"
                       className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.contactError
  
                         
                      })}                      
                       placeholder="Contact Number"
                       name="contact"
                       value={this.state.contact}
                       onChange={this.onChange}
                       />
  
                      <div style={{color: "Red"}}>{this.state.contactError}</div>
  
                      </div>
  
                      <div className = "form-group">
                      <input type="file" 
                      className={classnames('form-control form-control-sm', {
  
                          'is-invalid': this.state.imageError
  
                      })}
                      placeholder="Profile Image"
                      name="file" 
                      onChange={this.fileSelectedHandler}
                      />
  
                      <div style = {{color: "Red"}}>{this.state.imageError}</div>
  
                      </div>

                      <button className = "btn btn-success mt-4" onClick = {this.fileUploadHandler}>Upload</button>
                      <br></br>
                      <br></br>

                      <h3>Account Links</h3>

                      <label>Portfolio Link <LanguageIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="Portfolio Link"
                      name="portfolioLink" 
                      onChange={this.onChange}
                      />
    
                      </div>

                      <label>YouTube Link <YouTubeIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="Portfolio Link"
                      name="portfolioLink" 
                      onChange={this.onChange}
                      />

                     </div>

                      <label>Twitter Link <TwitterIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="Twitter Link"
                      name="twitterLink" 
                      onChange={this.onChange}
                      />
    
                      </div>

                      <label>Facebook Link <FacebookIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="Facebook Link"
                      name="facebookLink" 
                      onChange={this.onChange}
                      />
    
                      </div>

                      <label>LinkedIn Link <LinkedInIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="LinkedIn Link"
                      name="linkedInLink" 
                      onChange={this.onChange}
                      />

                      </div>

                      <label> Instagram Link <InstagramIcon /></label>

                      <div className = "form-group">
                      <input type="url" 
                      className = 'form-control form-control-sm'
                      placeholder="Instagram Link"
                      name="instagramLink" 
                      onChange={this.onChange}
                      />
  
                      </div>
                      
                      <input type="submit" className="btn btn-success mt-4" />
  
           </form> 
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
          
        </div>
      </div>
    </div>
    
  </div>

  )

    return (

     <div className = "container">
          {this.props.auth.user.userRole === 'ContentWriter' ? MotivationalWriterDashboard : this.props.auth.user.userRole === "GymInstructor" ? HealthGymInstructorDashboard : this.props.auth.user.userRole === "MotivationalSpeaker" ? MotivationalSpeakerDashboard : this.props.auth.user.userRole === "Patient" ? PatientDashboard : this.props.auth.user.userRole === "Psychologist" ? PsychologistDashboard : null}
      <div className = "profile">

            <div className = "container">
              <div className = "row">
                <div className = "col-md-12" style = {{textAlign: 'center'}}>
            
           {this.props.auth.user.userRole === "ContentWriter" ? MotivationalWriterProfile : this.props.auth.user.userRole === "GymInstructor" ? HealthGymInstructorProfile : this.props.auth.user.userRole === "MotivationalSpeaker" ? MotivationalSpeakerProfile : this.props.auth.user.userRole === "Patient" ? PatientProfile : this.props.auth.user.userRole === "Psychologist" ? PsychologistProfile : null}
           
           {this.props.auth.user.userRole === "Psychologist" ? PsychologistProfileEdit : this.props.auth.user.userRole === "Patient" ? PatientProfileEdit : this.props.auth.user.userRole === "ContentWriter" ? MotivationalWriterProfileEdit : this.props.auth.user.userRole === "MotivationalSpeaker" ? MotivationalSpeakerProfileEdit : this.props.auth.user.userRole === "GymInstructor" ? HealthGymInstructorProfileEdit : null} 
            
        </div>
        </div>
        </div>
        </div>
        </div>

    );
} 

}

Profile.propTypes = {

    updateAccountDetails: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({

    auth: state.auth,
    errors: state.errors
    
    });

export default connect(mapStateToProps, {updateAccountDetails})(withRouter(Profile));


