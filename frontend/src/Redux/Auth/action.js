import axios from "axios";
import * as types from "./actionTypes";

export const login = (params) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .post("/api/v1/auth/login", params)
    .then((res) => {
      return dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.user });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({ type: types.LOGIN_FAILURE });
    });
};

export const register = (params) => (dispatch) => {
  dispatch({ type: types.SIGNUP_REQUEST });
  return axios
    .post("/api/v1/auth/register", params)
    .then((res) => {
      return dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data.user });
    })
    .catch((err) => {
      console.log(err);
      return dispatch({
        type: types.SIGNUP_FAILURE,
        payload: err.response.data.msg,
      });
    });
};
