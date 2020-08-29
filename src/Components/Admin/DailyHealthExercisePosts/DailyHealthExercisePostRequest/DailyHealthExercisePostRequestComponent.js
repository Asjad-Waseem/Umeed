import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDailyHealthExercisePostRequests } from '../../../../Actions/adminActions/approvedailyhealthexercisepostActions';
import { withRouter } from 'react-router-dom';
import { approveDailyHealthExercisePostRequest } from '../../../../Actions/adminActions/approvedailyhealthexercisepostActions';
import { deleteDailyHealthExercisePostRequest } from '../../../../Actions/adminActions/approvedailyhealthexercisepostActions';
import { Link } from 'react-router-dom';
import MediaQuery from "react-responsive";

class DailyHealthExercisePostRequestComponent extends Component {

 componentDidMount() {

   this.props.getDailyHealthExercisePostRequests();

  }

  onDeleteClick(_id) {

    this.props.deleteDailyHealthExercisePostRequest(_id);
    
  }
  
  onApproveClick(_id) {

    this.props.approveDailyHealthExercisePostRequest(_id);

  }
  
  render() {

    console.log(this.props.post);

    const { dailyhealthexercisepostrequests, loading } = this.props.post;

    const { auth } = this.props;
   
  console.log(dailyhealthexercisepostrequests);

   let post_id;
   let author_id;
   let authorImage;
   let authorName;
   let postTitle;
   let postContent;
  
    console.log(dailyhealthexercisepostrequests);
    if(dailyhealthexercisepostrequests){
      dailyhealthexercisepostrequests.forEach((post)=>{

    if(post._id === this.props.match.params._id){

     post_id = post._id
     author_id = post.uploadedBy._id
     authorImage = post.uploadedBy.personImage
     authorName = post.uploadedBy.name
     postTitle = post.title
     postContent = post.content

    }

   })

 }

     return (

      <div className = "post">
        <div className = "container">
          <div className = "row">
            <div className = "col-md-12">
              
              <Link to = '/DailyHealthExercisePostRequests' className = "btn btn-light mb-3">

                Back to Blog Post Requests

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

          <h4>
          
          {postTitle} 
          
          </h4>

          <p className="lead"> {postContent} </p>

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

DailyHealthExercisePostRequestComponent.propTypes = {

   getDailyHealthExercisePostRequests: PropTypes.func.isRequired,
   dailyhealthexercisepostrequest: PropTypes.object.isRequired,
   auth: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

post: state.dailyhealthexercisepostrequest,
auth: state.auth

});

export default connect(mapStateToProps, {getDailyHealthExercisePostRequests, deleteDailyHealthExercisePostRequest, approveDailyHealthExercisePostRequest })(withRouter(DailyHealthExercisePostRequestComponent));
