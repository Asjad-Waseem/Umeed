import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticleBlogPostForm from './ArticleBlogPostForm';
import Spinner from '../Common/Spinner';

class ArticleBlogPost extends Component {
  render() {
    return (
      <div className = "feed">

          <div className = "container">

              <div className = "row">

                  <div className = "col-md-12">

                  <ArticleBlogPostForm />
                   
                  </div>


              </div>
          </div>
        
      </div>
    )
  }
}

export default ArticleBlogPost;
