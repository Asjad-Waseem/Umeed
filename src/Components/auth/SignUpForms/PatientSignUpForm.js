import React, {Component} from 'react';
import './SignUpForms.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../../Actions/AuthActions';
import isEmpty from '../../../Validation/is-empty';
import { Label } from 'semantic-ui-react';

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
    userRole: 'Patient',
    // accountStatus: 'approved'

}

class PatientSignUpForm extends Component{

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

        let nameError= '';
        let emailError= '';
        let passwordError= '';
        let ageError= '';
        let genderError= '';
        let contactError= '';
        let cnicError= ''

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

              if ( nameError || emailError || passwordError || ageError || genderError || contactError) {

                this.setState({ nameError, emailError, passwordError, ageError, genderError, cnicError, contactError});
    
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
          // accountStatus: this.state.accountStatus

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
   
    render(){

        const { errors } = this.state;

        return (

            <div className="landing" style = {{marginRight: '0px', marginLeft: '0px'}}>
            <div className="dark-overlay landing-inner text-light">
             
             <div className="register">
             <div className="container">
               <div className="row">
                 <div className="col-md-8 m-auto">

                  <h1 className="display-4 text-center text-light">Sign Up (Patient)</h1>

                  <p className="lead text-center">Fill up the Sign up form below to sign up as a Patient at Umeed today</p>
                 
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

                    <label className = "text-dark">Select a Profile Picture (Optional)</label>
                
                    <div className = "form-group">
                    <input type="file" 
                    className='form-control form-control-sm'
                    placeholder="Profile Image"
                    name="file" 
                    onChange={this.uploadImage}
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

PatientSignUpForm.propTypes = {

    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired

}
const mapStateToProps = (state) => ({

    auth: state.auth,
    errors: state.errors

});

export default connect(mapStateToProps, {registerUser})(withRouter(PatientSignUpForm));