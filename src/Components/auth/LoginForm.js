import React, { Component } from 'react';
import './LoginForm.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../Actions/AuthActions'; 
import classnames from 'classnames';

const initialState = {

    email: '',
    password: '',
    errors: {},
    emailError: '',
    passwordError: ''

}

class LoginForm extends Component {

    constructor(){

        super();

        this.state = initialState;

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

 componentDidMount() {

    if(this.props.auth.user.userRole === "Psychologist") {

        this.props.history.push('/PsychologistDashboard');

    }

    if(this.props.auth.user.userRole === "Patient") {

        this.props.history.push('/PatientDashboard');

    }

    if(this.props.auth.user.userRole === "Psychologist") {

        this.props.history.push('/PsychologistDashboard');

    }

    if(this.props.auth.user.userRole === "Health/Gym Instructor") {

        this.props.history.push('/HealthGymInstructorDashboard');

    }

    if(this.props.auth.user.userRole === "Motivational Speaker") {

        this.props.history.push('/MotivationalSpeakerDashboards');

    }

    if(this.props.auth.user.userRole === "Motivational Writer") {

        this.props.history.push('/MotivationalWriterDashboard');

    }

    if(this.props.auth.user.name === "admin" && this.props.auth.user.password === "admin") {

      this.props.history.push('/AdminDashboard');

  }

  //  if(!isEmpty(this.props.auth.user)) {

    //    this.props.history.push('/Dashboard');

   // }

}

    onChange(e){

        this.setState({[e.target.name]: e.target.value});
    
    }    

    // UNSAFE_componentWillReceiveProps(nextProps){

       // if(nextProps.auth.isAuthenticated) {

         //   this.props.history.push('/Dashboard');

        // }

        // if(nextProps.errors) {

           // this.setState({errors: nextProps.errors});

       // }
    // }

     UNSAFE_componentWillReceiveProps(nextProps){

        if(nextProps.auth.user.userRole === "Psychologist") {

            this.props.history.push('/PsychologistDashboard');

        }

        if(nextProps.auth.user.userRole === "Patient") {

            this.props.history.push('/PatientDashboard');

        }

        if(nextProps.auth.user.userRole === "GymInstructor") {

            this.props.history.push('/HealthGymInstructorDashboard');

        }

        if(nextProps.auth.user.userRole === "MotivationalSpeaker") {

            this.props.history.push('/MotivationalSpeakerDashboard');

        }

        if(nextProps.auth.user.userRole === "ContentWriter") {

            this.props.history.push('/MotivationalWriterDashboard');

        }

        if(nextProps.auth.user.email === "admin@gmail.com") {

          this.props.history.push('/AdminDashboard');

       }

       // if(!isEmpty(nextProps.auth.user)) {

         //   this.props.history.push('/Dashboard');

        // }

      //   if(nextProps.errors) {

        //    this.setState({errors: nextProps.errors});

       // }
     }

    validate = () => {

        let emailError= '';
        let passwordError='';

          if (!this.state.email) {
            emailError = 'This field is mandatory';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.state.email)
          ) {
            emailError = 'Invalid email address (Your email must contain "@" and "." at the correct places)';
          }      

           if (!this.state.password) {
                passwordError = 'This field is mandatory';
              } 

            
            if(emailError || passwordError) {

                this.setState({emailError, passwordError});

            return false;

            }  

            return true;

    }

    onSubmit(e){

        e.preventDefault();

        const isValid = this.validate();

        const userData = {

            email: this.state.email,
            password: this.state.password
          
        };

        if(isValid){

       // axios.post('https://desolate-wave-36898.herokuapp.com/login', user)

       // .then(res => console.log(res.data))
       // .catch(err => console.log(err.response.data))

        
       // console.log(this.state);
    
        // clear form

        this.setState = initialState;

        this.props.loginUser(userData, this.props.history);
        
        }

      //  if(this.state.email === 'admin@gmail.com' || this.state.password === 'admin') {

        //  window.location.href = '/AdminDashboard';

       // }
    
        };

    render(){

        const { errors } = this.state;

        return(

            <div className="landing" style = {{marginRight: '0px', marginLeft: '0px'}}>
            <div className="dark-overlay landing-inner text-light">

            <div className="login">
            <div className="container">
            <div className="row">
            <div className="col-md-4 m-auto">

            <h1 className="display-4 text-center text-light">Log In</h1>

            <p className="lead text-center">Sign in to your Umeed account</p>

            <form noValidate onSubmit={this.onSubmit}>
            <div className="form-group">

              <input type="email" 
              className={classnames('form-control form-control-lg', {

                'is-invalid': this.state.emailError,

            })}             
              placeholder="Email Address" 
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              required />
              {this.state.emailError && (

              <div className = "invalid-feedback text-light">{this.state.emailError}</div>

              )}
              
            </div>

            <div className="form-group">

              <input type="password"
               className={classnames('form-control form-control-lg', {

                'is-invalid': this.state.passwordError

               
            })}             
               placeholder="Password"
               name="password"
               value={this.state.password}
               onChange={this.onChange}
               required  />
               
               {this.state.passwordError && (

              <div className = "invalid-feedback text-light">{this.state.passwordError}</div> 

               )}
               
               </div>

            <input type="submit" className="btn btn-success btn-block mt-4" value = "Log In"/>
          
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

LoginForm.propTypes = {

    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({

auth: state.auth,
errors: state.errors

});

export default connect(mapStateToProps, { loginUser })(LoginForm);

