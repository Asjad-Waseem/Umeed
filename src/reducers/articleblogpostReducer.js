import { SUBMIT_ARTICLE_BLOG_POST, 
         GET_APPROVED_ARTICLE_BLOG_POSTS,
         APPROVED_ARTICLE_BLOG_POST_LOADING, 
         DELETE_ARTICLE_BLOG_POST } from '../Actions/Types';

 const initialState = {

    articleblogposts: [],
    articleblogpost: {},
    loading: false

 };

 export default function(state = initialState, action) {

    switch(action.type) {

        case APPROVED_ARTICLE_BLOG_POST_LOADING:

        return {

            ...state,
            loading: true

        };

        case GET_APPROVED_ARTICLE_BLOG_POSTS:

        return {

            ...state,
            articleblogposts: action.payload,
            loading: false

        };

        case SUBMIT_ARTICLE_BLOG_POST:

        return {

            ...state,
            articleblogposts: [action.payload, ...state.articleblogposts]
        };

        case DELETE_ARTICLE_BLOG_POST:

        return {

            ...state,
            articleblogposts: state.articleblogposts.filter(post => post._id !== action.payload)

        }

        default:

        return state

    }
 }