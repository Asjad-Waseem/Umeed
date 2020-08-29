import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import MotivationalVideoItemRequest from './MotivationalVideoItemRequest';

class MotivationalVideoPostsFeedRequest extends Component {

    render() {

     const { motivationalvideopostrequests } = this.props; 

    console.log(motivationalvideopostrequests);

     return motivationalvideopostrequests.map( post => <MotivationalVideoItemRequest key = {post._id} post = {post} /> )
   
  }
}

MotivationalVideoPostsFeedRequest.propTypes = {

    motivationalvideopostrequests: PropTypes.array.isRequired

}

export default MotivationalVideoPostsFeedRequest;
