// import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "../action/UserAction";

import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "../action/UserAction";

// const initialState = {
//     user: [],
//     loading: false,
//     error: null
// }

// export const UserReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_USER_REQUEST: {
//             return {
//                 ...state,
//                 loading: true

//             }
//             break;

//         }
//         case GET_USER_SUCCESS: {
//             return {
//                 ...state,
//                 user: action.payload,
//                 loading: false

//             }
//             break;
//         }
//         case GET_USER_FAILURE: {
//             return {
//                 ...state,
//                 error: action.payload,
//                 loading: false

//             }
//         }
//         default:
//             return state;
//     }

// }


// reducer/UserReducer.js
// import {
//     GET_USER_REQUEST,
//     GET_USER_SUCCESS,
//     GET_USER_FAILURE,
//   } from '../constants/UserData';
  
const initialState = {
    users: [],
    loading: false,
    error: null,
  };
  
  export const UserReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_REQUEST:
        return { ...state, loading: true };
      case GET_USER_SUCCESS:
        return { ...state, loading: false, users: action.payload };
      case GET_USER_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };