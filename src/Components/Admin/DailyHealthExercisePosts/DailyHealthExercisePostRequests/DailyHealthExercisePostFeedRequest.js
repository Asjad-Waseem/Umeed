import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import DailyHealthExercisePostItemRequest from './DailyHealthExercisePostItemRequest';

class DailyHealthExercisePostFeedRequest extends Component {

    render() {

     const { dailyhealthexercisepostrequests } = this.props; 

    console.log(dailyhealthexercisepostrequests);

     return dailyhealthexercisepostrequests.map( post => <DailyHealthExercisePostItemRequest key = {post._id} post = {post} /> )
   
  }
}

DailyHealthExercisePostFeedRequest.propTypes = {

    dailyhealthexercisepostrequests: PropTypes.array.isRequired

}

export default DailyHealthExercisePostFeedRequest;
