import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../../Common/Spinner';
import { getMotivationalVideoPostRequests } from '../../../../Actions/adminActions/approvemotivationalvideopostActions';
import MotivationalVideoPostsFeedRequest from './MotivationalVideoPostsFeedRequest';

class MotivationalVideoPostRequests extends Component {

    componentDidMount() {

        this.props.getMotivationalVideoPostRequests();

    }
  render() {

    const { motivationalvideopostrequests, loading } = this.props.post;

    console.log(motivationalvideopostrequests);

    console.log(this.props.post);

    let postContent;
    
    if(motivationalvideopostrequests === null || loading) {

        postContent = <Spinner />

    } else {

        postContent = <MotivationalVideoPostsFeedRequest motivationalvideopostrequests = {motivationalvideopostrequests} />

    }

    return (
      <div className = "feed">

          <div className = "container">

              <div className = "row">

                  <div className = "col-md-12">
                   
                   {postContent}

                  </div>

              </div>
          </div>
        
      </div>
    )
  }
}

MotivationalVideoPostRequests.propTypes = {

    getMotivationalVideoPostRequests: PropTypes.func.isRequired,    
    motivationalvideopostrequest: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

post: state.motivationalvideopostrequest

});

export default connect(mapStateToProps, { getMotivationalVideoPostRequests })(MotivationalVideoPostRequests);
