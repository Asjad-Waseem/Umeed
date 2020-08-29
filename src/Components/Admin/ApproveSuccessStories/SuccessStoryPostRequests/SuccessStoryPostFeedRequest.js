import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import SuccessStoryPostItemRequest from './SuccessStoryPostItemRequest';

class SuccessStoryPostsFeedRequest extends Component {

    render() {

     const { successstoriespostrequests } = this.props; 

    console.log(successstoriespostrequests);

     return successstoriespostrequests.map( post => <SuccessStoryPostItemRequest key = {post._id} post = {post} /> )
   
  }
}

SuccessStoryPostsFeedRequest.propTypes = {

    successstoriespostrequests: PropTypes.array.isRequired

}

export default SuccessStoryPostsFeedRequest;
