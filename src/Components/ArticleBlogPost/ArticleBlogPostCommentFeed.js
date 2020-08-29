import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleBlogPostCommentItem from './ArticleBlogPostCommentItem';
import { connect } from 'react-redux';

class ArticleBlogPostCommentFeed extends Component {

    render() {

        const { comments, postId } = this.props;

        console.log(comments);

        let ArticleBlogPostCommentItems;

      if (comments) {
          ArticleBlogPostCommentItems = comments.map((comment) => (
          <ArticleBlogPostCommentItem key={comment.id} comment={comment} postId = {postId}/>
        ));
      } else {
        ArticleBlogPostCommentItems = <h4>No Motivational Articles/Blogs Found...</h4>;
      }
           
  return (

          <div>
   
                {ArticleBlogPostCommentItems}

                </div>
              
  );
}
}

ArticleBlogPostCommentFeed.propTypes = {
       
      comments: PropTypes.array.isRequired,
      postId: PropTypes.string.isRequired

}

export default ArticleBlogPostCommentFeed;
