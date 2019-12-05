import * as Api from "./ApiRequest";

const HOST_NAME = "https://swapi.co/api/";
const API_PLANETS = "planets";
const API_PEOPLE = "people";
const API_LOGIN = `${HOST_NAME}${API_PEOPLE}`;
const API_SEARCH = `${HOST_NAME}${API_PLANETS}`;


export const homeLogin = function (...params) { // let {birth_year ,name } = params[0]
  return Api.axiosGet(null, API_LOGIN);
};

export const searchHome = function (...params) {
  return Api.axiosGet(null, API_SEARCH);
};
