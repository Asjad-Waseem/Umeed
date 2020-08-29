import React, { Component } from 'react';
import { getPendingHealthGymInstructorsProfiles } from '../../../../../Actions/adminActions/profileapprovalActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ApproveHealthGymInstructorProfileItem from './ApproveHealthGymInstructorProfileItem';
// import Spinner from '../Common/Spinner';

class ApproveHealthGymInstructorProfiles extends Component {

    componentDidMount() {

        this.props.getPendingHealthGymInstructorsProfiles();
   
       }
   
    render() {

        console.log(this.props.profiles);

        const { profiles, loading } = this.props.profiles;

        console.log(profiles);

        let profileItems;

        if(profiles) {

          profileItems = profiles.map(profiles => (
              
            <ApproveHealthGymInstructorProfileItem key = {profiles.id} profiles = {profiles} />

          ))

        } else {

            profileItems = <h4>No Profiles Found...</h4>

        }

    return (

        <div className="landing" style = {{marginRight: '0px', marginLeft: '0px', height: '200vh'}}>

            <div className = "dark-overlay Landing-inner text-light">
    
<div className = "profiles">

    <div className = "container">

        <div className = "row">

            <div className = "col-md-12">

                <h1 className = "display-4 text-center text-light">

                Pending Health/Gym Instructor Profiles

                </h1>

                <p className = "lead text-center">

                    The following Health/Gym Instructor accounts are still pending for approval

                </p>

                {profileItems}

            </div>
        </div>
    </div>

</div>

</div>

</div>

    )

    }

}

ApproveHealthGymInstructorProfiles.propTypes = {

    getPendingHealthGymInstructorsProfiles: PropTypes.func.isRequired,
    approveprofiles: PropTypes.object.isRequired,

}

const mapStateToProps = (state) => ({

    profiles: state.approveprofiles
    
    });

export default connect(mapStateToProps, {getPendingHealthGymInstructorsProfiles})(withRouter(ApproveHealthGymInstructorProfiles));
