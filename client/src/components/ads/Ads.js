import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdForm from './AdForm';
import AdFeed from './AdFeed';
import Spinner from '../common/Spinner';
import { getAds } from '../../actions/adActions';

class Ads extends Component {
  componentDidMount() {
    this.props.getAds();
  }

  render() {
    const { ads, loading } = this.props.ad;
    let adContent;

    if (ads === null || loading) {
      adContent = <Spinner />;
    } else {
      adContent = <AdFeed ads={ads} />;
    }

    return (
      <div className="feed">
        Hello
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <AdForm />
              {adContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Ads.propTypes = {
  getAds: PropTypes.func.isRequired,
  ad: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  ad: state.ad
});

export default connect(mapStateToProps, { getAds })(Ads);
