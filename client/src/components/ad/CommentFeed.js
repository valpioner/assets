import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';

class CommentFeed extends Component {
  render() {
    const { comments, adId } = this.props;

    return comments.map(comment => (
      <CommentItem key={comment._id} comment={comment} adId={adId} />
    ));
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  adId: PropTypes.string.isRequired
};

export default CommentFeed;
