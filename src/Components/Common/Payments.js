import React, { Component } from 'react';
import '../../App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Payments extends Component {

render() {

    return (

        <div className="landing" style = {{marginRight: '0px', marginLeft: '0px'}}>
        <div className="dark-overlay landing-inner text-light">
            <h1 className = "text-light" style = {{textAlign: 'center'}}>Payments</h1>
            <br></br>
            <h3 className = "text-light" style = {{textAlign: 'center'}}>Total Amount Earned:  </h3>
            <h4 className = "text-light" style = {{textAlign: 'center'}}>Pkr. </h4>
            <br></br>
            <br></br>
            <h4 className = "text-light" style = {{display: 'inline', paddingLeft: '10px'}}>Pending Payments</h4>
            <h4 className = "text-light" style = {{float: 'right', display: 'inline', paddingRight: '10px'}}>Previous Payments</h4>
             
            </div>

        </div>

    );
} 

}

Payments.propTypes = {

    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({

    auth: state.auth,
    errors: state.errors
    
    });

    export default connect(mapStateToProps)(Payments);


