import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AdItem from '../ads/AdItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';
import Spinner from '../common/Spinner';
import { getAd } from '../../actions/adActions';

class Ad extends Component {
  componentDidMount() {
    this.props.getAd(this.props.match.params.id);
  }

  render() {
    const { ad, loading } = this.props.ad;
    let adContent;

    if (ad === null || loading || Object.keys(ad).length === 0) {
      adContent = <Spinner />;
    } else {
      adContent = (
        <div>
          <AdItem ad={ad} showActions={false} />
          <CommentForm adId={ad._id} />
          <CommentFeed adId={ad._id} comments={ad.comments} />
        </div>
      );
    }

    return (
      <div className="ad">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/ads" className="btn btn-light mb-3">
                Back To Feed
              </Link>
              {adContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Ad.propTypes = {
  getAd: PropTypes.func.isRequired,
  ad: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  ad: state.ad
});

export default connect(mapStateToProps, { getAd })(Ad);
