import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../../../Common/Spinner';
import { getArticleBlogPostRequests } from '../../../../Actions/adminActions/approvearticlepostActions';
import ArticleBlogPostsFeedRequest from './ArticleBlogPostFeedRequest';

class ArticleBlogPostRequests extends Component {

    componentDidMount() {

        this.props.getArticleBlogPostRequests();

    }
  render() {

    const { articleblogpostrequests, loading } = this.props.post;

    console.log(articleblogpostrequests);

    console.log(this.props.post);

    let postContent;
    
    if(articleblogpostrequests === null || loading) {

        postContent = <Spinner />

    } else {

        postContent = <ArticleBlogPostsFeedRequest articleblogpostrequests = {articleblogpostrequests} />

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

ArticleBlogPostRequests.propTypes = {

    getArticleBlogPostRequests: PropTypes.func.isRequired,    
    articleblogpostrequest: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

post: state.articleblogpostrequest

});

export default connect(mapStateToProps, { getArticleBlogPostRequests })(ArticleBlogPostRequests);
