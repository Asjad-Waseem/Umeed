import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApprovedArticleBlogPosts } from '../../Actions/articleblogpostActions';
import { withRouter } from 'react-router-dom';
import { deleteArticleBlogPost, addArticleBlogPostLike, dislikeArticleBlogPost } from '../../Actions/articleblogpostActions';
import { Link } from 'react-router-dom';
import ArticleBlogPostCommentForm from './ArticleBlogPostCommentForm';
import ArticleBlogPostCommentFeed from './ArticleBlogPostCommentFeed';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import MediaQuery from "react-responsive";

class ArticleBlogPostComponent extends Component {

 componentDidMount() {

   this.props.getApprovedArticleBlogPosts();

  }

  onDeleteClick(_id) {

    this.props.deleteArticleBlogPost(_id);
    
  }
  
  onLikeClick(_id) {

    const PatientId = this.props.auth.user._id;
  
    this.props.addArticleBlogPostLike(_id, PatientId);
  
  }
  
  onDislikeClick(_id) {

    const PatientId = this.props.auth.user._id;
  
    this.props.dislikeArticleBlogPost(_id, PatientId);
  
  }

  render() {

    console.log(this.props.post);

    const { articleblogposts, loading } = this.props.post;

    const { auth } = this.props;
   
   // const { articleblogposts, loading } = this.props.post;

  console.log(articleblogposts);
 //  console.log(articleblogposts);

   let post_id;
   let author_id;
   let authorImage;
   let authorName;
   let postTitle;
   let postContent;
   let postLikes = [];
   let postDislikes = [];
   let postComments;

    console.log(articleblogposts);
    if(articleblogposts){
      articleblogposts.forEach((post)=>{

    if(post._id === this.props.match.params._id){

     post_id = post._id
     author_id = post.uploadedBy._id
     authorImage = post.uploadedBy.personImage
     authorName = post.uploadedBy.name
     postTitle = post.title
     postContent = post.content
     postLikes = post.likes
     postDislikes = post.dislikes
     postComments = post.comments

    }

   })

 }

     return (

      <div className = "post">
        <div className = "container">
          <div className = "row">
            <div className = "col-md-12">
              
              <Link to = '/UploadedArticlesBlogs' className = "btn btn-light mb-3">

                Back to Blog Posts Feed

              </Link>

      <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-2">
        <MediaQuery maxDeviceWidth={600}>
  {authorImage ? (
    <img
      className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
      src={authorImage}
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
  {authorImage ? (
    <img
      className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
      src={authorImage}
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
  {authorImage ? (
    <img
      className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
      src={authorImage}
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
  {authorImage ? (
    <img
      className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
      src={authorImage}
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
  {authorImage ? (
    <img
      className="img-responsive"
      src={authorImage}
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

          <p className="text-center"> {authorName} </p>

        </div>

        <div className="col-md-10">

          <h4>

          <img
          className = "rounded-circle"
          src = {require("../../Images/approved.png")} 
          alt = " "
          style = {{ width: '25px', marginRight: '5px', height: '25px', borderRadius: '50%' }} /> 
          
          {postTitle} 
          
          </h4>

          <p className="lead" style={{whiteSpace: 'pre-line'}}> {postContent} </p>

          {postLikes.includes(this.props.auth.user._id) && author_id !== this.props.auth.user._id ?

          <button type = "button" className = "btn btn-light mr-1" style = {{backgroundColor: "Green"}}>

          <ThumbUpIcon style = {{color: "White"}}>

          </ThumbUpIcon>

          <span className="badge badge-green" style = {{textAlign: 'center', color: "White"}}>{postLikes.length}</span>

          </button>

          :

          !postLikes.includes(this.props.auth.user._id) && author_id !== this.props.auth.user._id ?

          <button onClick = {this.onLikeClick.bind(this, post_id)} type="button" className="btn btn-light mr-1">

          <ThumbUpIcon style = {{color: 'Green'}}>

          </ThumbUpIcon>

          <span className="badge badge-light">{postLikes.length}</span>

          </button>

          :

          <button type="button" className="btn btn-light mr-1">

          <ThumbUpIcon style = {{color: 'Green'}}>

          </ThumbUpIcon>

          <span className="badge badge-light">{postLikes.length}</span>

          </button>
                 
          }

          {postDislikes.includes(this.props.auth.user._id) && author_id !== this.props.auth.user._id ?

          <button type = "button" className = "btn btn-light mr-1" style = {{backgroundColor: "Red"}}>

          <ThumbDownIcon style = {{color: "White"}}>

          </ThumbDownIcon>

          <span className="badge badge-red" style = {{textAlign: 'center', color: "White"}}>{postDislikes.length}</span>

          </button>

          :

          !postDislikes.includes(this.props.auth.user._id) && author_id !== this.props.auth.user._id ?

          <button onClick = {this.onDislikeClick.bind(this, post_id)} type="button" className="btn btn-light mr-1">
                  
          <ThumbDownIcon style = {{color: 'Red'}}>

          </ThumbDownIcon>

          <span className="badge badge-light">{postDislikes.length}</span>

          </button>

          : 

          <button type="button" className="btn btn-light mr-1">

          <ThumbDownIcon style = {{color: 'Red'}}>

          </ThumbDownIcon>

          <span className="badge badge-light">{postDislikes.length}</span>

          </button>
                  
          }
          
          <button type = "button" className="btn btn-success mr-1">

          Comments

          </button>
            
          {author_id === auth.user._id ? (
   
          <button onClick = {this.onDeleteClick.bind(this, post_id)}type="button" className="btn btn-danger mr-1">

          <img
          className = "rounded-circle"
          src = {require("../../Images/deletebutton.png")} 
          alt = " "
          style = {{ width: '25px', marginRight: '0px', height: '25px', borderRadius: '50%' }} />
          
          </button>

          ) : null }

          <ArticleBlogPostCommentForm postId = {post_id} />
          <ArticleBlogPostCommentFeed postId = {post_id} comments = {postComments} />

        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  
     )

    }
   }

ArticleBlogPostComponent.propTypes = {

   getApprovedArticleBlogPosts: PropTypes.func.isRequired,
   articleblogpost: PropTypes.object.isRequired,
   auth: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

post: state.articleblogpost,
auth: state.auth

});

export default connect(mapStateToProps, {getApprovedArticleBlogPosts, deleteArticleBlogPost, addArticleBlogPostLike, dislikeArticleBlogPost })(withRouter(ArticleBlogPostComponent));
