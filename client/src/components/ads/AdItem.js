import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { deleteAd, addLike, removeLike } from '../../actions/adActions';

class AdItem extends Component {
  onDeleteClick(id) {
    this.props.deleteAd(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { ad, auth, showActions } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src={ad.avatar}
                alt=""
              />
            </a>
            <br />
            <p className="text-center">{ad.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{ad.text}</p>
            {showActions ? (
              <span>
                <button
                  onClick={this.onLikeClick.bind(this, ad._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i
                    className={classnames('fas fa-thumbs-up', {
                      'text-info': this.findUserLike(ad.likes)
                    })}
                  />
                  <span className="badge badge-light">{ad.likes.length}</span>
                </button>
                <button
                  onClick={this.onUnlikeClick.bind(this, ad._id)}
                  type="button"
                  className="btn btn-light mr-1"
                >
                  <i className="text-secondary fas fa-thumbs-down" />
                </button>
                <Link to={`/ad/${ad._id}`} className="btn btn-info mr-1">
                  Comments
                </Link>
                {ad.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, ad._id)}
                    type="button"
                    className="btn btn-danger mr-1"
                  >
                    <i className="fas fa-times" />
                  </button>
                ) : null}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

AdItem.defaultProps = {
  showActions: true
};

AdItem.propTypes = {
  deleteAd: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  ad: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteAd, addLike, removeLike })(
  AdItem
);
