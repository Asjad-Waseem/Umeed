import { GET_ARTICLE_BLOG_POST_REQUESTS,
         ARTICLE_BLOG_POST_REQUESTS_LOADING,
         APPROVE_ARTICLE_BLOG_POST_REQUEST, 
         DELETE_ARTICLE_BLOG_POST_REQUEST } from '../../Actions/Types';

const initialState = {

articleblogpostrequests: [],
articleblogpostrequest: {},
loading: false

};

export default function(state = initialState, action) {

switch(action.type) {

   case ARTICLE_BLOG_POST_REQUESTS_LOADING:

   return {

       ...state,
       loading: true

   };

   case GET_ARTICLE_BLOG_POST_REQUESTS:

   return {

       ...state,
       articleblogpostrequests: action.payload,
       loading: false

   };

   case APPROVE_ARTICLE_BLOG_POST_REQUEST:

   return {

       ...state,
       articleblogpostrequests: [action.payload, ...state.articleblogpostrequests]
   };

   case DELETE_ARTICLE_BLOG_POST_REQUEST:

   return {

       ...state,
       articleblogpostrequests: state.articleblogpostrequests.filter(post => post._id !== action.payload)

   }

   default:

   return state

}
}