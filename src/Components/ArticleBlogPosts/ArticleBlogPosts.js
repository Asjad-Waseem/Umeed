import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../Common/Spinner';
import { getApprovedArticleBlogPosts } from '../../Actions/articleblogpostActions';
import ArticleBlogPostsFeed from './ArticleBlogPostsFeed';

class ArticleBlogPosts extends Component {

    componentDidMount() {

        this.props.getApprovedArticleBlogPosts();

    }
  render() {

    const { articleblogposts, loading } = this.props.post;

    console.log(articleblogposts);

    console.log(this.props.post);

    let postContent;
    
    if(articleblogposts === null || loading) {

        postContent = <Spinner />

    } else {

        postContent = <ArticleBlogPostsFeed articleblogposts = {articleblogposts} />

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

ArticleBlogPosts.propTypes = {

    getApprovedArticleBlogPosts: PropTypes.func.isRequired,    
    articleblogpost: PropTypes.object.isRequired

}

const mapStateToProps = state => ({

post: state.articleblogpost

});

export default connect(mapStateToProps, { getApprovedArticleBlogPosts })(ArticleBlogPosts);
