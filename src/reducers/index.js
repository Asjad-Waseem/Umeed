import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import patientprofilesReducer from './patientprofilesReducer';
import registeredPsychologistsReducer from './registeredPsychologistsReducer';
import psychologistprofilesReducer from './psychologistprofilesReducer';
import motivationalspeakerprofilesReducer from './motivationalspeakerprofilesReducer';
import motivationalwriterprofilesReducer from './motivationalwriterprofilesReducer';
import healthgyminstructorprofilesReducer from './healthgyminstructorprofilesReducer';
import articleblogpostReducer from './articleblogpostReducer';
import dailyhealthexercisespostReducer from './dailyhealthexercisespostReducer';
import complaintqueryReducer from './complaintqueryReducer';
import articleblogpostrequestsReducer from '../reducers/adminReducers/articleblogpostrequestsReducer';
import dailyhealthexercisepostrequestsReducer from '../reducers/adminReducers/dailyhealthexercisepostrequestsReducer';
import motivationalvideoReducer from '../reducers/motivatioanlvideoReducer';
import motivationalvideopostReducer from '../reducers/adminReducers/motivationalvideopostrequestsReducer';
import motivationalvideopostrequestsReducer from '../reducers/adminReducers/motivationalvideopostrequestsReducer';
import approveprofilesReducer from '../reducers/adminReducers/approveprofilesReducer';
import paymentReducers from './paymentReducers';
import approvepatientpaymentReducer from './adminReducers/approvepatientpaymentsReducer';
import progressReportReducer from './progressReportReducer';
import successStoriesReducer from './successStoriesReducer';
import sessionReducer from './sessionReducer';
import psychologistfeedbackReducer from './psychologistfeedbackReducer';
import approvesuccessstoriesReducer from './adminReducers/approvesuccessstoriesReducer';
import topratedReducer from './topratedReducer';

const persistConfig = {

    key: 'root',
    storage,
    whitelist: ['auth', 'payment']

}

const rootReducer = combineReducers ({

    auth: authReducer,
    errors: errorReducer,
    users: userReducer,
    patientprofiles: patientprofilesReducer,
    psychologistprofiles: psychologistprofilesReducer,
    motivationalspeakerprofiles: motivationalspeakerprofilesReducer,
    motivationalwriterprofiles: motivationalwriterprofilesReducer,
    healthgyminstructorprofiles: healthgyminstructorprofilesReducer,
    articleblogpost: articleblogpostReducer,
    articleblogpostrequest: articleblogpostrequestsReducer, 
    dailyhealthexercisepost: dailyhealthexercisespostReducer,
    complaintquery: complaintqueryReducer,
    dailyhealthexercisepostrequest: dailyhealthexercisepostrequestsReducer,
    motivationalvideos: motivationalvideoReducer,
    motivationalvideopostrequest: motivationalvideopostrequestsReducer,
    approveprofiles: approveprofilesReducer,
    payment: paymentReducers,
    paymentrequest: approvepatientpaymentReducer,
    progressReport: progressReportReducer,
    registeredPsychologists: registeredPsychologistsReducer,
    successStory: successStoriesReducer,
    session: sessionReducer,
    psychologistfeedback: psychologistfeedbackReducer,
    successstoriespostrequest: approvesuccessstoriesReducer,
    toprated: topratedReducer  

});

export default persistReducer(persistConfig, rootReducer);

// export default combineReducers({

   // auth: authReducer,
   // errors: errorReducer,
   // users: userReducer

// });