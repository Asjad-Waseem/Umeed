import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../Common/Spinner';
import { getApprovedMotivationalVideos } from '../../Actions/motivationalvideoActions';
import MotivationalVideosFeed from './MotivationalVideosFeed';

class MotivationalVideos extends Component {

    componentDidMount() {

        this.props.getApprovedMotivationalVideos();

    }
  render() {

    const { motivationalvideos, loading } = this.props.video;

    console.log(motivationalvideos);

    console.log(this.props.video);

    let videoContent;
    
    if(motivationalvideos === null || loading) {

        videoContent = <Spinner />

    } else {

        videoContent = <MotivationalVideosFeed motivationalvideos = {motivationalvideos} />

    }

    return (
      <div className = "feed">

          <div className = "container">

              <div className = "row">

                  <div className = "col-md-12">
                   
                   {videoContent}

                  </div>

              </div>
          </div>
        
      </div>
    )
  }
}

MotivationalVideos.propTypes = {

    getApprovedMotivationalVideos: PropTypes.func.isRequired,    
    motivationalvideos: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

video: state.motivationalvideos

});

export default connect(mapStateToProps, { getApprovedMotivationalVideos })(MotivationalVideos);
