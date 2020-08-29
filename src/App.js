import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import PrivateRoute from './Components/Common/PrivateRoute';
import "antd/dist/antd.css";
// import jwt_decode from 'jwt-decode';
// import setAuthtoken from './Utils/setAuthtoken';
// import { setCurrentUser, logoutUser } from './Actions/AuthActions';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import Landing from './Components/Layout/Landing';
import About from './Components/HomePageRoutes/About';
import WhyUmeed from './Components/HomePageRoutes/WhyUmeed';
import FAQ from './Components/HomePageRoutes/FAQ';
import Contact from './Components/HomePageRoutes/Contact';

import MainSignUpForm from './Components/auth/SignUpForms/MainSignUpForm';
import PatientSignUpForm from './Components/auth/SignUpForms/PatientSignUpForm';
import PsychologistSignUpForm from './Components/auth/SignUpForms/PsychologistSignUpForm';
import MotivationalSpeakerSignUpForm from './Components/auth/SignUpForms/MotivationalSpeakerSignUpForm';
import MotivationalWriterSignUpForm from './Components/auth/SignUpForms/MotivationalWriterSignUpForm';
import HealthGymInstructorSignUpForm from './Components/auth/SignUpForms/HealthGymInstructorSignUpForm';

import LoginForm from './Components/auth/LoginForm';

import PatientDashboard from './Components/auth/PatientRoutes/PatientDashboard';
import PsychologistDashboard from './Components/auth/PsychologistRoutes/PsychologistDashboard';
import HealthGymInstructorDashboard from './Components/auth/HealthGymInstructorRoutes/HealthGymInstructorDashboard';
import MotivationalSpeakerDashboard from './Components/auth/MotivationalSpeakerRoutes/MotivationalSpeakerDashboard';
import MotivationalWriterDashboard from './Components/auth/MotivationalWriterRoutes/MotivationalWriterDashboard';
import AdminDashboard from './Components/auth/AdminRoutes/AdminDashboard';

import Profile from './Components/Common/Profile';

import Payments from './Components/Common/Payments';

import ComplaintsQueries from './Components/Common/ComplaintsQueries';

import ApprovePsychologistProfiles from './Components/Admin/ApproveAccounts/PsychologistAccounts/Profiles/ApprovePsychologistProfiles';
import ApprovePsychologistProfile from './Components/Admin/ApproveAccounts/PsychologistAccounts/Profile/ApprovePsychologistProfile';

import ApproveMotivationalSpeakerProfiles from './Components/Admin/ApproveAccounts/MotivationalSpeakerAccounts/Profiles/ApproveMotivationalSpeakerProfiles';
import ApproveMotivationalSpeakerProfile from './Components/Admin/ApproveAccounts/MotivationalSpeakerAccounts/Profile/ApproveMotivationalSpeakerProfile';

import ApproveMotivationalWriterProfiles from './Components/Admin/ApproveAccounts/MotivationalWriterAccounts/Profiles/ApproveMotivationalWriterProfiles';
import ApproveMotivationalWriterProfile from './Components/Admin/ApproveAccounts/MotivationalWriterAccounts/Profile/ApproveMotivationalWriterProfile';

import ApproveHealthGymInstructorProfiles from './Components/Admin/ApproveAccounts/HealthGymInstructorAccounts/Profiles/ApproveHealthGymInstructorProfiles';
import ApproveHealthGymInstructorProfile from './Components/Admin/ApproveAccounts/HealthGymInstructorAccounts/Profile/ApproveHealthGymInstructorProfile';

import PatientProfiles from './Components/auth/PsychologistRoutes/patientProfiles/PatientProfiles';
import PatientProfile from './Components/auth/PsychologistRoutes/patientProfile/PatientProfile';

import RegisteredPsychologistProfiles from './Components/auth/PatientRoutes/psychologistProfiles/RegisteredPsychologistProfiles';
import RegisteredPsychologistProfile from './Components/auth/PatientRoutes/psychologistProfile/RegisteredPsychologistProfile';

import PsychologistProfiles from './Components/profiles/PsychologistProfiles';
import PsychologistProfile from './Components/profile/PsychologistProfile';

import MotivationalSpeakerProfiles from './Components/profiles/MotivationalSpeakerProfiles';
import MotivationalSpeakerProfile from './Components/profile/MotivationalSpeakerProfile';

import MotivationalWriterProfiles from './Components/profiles/MotivationalWriterProfiles';
import MotivationalWriterProfile from './Components/profile/MotivationalWriterProfile';

import HealthGymInstructorProfiles from './Components/profiles/HealthGymInstructorProfiles';
import HealthGymInstructorProfile from './Components/profile/HealthGymInstructorProfile';

import ArticleBlogPost from './Components/ArticleBlogPosts/ArticleBlogPost';
import ArticleBlogPosts from './Components/ArticleBlogPosts/ArticleBlogPosts';
import ArticleBlogPostComponent from './Components/ArticleBlogPost/ArticleBlogPostComponent';

import DailyHealthExercisePost from './Components/DailyHealthExercisesPosts/DailyHealthExercisePost';
import DailyHealthExercisePosts from './Components/DailyHealthExercisesPosts/DailyHealthExercisePosts';
import DailyHealthExercisePostComponent from './Components/DailyHealthExercisePost/DailyHealthExercisePostComponent';

import ArticleBlogPostRequests from './Components/Admin/ArticleBlogPosts/ArticleBlogPostRequests/ArticleBlogPostRequests';
import ArticleBlogPostRequestComponent from './Components/Admin/ArticleBlogPosts/ArticleBlogPostRequest/ArticleBlogPostRequestComponent';

import DailyHealthExercisePostRequests from './Components/Admin/DailyHealthExercisePosts/DailyHealthExercisePostRequests/DailyHealthExercisePostRequests';
import DailyHealthExercisePostRequestComponent from './Components/Admin/DailyHealthExercisePosts/DailyHealthExercisePostRequest/DailyHealthExercisePostRequestComponent';

import MotivationalVideoPostForm from './Components/MotivationalVideos/MotivationalVideoPostForm';
import MotivationalVideos from './Components/MotivationalVideos/MotivationalVideos';
import MotivationalVideoComponent from './Components/MotivationalVideo/MotivationalVideoComponent';

import MotivationalVideoPostRequests from './Components/Admin/MotivationalVideoPosts/MotivationalVideoPostRequests/MotivationalVideoRequests';
import MotivationalVideoPostRequestComponent from './Components/Admin/MotivationalVideoPosts/MotivationalVideoPostRequest/MotivationalVideoPostRequestComponent';

import Payment from './Components/auth/PatientRoutes/Payment';
import TextChatPayment from './Components/auth/PatientRoutes/TextChatPayment';

import ApprovePatientPaymentsRequests from './Components/Admin/Payments/ApprovePatientPayments/ApprovePatientPaymentsRequests/ApprovePatientPaymentsRequests';
import ApprovePatientPaymentRequestComponent from './Components/Admin/Payments/ApprovePatientPayments/ApprovePatientPaymentsRequest/ApprovePatientPaymentRequestComponent';

import ProgressReportForm from './Components/auth/PsychologistRoutes/ProgressReportForm';
import ProgressReport from './Components/auth/PatientRoutes/ProgressReport';
import ProgressReportIndividual from './Components/auth/PatientRoutes/ProgressReportIndividual';

import SuccessStoriesForm from './Components/auth/PatientRoutes/SuccessStoriesForm';

import sessions from './Components/TextChatComponents/sessions';
import patientSessions from './Components/TextChatComponents/patientSessions';

import GivePsychologistFeedback from './Components/auth/PatientRoutes/GivePsychologistFeedback';
import PsychologistFeedbackRatings from './Components/auth/PatientRoutes/PsychologistFeedbackRatings';

import SuccessStoryPostRequests from './Components/Admin/ApproveSuccessStories/SuccessStoryPostRequests/SuccessStoryPostRequests';

import TopRatedPsychologists from './Components/HomePageRoutes/TopRatedPsychologists';
import SuccessStories from './Components/HomePageRoutes/SuccessStories';

import login from './Components/TextChatComponents/Login/login';
import dashboard from './Components/TextChatComponents/Dashboard/dashboard';
import signup from './Components/TextChatComponents/SignUp/signup';
import Chat from './Components/TextChatComponents/Chat';

import PatientInbox from './Components/TextChatComponents/Dashboard/patientInbox';

import Main from './Components/TextChatComponents/Main';
import Main1 from './Components/TextChatComponents/Main1';

import Testing from './Components/auth/SignUpForms/Testing';
import Testing1 from './Components/auth/SignUpForms/Testing1';
import Testingg from './Components/auth/SignUpForms/Testingg';

import abc from './Components/profile/abc';

// Check for token

// if (localStorage.jwtToken){

// Set auth token header auth

// setAuthtoken(localStorage.jwtToken);

// Decode token and get user info and exp

// const decoded = jwt_decode(localStorage.jwtToken);

// Set user and isAuthenticated

// store.dispatch(setCurrentUser(decoded));

// 

// Check for expired token

// const currentTime = Date.now() / 1000;

// if(decoded.exp < currentTime){

  // Logout user

 // store.dispatch(logoutUser());

  // TODO: Clear current profile

  // Redirect to login

  // window.location.href = './Login';

// }

// }

class App extends Component {

  render() {
    return(
      <Provider store = { store }>
      <Router>
      <PersistGate persistor = { persistor }>

      <div className="App">
      
      <Navbar/>

      <Route exact path = "/" component = {Landing} />

      <Route exact path = "/About" component = {About} />
      <Route exact path = "/WhyUmeed" component = {WhyUmeed} />
      <Route exact path = "/FAQ" component = {FAQ} />
      <Route exact path = "/Contact" component = {Contact} />
      <Route exact path = "/MainSignUpForm" component = {MainSignUpForm} />
      <Route exact path = "/PatientSignUpForm" component = {PatientSignUpForm} />
      <Route exact path = "/PsychologistSignUpForm" component = {PsychologistSignUpForm} />
      <Route exact path = "/HealthGymInstructorSignUpForm" component = {HealthGymInstructorSignUpForm} />
      <Route exact path = "/MotivationalSpeakerSignUpForm" component = {MotivationalSpeakerSignUpForm} />
      <Route exact path = "/MotivationalWriterSignUpForm" component = {MotivationalWriterSignUpForm} />

      <Route exact path = "/Testing" component = {Testing} />
      <Route exact path = "/Testing1" component = {Testing1} />
      <Route exact path = "/Testingg" component = {Testingg} />

      <Route exact path = "/Login" component = {LoginForm} />
      <Route exact path = "/TopRatedPsychologists" component = {TopRatedPsychologists} />
      <Route exact path = "/SuccessStories" component = {SuccessStories} />

      <Switch>
      <PrivateRoute exact path = "/PatientDashboard" component = {PatientDashboard} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/PsychologistDashboard" component = {PsychologistDashboard} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/HealthGymInstructorDashboard" component = {HealthGymInstructorDashboard} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/MotivationalSpeakerDashboard" component = {MotivationalSpeakerDashboard} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/MotivationalWriterDashboard" component = {MotivationalWriterDashboard} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/AdminDashboard" component = {AdminDashboard} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/Profile" component = {Profile} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/Payments" component = {Payments} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/ComplaintsQueries" component = {ComplaintsQueries} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/PendingPsychologistProfiles" component = {ApprovePsychologistProfiles} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/PendingPsychologistProfile/:PendingPsychologistProfileId" component = {ApprovePsychologistProfile} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/PendingMotivationalSpeakerProfiles" component = {ApproveMotivationalSpeakerProfiles} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/PendingMotivationalSpeakerProfile/:PendingMotivationalSpeakerProfileId" component = {ApproveMotivationalSpeakerProfile} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/PendingMotivationalWriterProfiles" component = {ApproveMotivationalWriterProfiles} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/PendingMotivationalWriterProfile/:PendingMotivationalWriterProfileId" component = {ApproveMotivationalWriterProfile} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/PendingHealthGymInstructorProfiles" component = {ApproveHealthGymInstructorProfiles} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/PendingHealthGymInstructorProfile/:PendingHealthGymInstructorProfileId" component = {ApproveHealthGymInstructorProfile} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/PatientProfiles" component = {PatientProfiles} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/PatientProfile/:PatientProfileId" component = {PatientProfile} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/RegisteredPsychologistProfiles" component = {RegisteredPsychologistProfiles} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/RegisteredPsychologistProfile/:PsychologistProfileId" component = {RegisteredPsychologistProfile} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/PsychologistProfiles" component = {PsychologistProfiles} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/PsychologistProfile/:PsychologistProfileId" component = {PsychologistProfile} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/MotivationalSpeakerProfiles" component = {MotivationalSpeakerProfiles} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/MotivationalSpeakerProfile/:MotivationalSpeakerProfileId" component = {MotivationalSpeakerProfile} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/MotivationalWriterProfiles" component = {MotivationalWriterProfiles} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/MotivationalWriterProfile/:MotivationalWriterProfileId" component = {MotivationalWriterProfile} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/HealthGymInstructorProfiles" component = {HealthGymInstructorProfiles} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/HealthGymInstructorProfile/:HealthGymInstructorProfileId" component = {HealthGymInstructorProfile} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/SubmitAnArticleBlogPostRequest" component = {ArticleBlogPost} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/UploadedArticlesBlogs" component = {ArticleBlogPosts} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/ArticleBlogPost/:_id" component = {ArticleBlogPostComponent} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/SubmitADailyHealthExercisePostRequest" component = {DailyHealthExercisePost} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/UploadedDailyHealthExercises" component = {DailyHealthExercisePosts} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/DailyHealthExercisePost/:_id" component = {DailyHealthExercisePostComponent} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/ArticleBlogPostRequests" component = {ArticleBlogPostRequests} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/ArticleBlogPostRequests/:_id" component = {ArticleBlogPostRequestComponent} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/DailyHealthExercisePostRequests" component = {DailyHealthExercisePostRequests} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/DailyHealthExercisePostRequests/:_id" component = {DailyHealthExercisePostRequestComponent} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/SubmitVideoUploadRequest" component = {MotivationalVideoPostForm} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/UploadedVideos" component = {MotivationalVideos} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/MotivationalVideo/:_id" component = {MotivationalVideoComponent} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/MotivationalVideosUploadRequests" component = {MotivationalVideoPostRequests} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/MotivationalVideosUploadRequests/:_id" component = {MotivationalVideoPostRequestComponent} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/MakeAPayment/:profileID" component = {Payment} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/MakeAPayment/TextChat/:profileID" component = {TextChatPayment} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/ApprovePatientPayments" component = {ApprovePatientPaymentsRequests} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/ApprovePatientPayments/:_id" component = {ApprovePatientPaymentRequestComponent} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/ProgressReport/:_id" component = {ProgressReportForm} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/ProgressReportPatient" component = {ProgressReport} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/ProgressReportPatient/:_id" component = {ProgressReportIndividual} />
      </Switch>
      <Switch>
      <PrivateRoute exact path = "/SuccessStory" component = {SuccessStoriesForm} />
      </Switch>

      <Switch>
      <PrivateRoute exact path = "/PsychologistSessions" component = {sessions} />
      </Switch>

      <Switch>
      <PrivateRoute exact path = "/PatientSessions" component = {patientSessions} />
      </Switch>

      <Switch>
      <PrivateRoute exact path = "/PsychologistFeedback/:_id" component = {GivePsychologistFeedback} />
      </Switch>

      <Switch>
      <PrivateRoute exact path = "/PsychologistProfile/PsychologistFeedbackRatings/:_id" component = {PsychologistFeedbackRatings} />
      </Switch>

      <Switch>
      <PrivateRoute exact path = "/SuccessStoryRequests" component = {SuccessStoryPostRequests} />
      </Switch>
    
      <Switch>
      <PrivateRoute exact path = "/loginChat" component = {login} />
      </Switch>

      <Switch>
      <PrivateRoute exact path = "/TextChat" component = {signup} />
      </Switch>

      <Switch>
        <PrivateRoute exact path = "/Chat" component = {Chat} />
      </Switch>

      <Switch>
        <PrivateRoute exact path = "/dashboard" component = {dashboard} />
      </Switch>

      <Switch>
        <PrivateRoute exact path = "/PatientInbox" component = {PatientInbox} />
      </Switch>

      <Switch>
        <PrivateRoute exact path = "/Main" component = {Main} />
      </Switch>

      <Switch>
        <PrivateRoute exact path = "/Main1" component = {Main1} />
      </Switch>

      <Switch>
        <PrivateRoute exact path = "/abc" component = {abc} />
      </Switch>

     <Footer/>
      </div>
      </PersistGate>
      </Router>
     </Provider>
          );
  }
}

export default App;



