import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../Common/Spinner';
import { getApprovedDailyHealthExerciseBlogPosts } from '../../Actions/dailyhealthexercisepostActions';
import DailyHealthExercisePostsFeed from './DailyHealthExercisePostsFeed';

class DailyHealthExercisePosts extends Component {

    componentDidMount() {

        this.props.getApprovedDailyHealthExerciseBlogPosts();

    }
  render() {

    const { dailyhealthexerciseposts, loading } = this.props.post;

    console.log(dailyhealthexerciseposts);

    console.log(this.props.post);

    let postContent;
    
    if(dailyhealthexerciseposts === null || loading) {

        postContent = <Spinner />

    } else {

        postContent = <DailyHealthExercisePostsFeed dailyhealthexerciseposts = {dailyhealthexerciseposts} />

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

DailyHealthExercisePosts.propTypes = {

    getApprovedDailyHealthExerciseBlogPosts: PropTypes.func.isRequired,    
    dailyhealthexercisepost: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

post: state.dailyhealthexercisepost

});

export default connect(mapStateToProps, { getApprovedDailyHealthExerciseBlogPosts })(DailyHealthExercisePosts);
