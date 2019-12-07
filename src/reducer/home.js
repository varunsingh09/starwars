import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR, SEARCH_PENDING, SEARCH_SUCCESS, SEARCH_ERROR } from "../actions/types";

const initialState = {
  pending: false,
  results: [],
  error: null
};

export const HomeReducer = function (state = initialState, action) {
  switch (action.type) {
  case LOGIN_PENDING:
    return {
      ...state,
      pending: true
    };

  case LOGIN_SUCCESS:
    return {
      ...state,
      pending: false,
      results: action.payload
    };

  case LOGIN_ERROR:
    return {
      ...state,
      pending: false,
      error: action.error
    };

  case SEARCH_PENDING:
    return {
      ...state,
      pending: true
    };

  case SEARCH_SUCCESS:
    return {
      ...state,
      pending: false,
      results: action.payload
    };

  case SEARCH_ERROR:
    return {
      ...state,
      pending: false,
      error: action.error
    };


  default:
    return state;
  }
};
