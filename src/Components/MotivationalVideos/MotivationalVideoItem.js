import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deleteMotivationalVideo } from '../../Actions/motivationalvideoActions';
import MediaQuery from "react-responsive";

class MotivationalVideoItem extends Component {

  onDeleteClick(_id) {

  this.props.deleteMotivationalVideo(_id);
  
}

    render() {

      const { video, auth } = this.props;

      return (
 
        <div className="card-group" style = {{display: 'inline-block', marginRight: '10px', width: '320px', textAlign: 'center', marginBottom: '10px'}}>

        <div className="embed-responsive embed-responsive-16by9"> 

        <video width="320" height="240" controls>
             
             <source src={video.url} type="video/mp4"/>
             <p>Your browser does not support the video tag.</p>
             </video>

             <br></br>

             </div>

             <br></br>
       
             <h6>
       
             <MediaQuery maxDeviceWidth={600}>
  {video.uploadedBy.personImage ? (
    <img
      className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
      src={video.uploadedBy.personImage}
      alt="No Image"
      style={{ borderRadius: "50%", height: "30px", width: "30px" }}
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
  {video.uploadedBy.personImage ? (
    <img
      className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
      src={video.uploadedBy.personImage}
      alt="No Image"
      style={{ borderRadius: "50%", height: "35px", width: "35px" }}
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
  {video.uploadedBy.personImage ? (
    <img
      className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
      src={video.uploadedBy.personImage}
      alt="No Image"
      style={{ borderRadius: "50%", height: "40px", width: "40px" }}
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
  {video.uploadedBy.personImage ? (
    <img
      className="img-responsive img-rounded embed-responsive embed-responsive-16by9"
      src={video.uploadedBy.personImage}
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
      src={require("../Layout/Avatar.png")}
      alt="No Image"
    />
  )}
</MediaQuery>

<MediaQuery minDeviceWidth={1025}>
  {video.uploadedBy.personImage ? (
    <img
      className="img-responsive"
      src={video.uploadedBy.personImage}
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
      src={require("../Layout/Avatar.png")}
      alt="No Image"
    />
  )}
</MediaQuery>
       
             <Link to = {`/MotivationalVideo/${video._id}`}
             className = "ml-2"
             style = {{color: 'Green', textAlign: 'center'}}>
       
             {video.title} 
       
             </Link> 
       
             </h6>
       
             </div>

    )
  }
}

MotivationalVideoItem.propTypes = {

    deleteArticleBlogPost: PropTypes.func.isRequired,
    motivationalvideos: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

auth: state.auth

});

export default connect(mapStateToProps, { deleteMotivationalVideo })(MotivationalVideoItem);
