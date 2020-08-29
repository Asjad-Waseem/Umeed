import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteMotivationalVideoComment } from '../../Actions/motivationalvideoActions';

class MotivationalVideoCommentItem extends Component {

    onDeleteClick(videoId, commentId) {

    this.props.deleteMotivationalVideoComment(videoId, commentId);

    }

    render() {

        const { comment, videoId, auth } = this.props;

        console.log(comment);

    return (
      <div className="card card-body mb-3" style = {{maxHeight: '7rem'}}>
      <div className="row">
        <div className="col-md-1">

            <img className="rounded-circle d-none d-md-block" src={comment.postedBy.personImage} alt=""  style = {{height: '45px', width: '45px'}}/>

          <p className ="text-center" style = {{fontSize: '10px'}}>{comment.postedBy.name.slice(0, comment.postedBy.name.indexOf(' '))}</p>
          
        </div>
        <div className="col-md-10">

          <p className="lead">

              {comment.comment}

              {comment.postedBy._id === this.props.auth.user._id ?

<button className = "btn btn-danger ml-1" onClick = {this.onDeleteClick.bind(this, videoId, comment._id)}>Delete Comment</button>

: null}

          </p>
         
        </div>
      </div>
    </div>

    )
  }
}
       
MotivationalVideoCommentItem.propTypes = {

    deleteMotivationalVideoComment: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    videoId: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired

} 

const mapStateToProps = state => ({

    auth: state.auth

});

export default connect(mapStateToProps, {deleteMotivationalVideoComment})(MotivationalVideoCommentItem);
