import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { approveSuccessStoryPostRequest } from '../../../../Actions/adminActions/approvesuccessstoriesActions';
import { deleteSuccessStoryPostRequest } from '../../../../Actions/adminActions/approvesuccessstoriesActions';
import MediaQuery from "react-responsive";

class SuccessStoryPostItemRequest extends Component {

  onDeleteClick(_id) {

  this.props.deleteSuccessStoryPostRequest(_id);
  
}

onApproveClick(_id) {

    this.props.approveSuccessStoryPostRequest(_id);

}

// findUserLike(likes) {

// const { auth } = this.props;

// if(likes.filter(like => like.user === auth.user.id ).length > 0) {

//   return true;

// } else {

//   return false;

// }
// }

    render() {

      const { post, auth } = this.props;

    return (

        <div className="card card-body mb-3">
        <div className="row">
          
          <div className="col-md-10">

            <h4>

            {post.successStory}
            
            </h4>

            <p className="lead"> Date: {post.successStoryDate}</p>
            <p className="lead"> Timing: {post.successStoryTiming}</p>

            <button onClick = {this.onApproveClick.bind(this, post._id)} type="button" className="btn btn-success ml-1">

            Approve

            </button>
     
            <button onClick = {this.onDeleteClick.bind(this, post._id)}type="button" className="btn btn-danger ml-1">

            <img
            className = "rounded-circle"
            src = {require("../../../../Images/deletebutton.png")} 
            alt = " "
            style = {{ width: '25px', marginRight: '0px', height: '25px', borderRadius: '50%' }} />
            
            </button>

          </div>
        </div>
      </div>

    )
  }
}

SuccessStoryPostItemRequest.propTypes = {

    approveSuccessStoryPostRequest: PropTypes.func.isRequired,
    deleteSuccessStoryPostRequest: PropTypes.func.isRequired,
    successstoriespostrequest: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

auth: state.auth

});

export default connect(mapStateToProps, { approveSuccessStoryPostRequest, deleteSuccessStoryPostRequest })(SuccessStoryPostItemRequest);
