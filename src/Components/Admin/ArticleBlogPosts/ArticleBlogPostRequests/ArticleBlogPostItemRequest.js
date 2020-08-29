import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { approveArticleBlogPostRequest } from '../../../../Actions/adminActions/approvearticlepostActions';
import { deleteArticleBlogPostRequest } from '../../../../Actions/adminActions/approvearticlepostActions';
import MediaQuery from "react-responsive";

class ArticleBlogPostItemRequest extends Component {

  onDeleteClick(_id) {

  this.props.deleteArticleBlogPostRequest(_id);
  
}

onApproveClick(_id) {

    this.props.approveArticleBlogPostRequest(_id);

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
                <div className="col-md-2">

                <MediaQuery maxDeviceWidth={600}>
  {post.uploadedBy.personImage ? (
    <img
      className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
      src={post.uploadedBy.personImage}
      alt="No Image"
      style={{ borderRadius: "50%", height: "32px", width: "32px" }}
    />
  ) : (
    <img
      className="rounded-circle"
      src={require("../../../Layout/Avatar.png")}
      alt="No Image"
    />
  )}
</MediaQuery>

<MediaQuery minDeviceWidth={601} maxDeviceWidth={768}>
  {post.uploadedBy.personImage ? (
    <img
      className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
      src={post.uploadedBy.personImage}
      alt="No Image"
      style={{ borderRadius: "50%", height: "50px", width: "50px" }}
    />
  ) : (
    <img
      className="rounded-circle"
      src={require("../../../Layout/Avatar.png")}
      alt="No Image"
    />
  )}
</MediaQuery>

<MediaQuery minDeviceWidth={769} maxDeviceWidth={900}>
  {post.uploadedBy.personImage ? (
    <img
      className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
      src={post.uploadedBy.personImage}
      alt="No Image"
      style={{ borderRadius: "50%", height: "75px", width: "75px" }}
    />
  ) : (
    <img
      className="rounded-circle"
      src={require("../../../Layout/Avatar.png")}
      alt="No Image"
    />
  )}
</MediaQuery>

<MediaQuery minDeviceWidth={900} maxDeviceWidth={1024}>
  {post.uploadedBy.personImage ? (
    <img
      className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
      src={post.uploadedBy.personImage}
      alt="No Image"
      style={{
        borderRadius: "50%",
        height: "100px",
        width: "100px",
      }}
    />
  ) : (
    <img
      className="rounded-circle"
      src={require("../../../Layout/Avatar.png")}
      alt="No Image"
    />
  )}
</MediaQuery>

<MediaQuery minDeviceWidth={1025}>
  {post.uploadedBy.personImage ? (
    <img
      className="img-responsive"
      src={post.uploadedBy.personImage}
      alt="No Image"
      style={{
        borderRadius: "50%",
        height: "150px",
        width: "150px",
      }}
    />
  ) : (
    <img
      className="rounded-circle"
      src={require("../../../Layout/Avatar.png")}
      alt="No Image"
    />
  )}
</MediaQuery>

                  <p className="text-center"> {post.uploadedBy.name} </p>

                </div>

                <div className="col-md-10">

                  <h4>

                  {post.title} 
                  
                  </h4>

                  <p className="lead"> {post.content.substring(0, 305)}...</p>

                  <Link to = {`/ArticleBlogPostRequests/${post._id}`}>View Full Post</Link> 

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

ArticleBlogPostItemRequest.propTypes = {

    approveArticleBlogPostRequest: PropTypes.func.isRequired,
    deleteArticleBlogPostRequest: PropTypes.func.isRequired,
    articleblogpostrequest: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

auth: state.auth

});

export default connect(mapStateToProps, { approveArticleBlogPostRequest, deleteArticleBlogPostRequest })(ArticleBlogPostItemRequest);
