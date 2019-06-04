import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdItem from './AdItem';

class AdFeed extends Component {
  render() {
    const { ads } = this.props;

    return ads.map(ad => <AdItem key={ad._id} ad={ad} />);
  }
}

AdFeed.propTypes = {
  ads: PropTypes.array.isRequired
};

export default AdFeed;
