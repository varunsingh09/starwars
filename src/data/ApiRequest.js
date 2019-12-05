import axios from "axios";

const axiosConfig = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Cache-Control",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
  },
};


if (localStorage.getItem("auth_key") !== null && localStorage.getItem("auth_key")) {
  axiosConfig.headers.hs18_auth_app = localStorage.getItem("auth_key");
}


export const axiosPost = function (data, ...params) {
  return axios.post(`${params[0]}`, data, axiosConfig);
};

export const axiosGet = function (data, ...params) {
  return axios.get(`${params[0]}`, axiosConfig);
};
