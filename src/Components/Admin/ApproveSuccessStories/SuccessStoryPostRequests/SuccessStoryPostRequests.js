import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../../Common/Spinner';
import { getSuccessStoryPostRequests } from '../../../../Actions/adminActions/approvesuccessstoriesActions';
import SuccessStoryPostsFeedRequest from './SuccessStoryPostFeedRequest';

class SuccessStoryPostRequests extends Component {

    componentDidMount() {

        this.props.getSuccessStoryPostRequests();

    }
  render() {

    const { successstoriespostrequests, loading } = this.props.post;

    console.log(successstoriespostrequests);

    console.log(this.props.post);

    let postContent;
    
    if(successstoriespostrequests === null || loading) {

        postContent = <Spinner />

    } else {

        postContent = <SuccessStoryPostsFeedRequest successstoriespostrequests = {successstoriespostrequests} />

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

SuccessStoryPostRequests.propTypes = {

    getSuccessStoryPostRequests: PropTypes.func.isRequired,    
    successstorypostrequest: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

post: state.successstoriespostrequest

});

export default connect(mapStateToProps, { getSuccessStoryPostRequests })(SuccessStoryPostRequests);
