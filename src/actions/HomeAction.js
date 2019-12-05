import * as Home from "../data/home";
import { SEARCH, LOGIN } from "./types/index";

export const UserLogin = function (user) {
  const retData = {
    type: LOGIN,
    LoginDetails: new Promise((resolve, reject) => {
      Home.homeLogin(user).then((response) => {
        resolve(response);
      }).catch((err) => {
        // console.log(err);
      });
    }),
  };
  return retData;
};


export const HomeSearch = function (strings) {
  const retData = {
    type: SEARCH,
    SearchDetails: new Promise((resolve, reject) => {
      Home.searchHome(strings).then((response) => {
        resolve(response);
      }).catch((err) => {
        // console.log(err);
      });
    }),
  };
  return retData;
};
