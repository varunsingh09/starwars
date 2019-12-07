
import { SEARCH_PENDING, SEARCH_SUCCESS, SEARCH_ERROR, LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR } from "./types/index";
import { homeLogin, searchHome } from "./../data/home";

export function UserLogin(params) {

  return async dispatch => {
    dispatch({
      type: LOGIN_PENDING,
    });

    try {
      const users = await homeLogin(params)
        .then(res => res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: users,
      });
    } catch (err) {
      dispatch({
        type: LOGIN_ERROR,
        error: err.message,
      });
    }
  };
}

export function HomeSearch(params) {

  return async dispatch => {
    dispatch({
      type: SEARCH_PENDING,
    });

    try {
      const result = await searchHome(params)
        .then(res => res);
      dispatch({
        type: SEARCH_SUCCESS,
        payload: result,
      });
    } catch (err) {
      dispatch({
        type: SEARCH_ERROR,
        error: err.message,
      });
    }
  };
}