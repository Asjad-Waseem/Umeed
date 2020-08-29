import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { deleteArticleBlogPost, addArticleBlogPostLike, dislikeArticleBlogPost } from '../../Actions/articleblogpostActions';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import MediaQuery from "react-responsive";

class ArticleBlogPostItem extends Component {

  onDeleteClick(_id) {

  this.props.deleteArticleBlogPost(_id);
  
}

onLikeClick(_id) {

  const patientId = this.props.auth.user._id;

  this.props.addArticleBlogPostLike(_id, patientId);

}

onDislikeClick(_id) {

  const patientId = this.props.auth.user._id;

  this.props.dislikeArticleBlogPost(_id, patientId);

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
      src={require("../Layout/Avatar.png")}
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
      src={require("../Layout/Avatar.png")}
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
      src={require("../Layout/Avatar.png")}
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
      src={require("../Layout/Avatar.png")}
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
      src={require("../Layout/Avatar.png")}
      alt="No Image"
    />
  )}
</MediaQuery>
            
                  <p className="text-center"> {post.uploadedBy.name} </p>

                </div>

                <div className="col-md-10">

                  <h4>

                  <img
                  className = "rounded-circle"
                  src = {require("../../Images/approved.png")} 
                  alt = " "
                  style = {{ width: '25px', marginRight: '5px', height: '25px', borderRadius: '50%' }} /> 
                  
                  {post.title} 
                  
                  </h4>

                  <p className="lead"> {post.content.substring(0, 305)}...</p>

                  <Link to = {`/ArticleBlogPost/${post._id}`} style = {{marginRight: '5px'}}>View Full Post</Link> 

                  {post.likes.includes(this.props.auth.user._id) && post.uploadedBy._id !== this.props.auth.user._id ?

                  <button type = "button" className = "btn btn-light mr-1" style = {{backgroundColor: "Green"}}>

                  <ThumbUpIcon style = {{color: "White"}}>

                  </ThumbUpIcon>

                  <span className="badge badge-green" style = {{textAlign: 'center', color: "White"}}>{post.likes.length}</span>

                  </button>

                  :

                  !post.likes.includes(this.props.auth.user._id) && post.uploadedBy._id !== this.props.auth.user._id ?

                  <button onClick = {this.onLikeClick.bind(this, post._id)} type="button" className="btn btn-light mr-1">

                  <ThumbUpIcon style = {{color: 'Green'}}>

                  </ThumbUpIcon>

                  <span className="badge badge-light">{post.likes.length}</span>

                  </button>

                  :

                  <button type="button" className="btn btn-light mr-1">

                  <ThumbUpIcon style = {{color: 'Green'}}>

                  </ThumbUpIcon>

                  <span className="badge badge-light">{post.likes.length}</span>

                  </button>
                 
                  }

                  {post.dislikes.includes(this.props.auth.user._id) && post.uploadedBy._id !== this.props.auth.user._id ?

                  <button type = "button" className = "btn btn-light mr-1" style = {{backgroundColor: "Red"}}>

                  <ThumbDownIcon style = {{color: "White"}}>

                  </ThumbDownIcon>

                  <span className="badge badge-red" style = {{textAlign: 'center', color: "White"}}>{post.dislikes.length}</span>

                  </button>

                  :

                  !post.dislikes.includes(this.props.auth.user._id) && post.uploadedBy._id !== this.props.auth.user._id ?

                  <button onClick = {this.onDislikeClick.bind(this, post._id)} type="button" className="btn btn-light mr-1">
                  
                  <ThumbDownIcon style = {{color: 'Red'}}>

                  </ThumbDownIcon>

                  <span className="badge badge-light">{post.dislikes.length}</span>

                  </button>

                  : 

                  <button type="button" className="btn btn-light mr-1">

                  <ThumbDownIcon style = {{color: 'Red'}}>

                  </ThumbDownIcon>

                  <span className="badge badge-light">{post.dislikes.length}</span>

                  </button>
                  
                  }

                  <Link to = {`/ArticleBlogPost/${post._id}`} className="btn btn-success mr-1">

                    Comments
                    
                  </Link>

                  {post.uploadedBy._id === auth.user._id ? (
           
                  <button onClick = {this.onDeleteClick.bind(this, post._id)}type="button" className="btn btn-danger mr-1">

                  <img
                  className = "rounded-circle"
                  src = {require("../../Images/deletebutton.png")} 
                  alt = " "
                  style = {{ width: '25px', marginRight: '0px', height: '25px', borderRadius: '50%' }} />
                  
                  </button>

                  ) : null }

                </div>
              </div>
            </div>

    )
  }
}

ArticleBlogPostItem.propTypes = {

    addArticleBlogPostLike: PropTypes.func.isRequired,
    dislikeArticleBlogPost: PropTypes.func.isRequired,
    deleteArticleBlogPost: PropTypes.func.isRequired,
    articleblogpost: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

auth: state.auth

});

export default connect(mapStateToProps, { deleteArticleBlogPost, addArticleBlogPostLike, dislikeArticleBlogPost })(ArticleBlogPostItem);
