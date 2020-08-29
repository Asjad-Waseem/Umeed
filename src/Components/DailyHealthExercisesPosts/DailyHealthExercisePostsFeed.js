import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import DailyHealthExercisePostItem from './DailyHealthExercisePostItem';

class DailyHealthExercisePostsFeed extends Component {

    render() {

     const { dailyhealthexerciseposts } = this.props; 

    console.log(dailyhealthexerciseposts);

     return dailyhealthexerciseposts.map( post => <DailyHealthExercisePostItem key = {post._id} post = {post} /> )
   
  }
}

DailyHealthExercisePostsFeed.propTypes = {

    dailyhealthexerciseposts: PropTypes.array.isRequired

}

export default DailyHealthExercisePostsFeed;
