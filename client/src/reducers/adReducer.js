import {
  ADD_AD,
  GET_ADS,
  GET_AD,
  DELETE_AD,
  AD_LOADING
} from '../actions/types';

const initialState = {
  ads: [],
  ad: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AD_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ADS:
      return {
        ...state,
        ads: action.payload,
        loading: false
      };
    case GET_AD:
      return {
        ...state,
        ad: action.payload,
        loading: false
      };
    case ADD_AD:
      return {
        ...state,
        ads: [action.payload, ...state.ads]
      };
    case DELETE_AD:
      return {
        ...state,
        ads: state.ads.filter(ad => ad._id !== action.payload)
      };
    default:
      return state;
  }
}
