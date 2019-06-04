import axios from 'axios';

import {
  ADD_AD,
  GET_ERRORS,
  CLEAR_ERRORS,
  GET_ADS,
  GET_AD,
  AD_LOADING,
  DELETE_AD
} from './types';

// Add Ad
export const addAd = adData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/api/ads', adData)
    .then(res =>
      dispatch({
        type: ADD_AD,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Ads
export const getAds = () => dispatch => {
  dispatch(setAdLoading());
  axios
    .get('/api/ads')
    .then(res =>
      dispatch({
        type: GET_ADS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ADS,
        payload: null
      })
    );
};

// Get Ad
export const getAd = id => dispatch => {
  dispatch(setAdLoading());
  axios
    .get(`/api/ads/${id}`)
    .then(res =>
      dispatch({
        type: GET_AD,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_AD,
        payload: null
      })
    );
};

// Delete Ad
export const deleteAd = id => dispatch => {
  axios
    .delete(`/api/ads/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_AD,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Like
export const addLike = id => dispatch => {
  axios
    .post(`/api/ads/like/${id}`)
    .then(res => dispatch(getAds()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Remove Like
export const removeLike = id => dispatch => {
  axios
    .post(`/api/ads/unlike/${id}`)
    .then(res => dispatch(getAds()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Comment
export const addComment = (adId, commentData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/ads/comment/${adId}`, commentData)
    .then(res =>
      dispatch({
        type: GET_AD,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Comment
export const deleteComment = (adId, commentId) => dispatch => {
  axios
    .delete(`/api/ads/comment/${adId}/${commentId}`)
    .then(res =>
      dispatch({
        type: GET_AD,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set loading state
export const setAdLoading = () => {
  return {
    type: AD_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
