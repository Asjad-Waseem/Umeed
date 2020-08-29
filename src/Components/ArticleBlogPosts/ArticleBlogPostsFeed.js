import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ArticleBlogPostItem from './ArticleBlogPostItem';

class ArticleBlogPostsFeed extends Component {

    render() {

     const { articleblogposts } = this.props; 

    console.log(articleblogposts);

     return articleblogposts.map( post => <ArticleBlogPostItem key = {post._id} post = {post} /> )
   
  }
}

ArticleBlogPostsFeed.propTypes = {

    articleblogposts: PropTypes.array.isRequired

}

export default ArticleBlogPostsFeed;
