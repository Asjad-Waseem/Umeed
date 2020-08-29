import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { approveMotivationalVideoPostRequest } from '../../../../Actions/adminActions/approvemotivationalvideopostActions';
import { deleteMotivationalVideoPostRequest } from '../../../../Actions/adminActions/approvemotivationalvideopostActions';
import MediaQuery from "react-responsive";

class MotivationalVideoItemRequest extends Component {

  onDeleteClick(_id) {

  this.props.deleteMotivationalVideoPostRequest(_id);
  
}

onApproveClick(_id) {

    this.props.approveMotivationalVideoPostRequest(_id);

}

    render() {

      const { post, auth } = this.props;

    return (

      <div className="card-group" style = {{display: 'inline-block', marginRight: '10px', width: '320px', textAlign: 'center', marginBottom: '10px'}}>

        <div className="embed-responsive embed-responsive-16by9"> 

        <video width="320" height="240" controls>
        <p>saad</p>
        
        <source src={post.url} type="video/mp4"/>
        <p>Your browser does not support the video tag.</p>
        </video>

        <br></br>

        </div>
        
        <br></br>
  
        <h6>
  
        <MediaQuery maxDeviceWidth={600}>
  {post.uploadedBy.personImage ? (
    <img
      className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
      src={post.uploadedBy.personImage}
      alt="No Image"
      style={{ borderRadius: "50%", height: "30px", width: "30px" }}
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
      style={{ borderRadius: "50%", height: "35px", width: "35px" }}
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
      style={{ borderRadius: "50%", height: "40px", width: "40px" }}
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
        height: "45px",
        width: "45px",
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
        height: "50px",
        width: "50px",
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
  
        <Link to = {`/MotivationalVideosUploadRequests/${post._id}`}
        className = "ml-2"
        style = {{color: 'Green'}}>
  
        {post.title} 
  
        </Link> 
  
        </h6>

        <button onClick = {this.onApproveClick.bind(this, post._id)} type="button" className="btn btn-success mr-1">

        Approve

       </button>

       <button onClick = {this.onDeleteClick.bind(this, post._id)}type="button" className="btn btn-danger mr-1">
  
       <img
       className = "rounded-circle"
       src = {require("../../../../Images/deletebutton.png")} 
       alt = " "
       style = {{ width: '25px', marginRight: '0px', height: '25px', borderRadius: '50%' }} />
          
       </button> 

        </div>

    )
  }
}

MotivationalVideoItemRequest.propTypes = {

    approveMotivationalVideoPostRequest: PropTypes.func.isRequired,
    deleteMotivationalVideoPostRequest: PropTypes.func.isRequired,
    motivationalvideopostrequest: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

auth: state.auth

});

export default connect(mapStateToProps, { approveMotivationalVideoPostRequest, deleteMotivationalVideoPostRequest })(MotivationalVideoItemRequest);
