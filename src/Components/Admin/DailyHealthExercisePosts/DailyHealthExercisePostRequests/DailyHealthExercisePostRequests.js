import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../../Common/Spinner';
import { getDailyHealthExercisePostRequests } from '../../../../Actions/adminActions/approvedailyhealthexercisepostActions';
import DailyHealthExercisePostFeedRequest from './DailyHealthExercisePostFeedRequest';

class DailyHealthExercisePostRequests extends Component {

    componentDidMount() {

        this.props.getDailyHealthExercisePostRequests();

    }
  render() {

    const { dailyhealthexercisepostrequests, loading } = this.props.post;

    console.log(dailyhealthexercisepostrequests);

    console.log(this.props.post);

    let postContent;
    
    if(dailyhealthexercisepostrequests === null || loading) {

        postContent = <Spinner />

    } else {

        postContent = <DailyHealthExercisePostFeedRequest dailyhealthexercisepostrequests = {dailyhealthexercisepostrequests} />

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

DailyHealthExercisePostRequests.propTypes = {

    getDailyHealthExercisePostRequests: PropTypes.func.isRequired,    
    dailyhealthexercisepostrequest: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

post: state.dailyhealthexercisepostrequest

});

export default connect(mapStateToProps, { getDailyHealthExercisePostRequests })(DailyHealthExercisePostRequests);
