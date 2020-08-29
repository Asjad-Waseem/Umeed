import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ArticleBlogPostItemRequest from './ArticleBlogPostItemRequest';

class ArticleBlogPostsFeedRequest extends Component {

    render() {

     const { articleblogpostrequests } = this.props; 

    console.log(articleblogpostrequests);

     return articleblogpostrequests.map( post => <ArticleBlogPostItemRequest key = {post._id} post = {post} /> )
   
  }
}

ArticleBlogPostsFeedRequest.propTypes = {

    articleblogpostrequests: PropTypes.array.isRequired

}

export default ArticleBlogPostsFeedRequest;
