import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DailyHealthExercisePostForm from './DailyHealthExercisePostForm';
import Spinner from '../Common/Spinner';

class DailyHealthExercisePost extends Component {
  render() {
    return (
      <div className = "feed">

          <div className = "container">

              <div className = "row">

                  <div className = "col-md-12">

                  <DailyHealthExercisePostForm />
                   
                  </div>


              </div>
          </div>
        
      </div>
    )
  }
}

export default DailyHealthExercisePost;
