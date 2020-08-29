import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { approveProfile, deleteProfileApprovalRequest } from '../../../../../Actions/adminActions/profileapprovalActions';
import { withRouter } from 'react-router-dom';

class ApproveMotivationalWriterProfileItem extends Component {

    onDeleteClick(_id) {

        // console.log(_id)

        this.props.deleteProfileApprovalRequest(_id);
        
      }
      
      onApproveClick(_id) {

       // console.log(_id)
    
        this.props.approveProfile(_id);
    
      }

  render() {

    const { profiles } = this.props;

    console.log(profiles);

    return (

      <div className = "card card-body bg-light mb-3">

          <div className = "row">

              <div className = "col-2">

              {profiles.personImage ? 
              <img
              className = "rounded-circle"
              src = {profiles.personImage} 
              alt = "No Image" />
          
              :
              <img
              className = "rounded-circle"
              src = {require("../../../../Layout/Avatar.png")} 
              alt = "No Image" />

              }

              </div>

            <div className = "col-lg-6 col-md-4 col-8">

                <h3>{profiles.name}</h3>
                <h5>{profiles.gender = '0' ? "Male" : "Female"}</h5>

                {this.props.auth.user.userRole === 'admin' ? 

                <p className = "text-dark">Email: {profiles.email}</p>

                : null}

                <Link to = {`/PendingMotivationalWriterProfile/${profiles._id}`}  className = "btn btn-success mr-1">
                View Profile

                </Link> 

                <button onClick = {this.onApproveClick.bind(this, profiles._id)} type="button" className="btn btn-success mr-1"
          
                style = {{borderColor: 'White'}}>

                Approve

               </button>

               <button onClick = {this.onDeleteClick.bind(this, profiles._id)}type="button" className="btn btn-danger mr-1">

               <img
               className = "rounded-circle"
               src = {require("../../../../../Images/deletebutton.png")} 
               alt = " "
               style = {{ width: '25px', marginRight: '0px', height: '25px', borderRadius: '50%' }} />

               </button>

            </div>

          </div>
        
      </div>

    )
  }
}

ApproveMotivationalWriterProfileItem.propTypes = {

approveprofiles: PropTypes.object.isRequired,
auth: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({

  auth: state.auth,
  errors: state.errors
  
  });

  export default connect(mapStateToProps, { approveProfile, deleteProfileApprovalRequest})(withRouter(ApproveMotivationalWriterProfileItem));
