import { SUBMIT_DAILY_HEALTH_EXERCISE_BLOG_POST,
         APPROVED_DAILY_HEALTH_EXERCISE_BLOG_POST_LOADING,
         GET_APPROVED_DAILY_HEALTH_EXERCISE_BLOG_POSTS,
         DELETE_DAILY_HEALTH_EXERCISE_BLOG_POST } from '../Actions/Types';

 const initialState = {

    dailyhealthexerciseposts: [],
    dailyhealthexercisepost: {},
    loading: false

 };

 export default function(state = initialState, action) {

    switch(action.type) {

        case APPROVED_DAILY_HEALTH_EXERCISE_BLOG_POST_LOADING:

        return {

            ...state,
            loading: true

        };

        case GET_APPROVED_DAILY_HEALTH_EXERCISE_BLOG_POSTS:

        return {

            ...state,
            dailyhealthexerciseposts: action.payload,
            loading: false

        };

        case SUBMIT_DAILY_HEALTH_EXERCISE_BLOG_POST:

        return {

            ...state,
            dailyhealthexerciseposts: [action.payload, ...state.dailyhealthexerciseposts]
        };

        case DELETE_DAILY_HEALTH_EXERCISE_BLOG_POST:

        return {

            ...state,
            dailyhealthexerciseposts: state.dailyhealthexerciseposts.filter(post => post._id !== action.payload)

        }

        default:

        return state

    }
 }