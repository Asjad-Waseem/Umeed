import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import MotivationalVideoItem from './MotivationalVideoItem';

class MotivationalVideoFeed extends Component {

    render() {

     const { motivationalvideos } = this.props; 

    console.log(motivationalvideos);

     return motivationalvideos.map( video => <MotivationalVideoItem key = {video._id} video = {video} /> )
   
  }
}

MotivationalVideoFeed.propTypes = {

    motivationalvideos: PropTypes.array.isRequired

}

export default MotivationalVideoFeed;
