import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MotivationalVideoCommentItem from './MotivationalVideoCommentItem';
import { connect } from 'react-redux';

class MotivationalVideoCommentFeed extends Component {

    render() {

        const { comments, videoId } = this.props;

        console.log(comments);

        let MotivationalVideoCommentItems;

      if (comments) {
          MotivationalVideoCommentItems = comments.map((comment) => (
          <MotivationalVideoCommentItem key={comment.id} comment={comment} videoId = {videoId}/>
        ));
      } else {
        MotivationalVideoCommentItems = <h4>No Motivational Videos Found...</h4>;
      }

  return (

    <div>

          {MotivationalVideoCommentItems}

          </div>
        
);

}

};

MotivationalVideoCommentFeed.propTypes = {
       
      comments: PropTypes.array.isRequired,
      videoId: PropTypes.string.isRequired

}

export default MotivationalVideoCommentFeed;
