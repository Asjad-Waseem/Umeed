import React, {Component} from 'react';
import './SignUpForms.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../../Actions/AuthActions';
import isEmpty from '../../../Validation/is-empty';

const initialState = {

    cnic: '',
    age: '',
    name: '',
    email: '',
    password: '',
    gender: '',
    contact: '',
    personImage: '',
    errors: {},
    nameError: '',
    emailError: '',
    passwordError: '',
    ageError: '',
    genderError: '',
    contactError: '',
    cnicError: '',
    userRole: 'Psychologist',
    accountStatus: 'pending',

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

    institute1Name: '',
    institute1NameError: '',
    session1From: '',
    session1FromError: '',
    session1Till: '',
    session1TillError: '',
    degree1Title: '',
    degree1TitleError: '',
    degree1: '',

    institute2Name: '',
    institute2NameError: '',
    session2From: '',
    session2FromError: '',
    session2Till: '',
    session2TillError: '',
    degree2Title: '',
    degree2TitleError: '',
    degree2: '',
    
    institute3Name: '',
    institute3NameError: '',
    session3From: '',
    session3FromError: '',
    session3Till: '',
    session3TillError: '',
    degree3Title: '',
    degree3TitleError: '',
    degree3: ''

}

class PsychologistSignUpForm extends Component{

  fileSelectedHandler = event => {

    this.setState({
    
    personImage: event.target.files,
    degree1: event.target.files,
    degree2: event.target.files,
    degree3: event.target.files
    
    })
        }
    
        fileUploadHandler = () => {
    
            const fd = new FormData();
            fd.append('personImage', this.state.personImage, this.state.personImage.name);
            fd.append('degree1', this.state.degree1, this.state.degree1.name);
            fd.append('degree2', this.state.degree2, this.state.degree2.name);
            fd.append('degree3', this.state.degree3, this.state.degree3.name);

        }

    constructor(){

        super();

      this.state = initialState;

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount() {

        if(!isEmpty(this.props.auth.user)) {
    
            this.props.history.push('/Dashboard');
    
        }
     }

   // componentDidMount() {

       // if(!isEmpty(this.props.isAuthenticated)) {
    
           // this.props.history.push('/Dashboard');
    
      //  }
    // }
    
    UNSAFE_componentWillReceiveProps(nextProps) {

    if(nextProps.errors) {

       this.setState({errors: nextProps.errors});

    }

    }

    onChange(e){

        this.setState({[e.target.name]: e.target.value});
    
    }

    validate = () => {

        var date = new Date();
        // const currentDate = date.getFullYear()+'-'+ 0+ (date.getMonth()+1)+'-'+date.getDate();
        // let currentDate = date.getFullYear()+'-'+ 0+ (date.getMonth())+'-'+0+date.getDate();
        let currentDate = date.getFullYear()+'-'+ 0+ (date.getMonth()+1)+'-'+date.getDate();

        let nameError= '';
        let emailError= '';
        let passwordError= '';
        let ageError= '';
        let genderError= '';
        let contactError= '';
        let cnicError= '';

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

        let institute1NameError= '';
        let session1FromError= '';
        let session1TillError= '';
        let degree1TitleError= '';

        let institute2NameError= '';
        let session2FromError= '';
        let session2TillError= '';
        let degree2TitleError= '';

        let institute3NameError= '';
        let session3FromError= '';
        let session3TillError= '';
        let degree3TitleError= '';

        if (!this.state.name) {
            nameError = 'This field is mandatory';
          } else if (
            !/^[a-zA-Z]+(([,. -][a-zA-Z ])?[a-zA-Z*])*$/i.test(this.state.name)
          ) {
            nameError = 'Invalid fullname (Your Full Name should only have letters)';
          }

          if (!this.state.email) {
            emailError = 'This field is mandatory';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.email)
          ) {
            emailError = 'Invalid email address (Your email should have "@" and "." at the correct places)';
          }      

          if (!this.state.password) {
            passwordError = 'This field is mandatory';
          } else if (

            !this.state.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)
            
          ) {
            passwordError = 'Invalid password (Your password must be between 8-15 characters and must have one lowercase, one upper case, one numeric, and one special character)';
          }

          if (!this.state.cnic) {
            cnicError = 'This field is mandatory';
            } else if (
            !/^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/i.test(this.state.cnic)
            ) {
            cnicError = 'Invalid CNIC (Your CNIC should follow the format AAAAA-BBBBBBB-C)';
            }

              if (!this.state.age) {
                ageError = 'This field is mandatory';
              } else if (
                this.state.age<18 || this.state.age>150
              ) {
                ageError = 'Invalid age (You must be above 18 years to register)';
              }

              if (!this.state.gender) {
                genderError = 'This field is mandatory';
              }

              if (!this.state.contact) {
                contactError = 'This field is mandatory';
              } else if (

                !/^[+92]-[0092]-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/i.test(this.state.contact)
                   
              ) {
       
                contactError = "Invalid contact (Your contact must be in the Standard Pakistani Contact Format, E.g. 0300-0000000)"
                 
              }

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
    
                  this.state.currentWorkPlacePosition && this.state.currentWorkPlacePosition.length> 50 
    
                ) {
    
                  currentWorkPlacePositionError = "Current Work Place Position should not be more than 50 characters";
    
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

                if (!this.state.institute1Name) {

                  institute1NameError = "You must add a institute from where you completed your Bachelor's Degree"
    
                } else if (

                  this.state.institute1Name.length > 50 
    
                ) {
    
                  institute1NameError = "Institute Name should not be more than 50 characters";
    
                }
    
                if (!this.state.session1From) {

                  session1FromError = "You must select a Session starting date for your Bachelor's Degree";

                } else if(
    
                  this.state.session1From > currentDate
      
                 ) {
      
                 session1FromError = "Date selected must not be greater than current date and must not be less than Session Till Date"
               
                 }
    
                 if (!this.state.session1Till) {

                  session1TillError = "You must select a Session ending date for your Bachelor's Degree";
    
                  } else if(

                  this.state.session1Till > currentDate
      
                 ) {
      
                 session1TillError = "Date selected must not be greater than current date and must not be less than Session From Date"
               
                 }
    
                 if (!this.state.degree1Title) {

                  degree1TitleError = "You must add a degree title for your Bachelor's Degree";

                 } else if (
    
                  this.state.degree1Title && this.state.degree1Title.length > 30
    
                 ) {
    
                  degree1TitleError = "Degree Title should not be more than 30 characters"
    
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

              if ( nameError || 
                   emailError || 
                   passwordError || 
                   ageError || 
                   genderError || 
                   contactError ||
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

                this.setState({ nameError,
                                emailError, 
                                passwordError, 
                                ageError, 
                                genderError, 
                                cnicError, 
                                contactError,
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
                                institute1NameError,
                                session1FromError,
                                session1TillError,
                                degree1TitleError,
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

        const newUser = {

           cnic: this.state.cnic,
           age: this.state.age,
           name: this.state.name,
           email: this.state.email,
           password: this.state.password,
           gender: this.state.gender,
           contact: this.state.contact,
           userRole: this.state.userRole,
           personImage: this.state.personImage,
           accountStatus: this.state.accountStatus,

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

           institute1Name: this.state.institute1Name,
           session1From: this.state.session1From,
           session1Till: this.state.session1Till,
           degree1Title: this.state.degree1Title,
           degree1: this.state.degree1,

           institute2Name: this.state.institute2Name,
           session2From: this.state.session2From,
           session2Till: this.state.session2Till,
           degree2Title: this.state.degree2Title,
           degree2: this.state.degree2,

           institute3Name: this.state.institute3Name,
           session3From: this.state.session3From,
           session3Till: this.state.session3Till,
           degree3Title: this.state.degree3Title,
           degree3: this.state.degree3

        };

        if(isValid){

            // clear form
    
            this.setState = initialState;

            this.props.registerUser(newUser, this.props.history);
            
            }

        }

        uploadImage = async e => {
          const files = e.target.files
          const data = new FormData()
          data.append('file', files[0])
          data.append('upload_preset', 'asjad123')
          this.setState({ loading: true })
          const res = await fetch(
            '	https://api.cloudinary.com/v1_1/dzxm2eveo/image/upload',
            {
              method: 'POST',
              body: data
            }
          )
          const file = await res.json()
          // console.log(file)
          this.setState({
            personImage: file.secure_url,
            loading: false
          })
        }

        uploadImage1 = async e => {
          const files = e.target.files
          const data = new FormData()
          data.append('file', files[0])
          data.append('upload_preset', 'asjad123')
          this.setState({ loading: true })
          const res = await fetch(
            '	https://api.cloudinary.com/v1_1/dzxm2eveo/image/upload',
            {
              method: 'POST',
              body: data
            }
          )
          const file = await res.json()
          // console.log(file)
          this.setState({
            degree1: file.secure_url,
            loading: false
          })
        }

        uploadImage2 = async e => {
          const files = e.target.files
          const data = new FormData()
          data.append('file', files[0])
          data.append('upload_preset', 'asjad123')
          this.setState({ loading: true })
          const res = await fetch(
            '	https://api.cloudinary.com/v1_1/dzxm2eveo/image/upload',
            {
              method: 'POST',
              body: data
            }
          )
          const file = await res.json()
          // console.log(file)
          this.setState({
            degree2: file.secure_url,
            loading: false
          })
        }

        uploadImage3 = async e => {
          const files = e.target.files
          const data = new FormData()
          data.append('file', files[0])
          data.append('upload_preset', 'asjad123')
          this.setState({ loading: true })
          const res = await fetch(
            '	https://api.cloudinary.com/v1_1/dzxm2eveo/image/upload',
            {
              method: 'POST',
              body: data
            }
          )
          const file = await res.json()
          // console.log(file)
          this.setState({
            degree3: file.secure_url,
            loading: false
          })
        }
   
    render(){

      var date = new Date();

      const currentDate = date.getFullYear()+'-'+ 0+ (date.getMonth()+1)+'-'+date.getDate();

      console.log(currentDate);

      console.log(this.state.currentlyWorkingFrom);

        const { errors } = this.state;

        return (

            <div className="landing" style = {{marginRight: '0px', marginLeft: '0px', height: '500vh'}}>
            <div className="dark-overlay landing-inner text-light">
             
             <div className="register">
             <div className="container">
               <div className="row">
                 <div className="col-md-8 m-auto">

                  <h1 className="display-4 text-center text-light">Sign Up (Psychologist)</h1>

                  <p className="lead text-center">Fill up the Sign up form below to sign up as a Psychologist at Umeed today</p>
                 
                  <form noValidate onSubmit = {this.onSubmit} className="col-md-8 m-auto" style = {{backgroundColor: "White"}}> 

                      <br></br>
                      <div className="form-group">
                      <input type="text" 
                      className={classnames('form-control form-control-sm', {

                        'is-invalid': this.state.nameError

                       
                    })}                      
                      placeholder="Full Name" 
                      name="name" 
                      value={this.state.name}
                      onChange={this.onChange}
                       />
                           
                      <div style={{color: "Red"}} >{this.state.nameError}</div>

                    </div>

                    <div className="form-group">
                      <input type="email" 
                      className={classnames('form-control form-control-sm', {

                        'is-invalid': this.state.emailError

                       
                    })}                       
                      placeholder="Email Address" 
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                       />
                    
                      <div style={{color: "Red"}}>{this.state.emailError}</div>

                    </div>

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
                      <input type="age"
                       className={classnames('form-control form-control-sm', {

                        'is-invalid': this.state.ageError

                       
                    })}                      
                       placeholder="Age"
                       name="age"
                       value={this.state.age}
                       onChange={this.onChange}
                        />

                       <div style={{color: "Red"}}>{this.state.ageError}</div>

                    </div>
                    <div className="form-group">
                    <label style= {{color: "Black"}}>Select a gender</label>
                    <div className="form-group">
                    <div className="form-check form-check-inline">
                    <input className="form-check-input"
                     type="radio"
                     name="gender"
                     id="Male"
                     value="0"
                     checked={this.state.gender === "0"}
                     onChange={this.onChange}
                     />
                    <label className="form-check-label" for="Male" style={{color: "Black"}}>Male</label>
                    </div>

                    <div className="form-check form-check-inline">
                    <input className="form-check-input"
                     type="radio"
                     name="gender"
                     id="Female"
                     value="1"
                     checked={this.state.gender === "1"}
                     onChange={this.onChange}
                     />
                    <label class="form-check-label" for="Female" style={{color: "Black"}}>Female</label>
                    </div>

                    <div style={{color: "Red"}}>{this.state.genderError}</div>

                    </div>

                    </div>

                    <div className="form-group">
                    <input type="cnic"
                     className={classnames('form-control form-control-sm', {

                        'is-invalid': this.state.cnicError

                       
                    })}                      
                     placeholder="CNIC"
                     name="cnic"
                     value={this.state.cnic}
                     onChange={this.onChange}
                     />

                    <div style={{color: "Red"}}>{this.state.cnicError}</div>

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

                    <label className = "text-dark">Select a Profile Image (Optional)</label>

                    <div className = "form-group">
                    <input type="file" 
                    className='form-control form-control-sm'
                    placeholder="Profile Image"
                    name="file" 
                    onChange={this.uploadImage}
                    />

                   </div>

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
                        <label className = "text-dark">Weekday Timings From</label>
                      <input type="time"
                       className= 'form-control form-control-sm'          
                       placeholder="Weekday Timings From"
                       name="weekdaysTimingFrom"
                       value={this.state.weekdaysTimingFrom}
                       onChange={this.onChange}
                       />
    
                      </div>

                      
                      <div className="form-group">
                        <label className = "text-dark">Weekdays Timings Till</label>
                      <input type="time"
                       className= 'form-control form-control-sm'          
                       placeholder="Weekdays Timings Till"
                       name="weekdaysTimingTill"
                       value={this.state.weekdaysTimingTill}
                       onChange={this.onChange}
                       />
    
                      </div>

                      <div className="form-group">
                        <label className = "text-dark">Weekend Timings From</label>
                      <input type="time"
                       className= 'form-control form-control-sm'          
                       placeholder="Weekend Timings From"
                       name="weekendTimingFrom"
                       value={this.state.weekendTimingFrom}
                       onChange={this.onChange}
                       />
    
                      </div>

                      <div className="form-group">
                        <label className = "text-dark">Weekend Timings Till</label>
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
                        <label className = "text-dark">Working From</label>
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
  
                      <div style={{color: "Red"}}>{this.state.currentJobDescriptionError}</div>
  
                      </div>

                      <h3>Experience</h3>

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
                        <label className = "text-dark">Worked From</label>
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
                        <label className = "text-dark">Worked Till</label>
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

                      <label className = "text-dark">Add a Bachelor's Degree</label>

                      <div className="form-group">
                      <input type="text"
                      className={classnames('form-control form-control-sm', {

                      'is-invalid': this.state.institute1NameError
   
                       })}                      
                       placeholder="Institute Name"
                       name="institute1Name"
                       value={this.state.institute1Name}
                       onChange={this.onChange}
                       />

                      <div style={{color: "Red"}}>{this.state.institute1NameError}</div>

                      </div>

                     <div className="form-group">
                     <label className = "text-dark">Session From</label>
                     <input type="date"
                     className={classnames('form-control form-control-sm', {

                     'is-invalid': this.state.session1FromError

                     })}                        
                     placeholder="Session From"
                     name="session1From"
                     value={this.state.session1From}
                     onChange = {this.onChange}
                     />
  
                     <div style={{color: "Red"}}>{this.state.session1FromError}</div>

                     </div>

                    <div className="form-group">
                    <label className = "text-dark">Session Till</label>
                    <input type="date"
                    className={classnames('form-control form-control-sm', {

                    'is-invalid': this.state.session1TillError

                     })}                        
                    placeholder="Session Till"
                    name="session1Till"
                    value={this.state.session1Till}
                    onChange = {this.onChange}
                    />
  
                    <div style={{color: "Red"}}>{this.state.session1TillError}</div>

                    </div>

                    <div className="form-group">
                    <input type="text"
                    className={classnames('form-control form-control-sm', {

                    'is-invalid': this.state.degree1TitleError

                     })}                      
                    placeholder="Degree Title"
                    name="degree1Title"
                    value={this.state.degree1Title}
                    onChange={this.onChange}
                    />

                    <div style={{color: "Red"}}>{this.state.degree1TitleError}</div>

                    </div>

                    <div className = "form-group">
                    <input type="file" 
                    className='form-control form-control-sm'
                    placeholder="Profile Image"
                    name="file" 
                    onChange={this.uploadImage1}
                    />

                  </div>

                     <br></br>

                      <label className = "text-dark">Add a Masters Degree</label>

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
                        <label className = "text-dark">Session From</label>
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
                        <label className = "text-dark">Session Till</label>
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

                      <div className = "form-group">
                      <input type="file" 
                      className='form-control form-control-sm'
                      placeholder="Profile Image"
                      name="file" 
                      onChange={this.uploadImage2}
                      />

                      </div>

                     <br></br>

                      <label className = "text-dark">Add a Doctorate Degree</label>

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
                        <label className = "text-dark">Session From</label>
                      <input type="date"
                      className={classnames('form-control form-control-sm', {
  
                     'is-invalid': this.state.session3FromError

 
                       })}                        
                       placeholder="Session From"
                       name="session3From"
                       value={this.state.session3From}
                       onChange = {this.onChange}
                       />
                        
                       <div style={{color: "Red"}}>{this.state.session3FromError}</div>

                      </div>

                      <div className="form-group">
                        <label className = "text-dark">Session Till</label>
                      <input type="date"
                      className={classnames('form-control form-control-sm', {
  
                     'is-invalid': this.state.session3TillError

 
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

                      <div className = "form-group">
                      <input type="file" 
                      className='form-control form-control-sm'
                      placeholder="Profile Image"
                      name="file" 
                      onChange={this.uploadImage3}
                      />

                      </div>
                  
                    <input type="submit" className="btn btn-success btn-block mt-4" value = "Sign Up"/>

                  </form>

                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        );
    }
}

PsychologistSignUpForm.propTypes = {

    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired

}
const mapStateToProps = (state) => ({

    auth: state.auth,
    errors: state.errors

});

export default connect(mapStateToProps, {registerUser})(withRouter(PsychologistSignUpForm));