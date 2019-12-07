import { PENDING, LOGIN_SUCCESS, ERROR, SEARCH_SUCCESS} from "../actions/types";

const initialState = {
  pending: false,
  results: [],
  error: null
};

export const HomeReducer = function (state = initialState, action) {
  switch (action.type) {
  case PENDING:
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

  case ERROR:
    return {
      ...state,
      pending: false,
      error: action.error
    };

  case SEARCH_SUCCESS:
    return {
      ...state,
      pending: false,
      results: action.payload
    };

  default:
    return state;
  }
};
