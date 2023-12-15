import { cookieData } from "../../Utils/Cookie-Data";
import * as types from "./actionTypes";
const initialState = {
  cred: cookieData("getUserDetail") || {},
  isAuth: cookieData("getUserDetail").userId ? true : false,
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
      cookieData("userDetail", payload);
      return {
        ...oldState,
        cred: payload,
        isLoading: false,
        isError: true,
        isAuth: true,
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
      cookieData("userDetail", payload);
      return {
        ...oldState,
        cred: payload,
        isLoading: false,
        isAuth: true,
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
