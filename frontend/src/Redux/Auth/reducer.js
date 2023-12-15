import { cookieData } from "../../Utils/Cookie-Data";
import * as types from "./actionTypes";
const initialState = {
  cred: cookieData("getUserDetail") || {},
  isAuth: (await cookieData("auth")) || false,
  isAdmin: false,
  isLoading: false,
  isError: false,
  errorMessage: "",
};
export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...oldState,
        cred: payload,
        isLoading: false,
        isError: true,
        isAuth: payload,
      };
    case types.LOGIN_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    case types.SIGNUP_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...oldState,
        cred: payload,
        isLoading: false,
        isAuth: payload,
        isError: true,
        errorMessage: "",
      };
    case types.SIGNUP_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        errorMessage: payload,
      };
    default:
      return oldState;
  }
};
