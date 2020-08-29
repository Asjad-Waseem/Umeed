import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import style from './Navbar.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../Actions/AuthActions';
import { persistor } from '../../store';
import { Drawer } from "antd";
import { MenuUnfoldOutlined,   MenuFoldOutlined} from '@ant-design/icons';
import Dropdown from 'react-bootstrap/Dropdown';
import isEmpty from '../../Validation/is-empty';

 class Navbar extends Component {

  state = { visible: false };

    showDrawer = () => {
        this.setState({
          visible: true
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false
        });
      };

 onLogoutClick(e){

 // e.preventDefault();
  this.props.logoutUser();
  persistor.purge();
 
}

  render() {

    //  const { isAuthenticated, user } = this.props.auth;

    const authLinks = (

      <div className="collapse navbar-collapse" id="mobile-nav">
      <ul className="navbar-nav ml-auto">

        <li className="nav-item">
        <Link className="nav-link" to="/Profile">

          {this.props.auth.user.personImage ? 

        <img
         className = "rounded-circle"
         src = {this.props.auth.user.personImage} 
         alt = {this.props.auth.user.name}
         style = {{ width: '25px', marginRight: '5px', height: '25px', borderRadius: '50%' }} />
         
         :

         <img
         className = "rounded-circle"
         src = {require("./Avatar.png")} 

         alt = {this.props.auth.user.name}
         style = {{ width: '25px', marginRight: '5px', height: '25px', borderRadius: '50%' }} />
         
        }

         </Link>  
         </li>

         <li className="nav-item">

         <a href="#" onClick ={this.onLogoutClick.bind(this)} className = "nav-link">
         {' '} Logout
         </a> 
        </li>

      </ul>
      </div>

    );

    const guestLinks = (

      <div className="collapse navbar-collapse" id="mobile-nav">

      <ul className="navbar-nav ml-auto">

              <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/WhyUmeed">Why Umeed?</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/FAQ">FAQ</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>

              <li className="nav-item">
                 <Link className="nav-link" to="/MainSignUpForm">Sign Up</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Login">{' '}Login</Link>
              </li>

            </ul>
            </div>

    );

    const PatientDashboard = (

      <ul className="navbar-nav">

            <li className="nav-item">
              <Link className = "text-light nav-link" onClick = {this.showDrawer} style = {{marginBottom: '5px', paddingRight: '40px', fontSize: '20px'}}>

          {React.createElement(this.state.visible ?   MenuUnfoldOutlined : MenuFoldOutlined)} 
  
          </Link>

          <Drawer
            title="Menu"
            placement="left"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            drawerStyle = {{backgroundColor: 'none'}}
            >

<Link style = {{color: "Green", fontSize: '15px'}} to = "/Profile">Profile</Link>

<br></br>
<br></br>

<Dropdown className="drop down text-left" style = {{border: 'none'}}>

  <Dropdown.Toggle id="dropdown-basic" style = {{backgroundColor: 'Transparent', color: 'Green', border: 'none', outline: 'none' , marginLeft: '-13px'}}>
  Profiles
  </Dropdown.Toggle>

  <Dropdown.Menu style = {{border: 'none'}}>

    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/PsychologistProfiles">Psychologist Profiles</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/MotivationalSpeakerProfiles">Motivational Speaker Profiles</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/MotivationalWriterProfiles">Motivational Writer Profiles</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/HealthGymInstructorProfiles">Health/Gym Instructor Profiles</Dropdown.Item>

  </Dropdown.Menu>

</Dropdown>

<br></br>

<Link style = {{color: "Green", fontSize: '15px'}} to = "/RegisteredPsychologistProfiles">Psychologists Registered</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/PatientSessions">Sessions</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/UploadedArticlesBlogs">Motivational Articles/Blogs</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/UploadedDailyHealthExercises">Daily Health Exercises</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/UploadedVideos">Motivational Videos</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/ProgressReportPatient">Progress Report</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/MakeAPayment">Make a payment</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/SuccessStory">Write a Success Story</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/ComplaintsQueries">Complaints/Queries</Link>

           </Drawer>
            </li>
            </ul>

    );

    const PsychologistDashboard = (

      <ul className="navbar-nav">

            <li className="nav-item">
              <Link className = "text-light nav-link" onClick = {this.showDrawer} style = {{marginBottom: '5px', paddingRight: '40px', fontSize: '20px'}}>

          {React.createElement(this.state.visible ?   MenuUnfoldOutlined : MenuFoldOutlined)} 
  
          </Link>

          <Drawer
            title="Menu"
            placement="left"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            drawerStyle = {{backgroundColor: 'none'}}
            >

<Link style = {{color: "Green", fontSize: '15px'}} to = "/Profile">Profile</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/PsychologistProfiles">Psychologist Profiles</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/PatientProfiles">Registered Patient Profiles</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/PsychologistSessions">Sessions</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/ProgressReport">Progress Report</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/Payments">Payments</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/ComplaintsQueries">Complaints/Queries</Link>

           </Drawer>
            </li>
            </ul>

    );

    const MotivationalSpeakerDashboard = (

      <ul className="navbar-nav">

            <li className="nav-item">
              <Link className = "text-light nav-link" onClick = {this.showDrawer} style = {{marginBottom: '5px', paddingRight: '40px', fontSize: '20px'}}>

          {React.createElement(this.state.visible ?   MenuUnfoldOutlined : MenuFoldOutlined)} 
          
          </Link>

          <Drawer
            title="Menu"
            placement="left"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            drawerStyle = {{backgroundColor: 'none'}}
            >

<Link style = {{color: "Green", fontSize: '15px'}} to = "/Profile">Profile</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/MotivationalSpeakerProfiles">Motivational Speaker Profiles </Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/SubmitVideoUploadRequest">Submit a Video Upload Request</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/UploadedVideos">Uploaded Videos</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/Payments">Payments</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/ComplaintsQueries">Complaints/Queries</Link>

           </Drawer>
            </li>
            </ul>

    );

    const MotivationalWriterDashboard = (

      <ul className="navbar-nav">
            <li className="nav-item">

              <Link className = "text-light nav-link" onClick = {this.showDrawer} style = {{marginBottom: '5px', paddingRight: '40px', fontSize: '20px'}}>

          {React.createElement(this.state.visible ?   MenuUnfoldOutlined : MenuFoldOutlined)} 
  
          </Link>

          <Drawer
            title="Menu"
            placement="left"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            drawerStyle = {{backgroundColor: 'none'}}
            >

<Link style = {{color: "Green", fontSize: '15px'}} to = "/Profile">Profile</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/MotivationalWriterProfiles">Motivational Writer Profiles</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/SubmitAnArticleBlogPostRequest">Submit a Article/Blog Post Request</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/UploadedArticlesBlogs">Uploaded Articles/Blogs</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/Payments">Payments</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/ComplaintsQueries">Complaints/Queries</Link>

           </Drawer>
            </li>
            </ul>

    );

    const HealthGymInstructorDashboard = (

      <ul className="navbar-nav">
            <li className="nav-item">

              <Link className = "text-light nav-link" onClick = {this.showDrawer} style = {{marginBottom: '5px', paddingRight: '40px', fontSize: '20px'}}>

          {React.createElement(this.state.visible ?   MenuUnfoldOutlined : MenuFoldOutlined)} 
  
          </Link>

          <Drawer
            title="Menu"
            placement="left"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            drawerStyle = {{backgroundColor: 'none'}}
            >

<Link style = {{color: "Green", fontSize: '15px'}} to = "/Profile">Profile</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/HealthGymInstructorProfiles">Health/Gym Instructor Profiles</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/SubmitADailyHealthExercisePostRequest">Submit a Daily Health Exercise Blog Post Request</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/UploadedDailyHealthExercises">Uploaded Daily Health Exercise Blogs</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/Payments">Payments</Link>
<br></br>
<br></br>
<Link style = {{color: "Green", fontSize: '15px'}} to = "/ComplaintsQueries">Complaints/Queries</Link>

           </Drawer>
            </li>
            </ul>

    );

    const AdminDashboard = (

      <ul className="navbar-nav">

            <li className="nav-item">
              <Link className = "text-light nav-link" onClick = {this.showDrawer} style = {{marginBottom: '5px', paddingRight: '40px', fontSize: '20px'}}>

          {React.createElement(this.state.visible ?   MenuUnfoldOutlined : MenuFoldOutlined)} 
  
          </Link>

          <Drawer
            width= {350}
            title="Menu"
            placement="left"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
            drawerStyle = {{backgroundColor: 'none'}}
            >

<Dropdown className="drop down text-left" style = {{border: 'none'}}>

  <Dropdown.Toggle id="dropdown-basic" style = {{backgroundColor: 'Transparent', color: 'Green', border: 'none', outline: 'none' , marginLeft: '-13px'}}>
  Approve Accounts
  </Dropdown.Toggle>

  <Dropdown.Menu style = {{border: 'none'}}>

    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/PendingPsychologistProfiles">Psychologist Profiles</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/PendingMotivationalSpeakerProfiles">Motivational Speaker Profiles</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/PendingMotivationalWriterProfiles">Motivational Writer Profiles</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/PendingHealthGymInstructorProfiles">Health/Gym Instructor Profiles</Dropdown.Item>

  </Dropdown.Menu>

</Dropdown>

<br></br>

<Dropdown className="drop down text-left" style = {{border: 'none'}}>

  <Dropdown.Toggle id="dropdown-basic" style = {{backgroundColor: 'Transparent', color: 'Green', border: 'none', outline: 'none' , marginLeft: '-13px'}}>
  Upload Requests
  </Dropdown.Toggle>

  <Dropdown.Menu style = {{border: 'none'}}>

    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/MotivationalVideosUploadRequests">Motivational Videos Upload Requests</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/ArticleBlogPostRequests">Motivational Articles/Blogs Upload Requests</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/DailyHealthExercisePostRequests">Daily Health Exercises Upload Requests</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/SystemFeedbackRequests">System Feedback Requests</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/SuccessStoryRequests">Success Story Requests</Dropdown.Item>

  </Dropdown.Menu>

</Dropdown>

<br></br>

<Link style = {{color: "Green", fontSize: '15px'}} to = "/ApprovePatientPayments">Approve Patient Payments</Link>

<br></br>
<br></br>

<Dropdown className="drop down text-left" style = {{border: 'none'}}>

  <Dropdown.Toggle id="dropdown-basic" style = {{backgroundColor: 'Transparent', color: 'Green', border: 'none', outline: 'none' , marginLeft: '-13px'}}>
  Transfer Payments
  </Dropdown.Toggle>

  <Dropdown.Menu style = {{border: 'none'}}>

    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/PsychologistPayments">Psychologist Payments</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/MotivationalSpeakerPayments">Motivational Speaker Payments</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/MotivationalWriterPayments">Motivational Writer Payments</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/HealthGymInstructorPayments">Health/Gym Instructor Payments</Dropdown.Item>

  </Dropdown.Menu>

</Dropdown>

<br></br>

<Dropdown className="drop down text-left" style = {{border: 'none'}}>

  <Dropdown.Toggle id="dropdown-basic" style = {{backgroundColor: 'Transparent', color: 'Green', border: 'none', outline: 'none' , marginLeft: '-13px'}}>
  Block/Suspend Account
  </Dropdown.Toggle>
  
  <Dropdown.Menu style = {{border: 'none'}}>

    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/SuspectedPsychologistProfiles"> Suspected Psychologist Profiles</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/SuspectedMotivationalSpeakerProfiles">Suspected Motivational Speaker Profiles</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/SuspectedMotivationalWriterProfiles">Suspected Motivational Writer Profiles</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/SuspectedHealthGymInstructorProfiles">Suspected Health/Gym Instructor Profiles</Dropdown.Item>

  </Dropdown.Menu>

</Dropdown>

<br></br>

    <Dropdown className="drop down text-left" style = {{border: 'none'}}>

  <Dropdown.Toggle id="dropdown-basic" style = {{backgroundColor: 'Transparent', color: 'Green', border: 'none', outline: 'none' , marginLeft: '-13px'}}>
  Complaints/Queries
  </Dropdown.Toggle>
  
  <Dropdown.Menu style = {{border: 'none'}}>

    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/PatientsComplaints/Queries">Patients Complaints/Queries</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/PsychologistsComplaints/Queries">Psychologists Complaints/Queries</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/MotivationalSpeakersComplaints/Queries">Motivational Speakers Complaints/Queries</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/MotivationalWritersComplaints/Queries">Motivational Writers Complaints/Queries</Dropdown.Item>
    <Dropdown.Item style = {{color: 'Green'}} tag={Link} href="/HealthGymInstructorsComplaints/Queries">Health/Gym Instructors Complaints/Queries</Dropdown.Item>

  </Dropdown.Menu>

</Dropdown>

           </Drawer>
            </li>
            </ul>

    );

    // const { isAuthenticated, user } = this.props.auth;

    // const authLinks = (

     // <ul className="navbar-nav ml-auto">
     // <li className="nav-item">

     // <a href="#" onClick = {this.onLogoutClick.bind(this)} className = "nav-link">
     // <img
      // className = "rounded-circle"
      // src = {user.avatar} 
      // alt = {"user.name"} 
      // style = {{ width: '25px', marginRight: '5px' }} 
      // title = "You must have a gravatar connected to your email to display an image" />{' '}
      // Logout</a> 

     // </li>
     // </ul>

    // );

    // const guestLinks = (

     // <ul className="navbar-nav ml-auto">
     // <li className="nav-item">
     // <Link className="nav-link" to="/MainSignUpForm">Sign Up</Link>
    // </li>
    // <li className="nav-item">
     // <Link className="nav-link" to="/Login">Login</Link>
    // </li>
    // </ul>

    // );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark mb-4" style={{backgroundColor:'Green'}}> 

      { this.props.auth.user.userRole === 'Patient' ? PatientDashboard : this.props.auth.user.userRole && this.props.auth.user.userRole === 'Psychologist' ? PsychologistDashboard : this.props.auth.user.userRole && this.props.auth.user.userRole === 'MotivationalSpeaker' ? MotivationalSpeakerDashboard : this.props.auth.user.userRole && this.props.auth.user.userRole === 'ContentWriter' ? MotivationalWriterDashboard : this.props.auth.user.userRole && this.props.auth.user.userRole === 'GymInstructor' ? HealthGymInstructorDashboard : this.props.auth.user.userRole && this.props.auth.user.email === 'admin@gmail.com' ? AdminDashboard : null}
    
          <Link className="navbar-brand" to="/">Umeed</Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="navbar-nav ml-auto" id="mobile-nav">
    
            <ul className="navbar-nav ml-auto">
             
            </ul>

            {this.props.auth.user !== "Incorrect Email Or Password" && !isEmpty(this.props.auth.user) ? authLinks : guestLinks }
         
          </div>
      </nav>    
    );
  }
}

 Navbar.propTypes = {

  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,

 }

 const mapStateToProps = (state) => ({

  auth: state.auth
  
 });

 export default connect(mapStateToProps, { logoutUser })(Navbar);