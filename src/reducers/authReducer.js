// import {
//   SIGN_UP_START,
//   SIGN_UP_SUCCESS,
//   SIGN_UP_FAIL,
//   SIGN_IN_START,
//   SIGN_IN_SUCCESS,
//   SIGN_IN_FAIL,
//   LOGOUT,
//   FORGOT_PASSWORD_START,
//   FORGOT_PASSWORD_SUCCESS,
//   FORGOT_PASSWORD_FAIL,
//   RESET_PASSWORD_REQUEST,
//   RESET_PASSWORD_SUCCESS,
//   RESET_PASSWORD_FAILURE,
// } from "../constants/actionTypes";

// // Initial state
// const initialState = {
//   isLoading: false,
//   isAuthenticated: false,
//   user: null,
//   error: null,
// };

// // Reducer
// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SIGN_UP_START:
//       return { ...state, isLoading: true };
//     case SIGN_UP_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         isAuthenticated: true,
//         user: action.payload,
//         error: null,
//       };
//     // case SIGN_UP_FAIL:
//     //   return { ...state, isLoading: false, error: action.payload };
//     case SIGN_IN_START:
//       return { ...state, isLoading: true };
//     case SIGN_IN_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         isAuthenticated: true,
//         user: action.payload,
//         error: null,
//       };
//     case SIGN_IN_FAIL:
//       return { ...state, isLoading: false, error: action.payload };
//     case LOGOUT:
//       return { ...initialState };
//     case FORGOT_PASSWORD_START:
//       return { ...state, isLoading: true };
//     case FORGOT_PASSWORD_SUCCESS:
//       return { ...state, isLoading: false, error: null };
//     case FORGOT_PASSWORD_FAIL:
//       return { ...state, isLoading: false, error: action.payload };
//     case RESET_PASSWORD_REQUEST:
//       return {
//         ...state,
//         isLoading: true,
//       };
//     case RESET_PASSWORD_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         message: action.payload,
//       };
//     case RESET_PASSWORD_FAILURE:
//       return {
//         ...state,
//         isLoading: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default authReducer;
