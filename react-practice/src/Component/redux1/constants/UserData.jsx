import axios from 'axios';
import { GET_USER_REQUEST } from '../action/UserAction';


export const userData = () =>
    async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });

    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(">>>",res);
    
    dispatch({ type: GET_USER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: GET_USER_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};