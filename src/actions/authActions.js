import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  LOGOUT,
  FORGOT_PASSWORD_START,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from "../constants/actionTypes";
import * as api from "../api/index.js";
export const signUpStart = () => ({ type: SIGN_UP_START });
export const signUpSuccess = (user) => ({
  type: SIGN_UP_SUCCESS,
  payload: user,
});
export const signUpFail = (error) => ({ type: SIGN_UP_FAIL, payload: error });

export const signUp = (credentials) => async (dispatch) => {
  dispatch(signUpStart());
  try {
    const { user } = await api.signUp(
      credentials.firstName,
      credentials.lastName,
      credentials.phoneNumber,
      credentials.email,
      credentials.password,
      credentials.confirmPassword
    );
    dispatch(signUpSuccess(user));
  } catch (error) {
    dispatch(signUpFail(error));
  }
};

// Sign in action creators
export const signInStart = () => ({ type: SIGN_IN_START });
export const signInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});
export const signInFail = (error) => ({ type: SIGN_IN_FAIL, payload: error });

export const signIn = (credentials) => async (dispatch) => {
  dispatch(signInStart());
  try {
    const { user } = await api.signIn(credentials.email, credentials.password);
    dispatch(signInSuccess(user));
  } catch (error) {
    dispatch(signInFail(error));
  }
};

// Sign out action creator
export const logout = () => async (dispatch) => {
  await api.logout();
  dispatch({ type: LOGOUT });
};

// Forgot password action creators
export const forgotPasswordStart = () => ({
  type: FORGOT_PASSWORD_START,
});
export const forgotPasswordSuccess = () => ({
  type: FORGOT_PASSWORD_SUCCESS,
});
export const forgotPasswordFail = (error) => ({
  type: FORGOT_PASSWORD_FAIL,
  payload: error,
});

export const forgotPassword = (email) => async (dispatch) => {
  dispatch(forgotPasswordStart());
  try {
    await api.forgotPassword(email);
    dispatch(forgotPasswordSuccess());
  } catch (error) {
    dispatch(forgotPasswordFail(error));
  }
};

export const resetPasswordRequest = () => ({
  type: RESET_PASSWORD_REQUEST,
});

export const resetPasswordSuccess = (message) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: message,
});

export const resetPasswordFailure = (error) => ({
  type: RESET_PASSWORD_FAILURE,
  payload: error,
});

export const resetPassword = (email) => async (dispatch) => {
  dispatch(resetPasswordRequest());

  try {
    const response = await fetch("/api/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch(resetPasswordSuccess(data.message));
    } else {
      dispatch(resetPasswordFailure(data.error));
    }
  } catch (error) {
    dispatch(resetPasswordFailure(error.message));
  }
};
