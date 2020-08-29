import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DailyHealthExerciseCommentItem from './DailyHealthExerciseCommentItem';
import { connect } from 'react-redux';

class DailyHealthExercisePostCommentFeed extends Component {

    render() {

        const { comments, postId } = this.props;
       
        console.log(comments);

        let DailyHealthExercisePostCommentItems;

      if (comments) {
          DailyHealthExercisePostCommentItems = comments.map((comment) => (
          <DailyHealthExerciseCommentItem key={comment.id} comment={comment} postId = {postId}/>
        ));
      } else {
        DailyHealthExercisePostCommentItems = <h4>No Daily Health Exercises Found...</h4>;
      }
           
  return (

          <div>
   
                {DailyHealthExercisePostCommentItems}

                </div>
              
  );
}
}

DailyHealthExercisePostCommentFeed.propTypes = {
       
      comments: PropTypes.array.isRequired,
      postId: PropTypes.string.isRequired

}

export default DailyHealthExercisePostCommentFeed;
