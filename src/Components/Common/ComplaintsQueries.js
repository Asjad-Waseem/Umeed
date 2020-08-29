import React, { Component } from 'react';
import '../../App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { registerComplaintQuery } from '../../Actions/complaintqueryActions';
import { withRouter } from 'react-router-dom';

const initialState = {

    ComplaintQuery: '',
    ComplaintQueryError: ''

}

class ComplaintsQueries extends Component {

    constructor(){

        super();

      this.state = initialState;

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    // componentDidMount() {

       // if(!isEmpty(this.props.auth.user)) {
    
         //   this.props.history.push('/Dashboard');
    
        // }
    // }

     UNSAFE_componentWillReceiveProps(nextProps) {

        if(nextProps.errors) {
    
        //   this.setState({errors: nextProps.errors});
    
        }
    
        }
    
        onChange(e){
    
            this.setState({[e.target.name]: e.target.value});
        
        }

        validate = () => {

            let ComplaintQueryError= '';
            
                  if (!this.state.ComplaintQuery) {
                    ComplaintQueryError = 'Please write something to submit your Complaint or Query';
                  }

                  else if (this.state.ComplaintQuery.length>250){

                    ComplaintQueryError = "Your Complaint or Query should be within 250 characters";

                  }
    
                  if ( ComplaintQueryError) {
    
                    this.setState({ ComplaintQueryError});
        
                    return false;
        
                  }
                  
              return true;
    
        }

        onSubmit(e){

            e.preventDefault();
    
            const isValid = this.validate();

            const _id = this.props.auth.user._id;
    
            const newComplaintQuery = {
    
              complaint : this.state.ComplaintQuery,
              submittedBy: this.props.auth.user.name
    
            };
    
            if(isValid){
    
                // clear form
        
                this.setState({ComplaintQuery: ''});    
                this.props.registerComplaintQuery(newComplaintQuery, _id);
                
                }
    
            }

render() {

    return (

        <div className="landing" style = {{marginRight: '0px', marginLeft: '0px'}}>
        <div className="dark-overlay landing-inner text-light">

            <h1 className = "text-light" style = {{textAlign: 'center'}}>Complaints & Queries</h1>
            <h4 className = "text-light" style = {{textAlign: 'center'}}>Submit a new Complaint or Query</h4>
            <form noValidate onSubmit = {this.onSubmit} className="col-md-8 m-auto" style = {{backgroundColor: "White"}}> 
            <div className="form-group">
                <br></br>
                    <input type="ComplaintQuery"
                     className={classnames('form-control form-control-sm', {

                        'is-invalid': this.state.ComplaintQueryError

                       
                    })}     
                    style = {{height: '90px'}}                 
                     placeholder="Write your Complaint or Query here. It should be no more than 250 characters at max."
                     name="ComplaintQuery"
                     value={this.state.ComplaintQuery}
                     onChange={this.onChange}
                     />

                    <div style={{color: "Red"}}>{this.state.ComplaintQueryError}</div>

                    </div>
                    <input style = {{textAlign: 'center'}} type="submit" className="btn btn-success mt-4"/>

           </form>

           <br></br>
          

           <div style = {{textAlign: 'center'}}>

               <h4 className = "text-light">Previous Complaint or Query Responses</h4>
               
           </div>
            </div>

        </div>

    );
} 

}

ComplaintsQueries.propTypes = {

    registerComplaintQuery: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({

    auth: state.auth,
    errors: state.errors
    
    });

 export default connect(mapStateToProps, {registerComplaintQuery})(withRouter(ComplaintsQueries));

