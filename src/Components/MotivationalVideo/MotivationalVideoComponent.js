import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getApprovedMotivationalVideos } from '../../Actions/motivationalvideoActions';
import { withRouter } from 'react-router-dom';
import { deleteMotivationalVideo, addMotivationalVideoLike, dislikeMotivationalVideo } from '../../Actions/motivationalvideoActions';
import { Link } from 'react-router-dom';
import MotivationalVideoCommentForm from './MotivationalVideoCommentForm';
import MotivationalVideoCommentFeed from './MotivationalVideoCommentFeed';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import MediaQuery from "react-responsive";

class MotivationalVideoComponent extends Component {

 componentDidMount() {

   this.props.getApprovedMotivationalVideos();

  }

  onDeleteClick(_id) {

    this.props.deleteMotivationalVideo(_id);
    
  }
  
  onLikeClick(_id) {

    const PatientId = this.props.auth.user._id;
    
    this.props.addMotivationalVideoLike(_id, PatientId);
  
  }
  
  onDislikeClick(_id) {

    const PatientId = this.props.auth.user._id;
  
    this.props.dislikeMotivationalVideo(_id, PatientId);
  
  }

  render() {

    console.log(this.props.video);

    const { motivationalvideos, loading } = this.props.video;

    const { auth } = this.props;
   
   // const { articleblogposts, loading } = this.props.post;

  console.log(motivationalvideos);
 //  console.log(articleblogposts);

   let video_id;
   let author_id;
   let authorImage;
   let authorName;
   let videoTitle;
   let videoURL;
   let videoLikes = [];
   let videoDislikes = [];
   let videoComments;

    console.log(motivationalvideos);
    if(motivationalvideos){
      motivationalvideos.forEach((video)=>{

    if(video._id === this.props.match.params._id){

     video_id = video._id
     author_id = video.uploadedBy._id
     authorImage = video.uploadedBy.personImage
     authorName = video.uploadedBy.name
     videoURL = video.url
     videoTitle = video.title
     videoLikes = video.likes
     videoDislikes = video.dislikes
     videoComments = video.comments

    }

   })

 }

     return (

      <div className = "post">
        <div className = "container">
          <div className = "row">
            <div className = "col-md-12">
              
              <Link to = '/UploadedVideos' className = "btn btn-light mb-3">

                Back to Motivational Videos Feed

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

        <div className="embed-responsive embed-responsive-16by9"> 

        <video width="880px" height="524px" controls>      
        <source src={videoURL} type="video/mp4"/>
        <p>Your browser does not support the video tag.</p>
        </video>

        </div>

          <h4>

          <img
          className = "rounded-circle"
          src = {require("../../Images/approved.png")} 
          alt = " "
          style = {{ width: '25px', marginRight: '5px', height: '25px', borderRadius: '50%' }} /> 
          
          {videoTitle} 
          
          </h4>

          <br></br>

          {videoLikes.includes(this.props.auth.user._id) && author_id !== this.props.auth.user._id ?

<button type = "button" className = "btn btn-light mr-1" style = {{backgroundColor: "Green"}}>

<ThumbUpIcon style = {{color: "White"}}>

</ThumbUpIcon>

<span className="badge badge-green" style = {{textAlign: 'center', color: "White"}}>{videoLikes.length}</span>

</button>

:

!videoLikes.includes(this.props.auth.user._id) && author_id !== this.props.auth.user._id ?

<button onClick = {this.onLikeClick.bind(this, video_id)} type="button" className="btn btn-light mr-1">

<ThumbUpIcon style = {{color: 'Green'}}>

</ThumbUpIcon>

<span className="badge badge-light">{videoLikes.length}</span>

</button>

:

<button type="button" className="btn btn-light mr-1">

<ThumbUpIcon style = {{color: 'Green'}}>

</ThumbUpIcon>

<span className="badge badge-light">{videoLikes.length}</span>

</button>
       
}

{videoDislikes.includes(this.props.auth.user._id) && author_id !== this.props.auth.user._id ?

<button type = "button" className = "btn btn-light mr-1" style = {{backgroundColor: "Red"}}>

<ThumbDownIcon style = {{color: "White"}}>

</ThumbDownIcon>

<span className="badge badge-red" style = {{textAlign: 'center', color: "White"}}>{videoDislikes.length}</span>

</button>

:

!videoDislikes.includes(this.props.auth.user._id) && author_id !== this.props.auth.user._id ?

<button onClick = {this.onDislikeClick.bind(this, video_id)} type="button" className="btn btn-light mr-1">
        
<ThumbDownIcon style = {{color: 'Red'}}>

</ThumbDownIcon>

<span className="badge badge-light">{videoDislikes.length}</span>

</button>

: 

<button type="button" className="btn btn-light mr-1">

<ThumbDownIcon style = {{color: 'Red'}}>

</ThumbDownIcon>

<span className="badge badge-light">{videoDislikes.length}</span>

</button>
        
}

<button type = "button" className="btn btn-success mr-1">

Comments

</button>
  
{author_id === auth.user._id ? (

<button onClick = {this.onDeleteClick.bind(this, video_id)}type="button" className="btn btn-danger mr-1">

<img
className = "rounded-circle"
src = {require("../../Images/deletebutton.png")} 
alt = " "
style = {{ width: '25px', marginRight: '0px', height: '25px', borderRadius: '50%' }} />

</button>

) : null }

          <MotivationalVideoCommentForm videoId = {video_id} />
          <MotivationalVideoCommentFeed videoId = {video_id} comments = {videoComments} />

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

MotivationalVideoComponent.propTypes = {

   getApprovedMotivationalVideos: PropTypes.func.isRequired,
   motivationalvideo: PropTypes.object.isRequired,
   auth: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

video: state.motivationalvideos,
auth: state.auth

});

export default connect(mapStateToProps, {getApprovedMotivationalVideos, deleteMotivationalVideo, addMotivationalVideoLike, dislikeMotivationalVideo})(withRouter(MotivationalVideoComponent));
