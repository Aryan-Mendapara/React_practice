import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "../action/UserAction";
import axios from "axios"

export const userData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });

    const res = await axios.get('https://67976f47c2c861de0c6cb34b.mockapi.io/weetech/v1/weetech');
    dispatch({ type: GET_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};