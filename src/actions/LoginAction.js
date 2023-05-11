// actions.js
import {SIGN_IN_SUCCESS, LOGOUT} from "../constants/actionTypes";

export const loginSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const logout = () => ({
  type: LOGOUT,
});
