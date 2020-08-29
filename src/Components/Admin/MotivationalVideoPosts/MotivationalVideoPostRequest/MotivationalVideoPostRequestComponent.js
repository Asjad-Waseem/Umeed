import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMotivationalVideoPostRequests } from '../../../../Actions/adminActions/approvemotivationalvideopostActions';
import { withRouter } from 'react-router-dom';
import { approveMotivationalVideoPostRequest } from '../../../../Actions/adminActions/approvemotivationalvideopostActions';
import { deleteMotivationalVideoPostRequest } from '../../../../Actions/adminActions/approvemotivationalvideopostActions';
import { Link } from 'react-router-dom';
import MediaQuery from "react-responsive";

class MotivationalVideoPostRequestComponent extends Component {

 componentDidMount() {

   this.props.getMotivationalVideoPostRequests();

  }

  onDeleteClick(_id) {

    this.props.deleteMotivationalVideoPostRequest(_id);
    
  }
  
  onApproveClick(_id) {

    this.props.approveMotivationalVideoPostRequest(_id);

  }
  
  render() {

    console.log(this.props.post);

    const { motivationalvideopostrequests, loading } = this.props.post;

    const { auth } = this.props;
   
  console.log(motivationalvideopostrequests);

   let post_id;
   let author_id;
   let authorImage;
   let authorName;
   let postTitle;
   let postURL;

    console.log(motivationalvideopostrequests);
    if(motivationalvideopostrequests){
      motivationalvideopostrequests.forEach((post)=>{

    if(post._id === this.props.match.params._id){

     post_id = post._id
     author_id = post.uploadedBy._id
     authorImage = post.uploadedBy.personImage
     authorName = post.uploadedBy.name
     postTitle = post.title
     postURL = post.url

    }

   })

 }

     return (

      <div className = "post">
        <div className = "container">
          <div className = "row">
            <div className = "col-md-12">
              
              <Link to = '/MotivationalVideosUploadRequests' className = "btn btn-light mb-3">

                Back to Motivational Video Upload Requests

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
      src={require("../../../Layout/Avatar.png")}
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
      src={require("../../../Layout/Avatar.png")}
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
      src={require("../../../Layout/Avatar.png")}
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
      src={require("../../../Layout/Avatar.png")}
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
      src={require("../../../Layout/Avatar.png")}
      alt="No Image"
    />
  )}
</MediaQuery>

          <p className="text-center"> {authorName} </p>

        </div>

        <div className="col-md-10">

        <div className="embed-responsive embed-responsive-16by9"> 

        <video width="880px" height="524px" controls>        
        <source src={postURL} type="video/mp4"/>
        <p>Your browser does not support the video tag.</p>
        </video>

        </div>

        <br></br>

        <h4>

       {postTitle} 

       </h4>

          <button onClick = {this.onApproveClick.bind(this, post_id)} type="button" className="btn btn-success mr-1">

          Approve

          </button>
   
          <button onClick = {this.onDeleteClick.bind(this, post_id)}type="button" className="btn btn-danger mr-1">

          <img
          className = "rounded-circle"
          src = {require("../../../../Images/deletebutton.png")} 
          alt = " "
          style = {{ width: '25px', marginRight: '0px', height: '25px', borderRadius: '50%' }} />
          
          </button>

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

MotivationalVideoPostRequestComponent.propTypes = {

   getMotivationalVideoPostRequests: PropTypes.func.isRequired,
   motivationalvideopostrequest: PropTypes.object.isRequired,
   auth: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

post: state.motivationalvideopostrequest,
auth: state.auth

});

export default connect(mapStateToProps, {getMotivationalVideoPostRequests, deleteMotivationalVideoPostRequest, approveMotivationalVideoPostRequest })(withRouter(MotivationalVideoPostRequestComponent));
