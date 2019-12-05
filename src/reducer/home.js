import { LOGIN, SEARCH } from "../actions/types";

const initial_state = {
  dataList: [],
};

export const HomeReducer = function (state = [initial_state], action) {
  switch (action.type) {
  case LOGIN:
    return { ...state, dataList: action.LoginDetails };
  case SEARCH:
    return { ...state, searchList: action.SearchDetails };

  default:
    return state;
  }
};
