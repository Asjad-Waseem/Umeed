import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import './SignUpForms.css'

class MainSignUpForm extends Component {

    render(){   
        return(
             
            <div className="landing" style = {{marginRight: '0px', marginLeft: '0px'}}>
            <div className="dark-overlay landing-inner text-light">
           
            <div className = "MainSignUpForm">
            <h3 className="h5 mb-4 text-light" style={{paddingLeft:"15px"}}> You're only a step away from being a part of the Umeed Family. So, hurry up and SignUp as one of the following from the dropdown menu below
</h3>
            <Dropdown className="drop down text-center">
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  SignUp as a
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item tag={Link} href="/PatientSignUpForm">Patient</Dropdown.Item>
    <Dropdown.Item tag={Link} href="/PsychologistSignUpForm">Psychologist</Dropdown.Item>
    <Dropdown.Item tag={Link} href="/HealthGymInstructorSignUpForm">Health/Gym Instructor</Dropdown.Item>
    <Dropdown.Item tag={Link} href="/MotivationalSpeakerSignUpForm">Motivational Speaker</Dropdown.Item>
    <Dropdown.Item tag={Link} href="/MotivationalWriterSignUpForm">Motivational Writer</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
            </div>
            </div>
            </div>
        )
    }

}
       
    
export default MainSignUpForm;
