
import { PENDING, SEARCH_SUCCESS, ERROR, LOGIN_SUCCESS } from "./types/index";
import { homeLogin, searchHome } from "./../data/home";

export function UserLogin(params) {

  return async dispatch => {
    dispatch({
      type: PENDING,
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
        type: ERROR,
        error: err.message,
      });
    }
  };
}

export function HomeSearch(params) {

  return async dispatch => {
    dispatch({
      type: PENDING,
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
        type: ERROR,
        error: err.message,
      });
    }
  };
}