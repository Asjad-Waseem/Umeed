import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HealthGymInstructorDashboard extends Component {
    
    render() {

        return(

            <div className="landing" style = {{marginRight: '0px', marginLeft: '0px'}}>
            <div className="dark-overlay landing-inner text-light" style = {{marginTop: '0px'}}>

            <h1 className = "text-light" style = {{textAlign: 'center'}}>Hi {this.props.auth.user.gender = '0' ? "Mr." : "Ms"} {this.props.auth.user.name}</h1>
            <h2 className = "text-light" style = {{textAlign: 'center'}}>Tap on the Menu Icon on the top left to get started</h2>

           </div>
           </div>

        );

    }

}

    HealthGymInstructorDashboard.propTypes = {

        loginUser: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired,
        errors: PropTypes.object.isRequired
    
    }

    const mapStateToProps = (state) => ({

        auth: state.auth,
        errors: state.errors
        
        });

        export default connect(mapStateToProps)(HealthGymInstructorDashboard);
